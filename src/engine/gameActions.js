import { getGameState, updateGameState, addToHistory, getLocation, updateLocation } from './gameState';
import { locations } from '../data/locations';
import { items } from '../data/items';
import { characters } from '../data/characters';
import { quests } from '../data/quests';
import { commandHelp } from './commandParser';

export function executeCommand(command, params) {
  const state = getGameState();
  let response;

  switch (command) {
    case 'start':
      response = startGame(state);
      break;
    case 'look':
      response = lookAround(state);
      break;
    case 'go':
      response = goDirection(params, state);
      break;
    case 'examine':
      response = examineObject(params, state);
      break;
    case 'take':
      response = takeItem(params, state);
      break;
    case 'inventory':
      response = checkInventory(state);
      break;
    case 'use':
      response = useItem(params, state);
      break;
    case 'speak':
      response = speakToCharacter(params, state);
      break;
    case 'help':
      response = showHelp();
      break;
    case 'quest':
      response = showQuests(state);
      break;
    default:
      response = handleUnknownCommand(params);
      break;
  }

  addToHistory(response);
  
  return getGameState();
}

function startGame(state) {
  return "Your adventure begins. You stand in the center of a small village, the sounds of daily life all around you.";
}

function lookAround(state) {
  const location = getLocation(state.currentLocation);
  
  if (!location) {
    return "Error: Current location not found.";
  }
  
  let description = location.longDescription;
  
  if (location.firstVisit) {
    updateLocation(state.currentLocation, { firstVisit: false });
  }
  
  let response = `${location.name}\n\n${description}\n\n`;
  
  if (location.exits && Object.keys(location.exits).length > 0) {
    response += "Exits: ";
    response += Object.keys(location.exits)
      .map(dir => {
        if (dir === 'in') return 'inside';
        if (dir === 'out') return 'outside';
        return dir;
      })
      .join(', ');
    response += "\n\n";
  } else {
    response += "There are no obvious exits.\n\n";
  }
  
  if (location.items && location.items.length > 0) {
    response += "You can see: ";
    response += location.items
      .map(itemId => items[itemId].name)
      .join(', ');
    response += "\n\n";
  }
  
  if (location.characters && location.characters.length > 0) {
    response += "Present: ";
    response += location.characters
      .map(charId => characters[charId].name)
      .join(', ');
    response += "\n";
  }
  
  return response;
}

function goDirection(direction, state) {
  if (!direction) {
    return "Go where? Please specify a direction (north, south, east, west, up, down, in, out).";
  }
  
  const location = getLocation(state.currentLocation);
  
  if (!location) {
    return "Error: Current location not found.";
  }
  
  direction = direction.toLowerCase().trim();
  
  const directionMapping = {
    'n': 'north',
    'e': 'east',
    's': 'south',
    'w': 'west',
    'u': 'up',
    'd': 'down',
    'north': 'north',
    'east': 'east',
    'south': 'south',
    'west': 'west',
    'up': 'up',
    'down': 'down',
    'inside': 'in',
    'in': 'in',
    'outside': 'out',
    'out': 'out'
  };
  
  const standardDirection = directionMapping[direction];
  
  if (!standardDirection) {
    return `I don't understand that direction: "${direction}".`;
  }
  
  if (location.exits && location.exits[standardDirection]) {
    const newLocationId = location.exits[standardDirection];
    const newLocation = getLocation(newLocationId);
    
    if (!newLocation) {
      return `Error: Destination location "${newLocationId}" not found.`;
    }
    
    updateGameState({ currentLocation: newLocationId });
    
    checkQuestProgressOnMovement(state, newLocationId);
    
    return `You go ${direction}.\n\n${lookAround(getGameState())}`;
  } else {
    return `You can't go ${direction} from here.`;
  }
}

function checkQuestProgressOnMovement(state, newLocationId) {
  if (newLocationId === 'forest_entrance' && 
      state.quests.mainQuest.steps.find(step => step.id === 'enter_forest' && !step.completed)) {
    completeQuestStep('mainQuest', 'enter_forest');
    addToHistory('Quest updated: You have entered the forest.');
  }
  
  if (newLocationId === 'cave_entrance_chamber' && 
      state.quests.mainQuest.steps.find(step => step.id === 'enter_caves' && !step.completed)) {
    completeQuestStep('mainQuest', 'enter_caves');
    addToHistory('Quest updated: You have found the entrance to the ancient caves.');
  }
}

function completeQuestStep(questId, stepId) {
  const state = getGameState();
  const quest = state.quests[questId];
  
  if (!quest) return;
  
  const updatedSteps = quest.steps.map(step => {
    if (step.id === stepId) {
      return { ...step, completed: true };
    }
    return step;
  });
  
  updateGameState({
    quests: {
      ...state.quests,
      [questId]: {
        ...quest,
        steps: updatedSteps
      }
    }
  });
}

function examineObject(target, state) {
  if (!target) {
    return "Examine what? Please specify something to look at more closely.";
  }
  
  const location = getLocation(state.currentLocation);
  
  if (!location) {
    return "Error: Current location not found.";
  }
  
  target = target.toLowerCase().trim();
  
  if (['room', 'area', 'place', 'surroundings', 'around', 'here', 'location'].includes(target)) {
    return lookAround(state);
  }
  
  const locationItemId = location.items?.find(itemId => {
    const item = items[itemId];
    if (!item) return false;
    
    const itemName = item.name.toLowerCase();
    return itemName === target || 
           itemName.includes(target) || 
           target.includes(itemName) ||
           itemName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => itemName.includes(word));
  });
  
  if (locationItemId) {
    const item = items[locationItemId];
    return item.onExamine || `You examine the ${item.name}. ${item.description}`;
  }
  
  const inventoryItemId = state.inventory.find(itemId => {
    const item = items[itemId];
    if (!item) return false;
    
    const itemName = item.name.toLowerCase();
    return itemName === target || 
           itemName.includes(target) || 
           target.includes(itemName) ||
           itemName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => itemName.includes(word));
  });
  
  if (inventoryItemId) {
    const item = items[inventoryItemId];
    return item.onExamine || `You examine the ${item.name}. ${item.description}`;
  }
  
  const characterId = location.characters?.find(charId => {
    const character = characters[charId];
    if (!character) return false;
    
    const charName = character.name.toLowerCase();
    return charName === target || 
           charName.includes(target) || 
           target.includes(charName) ||
           charName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => charName.includes(word));
  });
  
  if (characterId) {
    const character = characters[characterId];
    return `You look at ${character.name}. ${character.description}`;
  }
  
  return `You don't see anything special about "${target}".`;
}

function takeItem(target, state) {
  if (!target) {
    return "Take what? Please specify an item to pick up.";
  }
  
  const location = getLocation(state.currentLocation);
  
  if (!location) {
    return "Error: Current location not found.";
  }
  
  target = target.toLowerCase().trim();
  
  const itemIndex = location.items?.findIndex(itemId => {
    const item = items[itemId];
    if (!item) return false;
    
    const itemName = item.name.toLowerCase();
    return itemName === target || 
           itemName.includes(target) || 
           target.includes(itemName) ||
           itemName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => itemName.includes(word));
  });
  
  if (itemIndex === -1 || itemIndex === undefined) {
    return `You don't see a "${target}" here.`;
  }
  
  const itemId = location.items[itemIndex];
  const item = items[itemId];
  
  if (!item.takeable) {
    return `You can't take the ${item.name}.`;
  }
  
  const updatedItems = [...location.items];
  updatedItems.splice(itemIndex, 1);
  
  updateLocation(state.currentLocation, { items: updatedItems });
  
  const updatedInventory = [...state.inventory, itemId];
  
  updateGameState({ inventory: updatedInventory });
  
  if (itemId === 'ancient_artifact') {
    completeQuestStep('mainQuest', 'retrieve_artifact');
    addToHistory('Quest updated: You have retrieved the forgotten artifact!');
  }
  
  return item.onTake || `You take the ${item.name}.`;
}

function checkInventory(state) {
  if (!state.inventory || state.inventory.length === 0) {
    return "Your inventory is empty.";
  }
  
  let response = "Inventory:\n";
  
  state.inventory.forEach(itemId => {
    const item = items[itemId];
    if (item) {
      response += `- ${item.name}: ${item.description}\n`;
    }
  });
  
  return response;
}

function useItem(target, state) {
  if (!target) {
    return "Use what? Please specify an item to use.";
  }
  
  target = target.toLowerCase().trim();
  
  const itemId = state.inventory.find(id => {
    const item = items[id];
    if (!item) return false;
    
    const itemName = item.name.toLowerCase();
    return itemName === target || 
           itemName.includes(target) || 
           target.includes(itemName) ||
           itemName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => itemName.includes(word));
  });
  
  if (!itemId) {
    return `You don't have a "${target}" in your inventory.`;
  }
  
  const item = items[itemId];
  
  if (!item.usable) {
    return `You can't use the ${item.name}.`;
  }
  
  if (itemId === 'ancient_map') {
    return item.onUse || `You use the ${item.name}.`;
  }
  
  return item.onUse || `You use the ${item.name}.`;
}

function speakToCharacter(target, state) {
  if (!target) {
    return "Speak to whom? Please specify a character to talk to.";
  }
  
  const location = getLocation(state.currentLocation);
  
  if (!location) {
    return "Error: Current location not found.";
  }
  
  target = target.toLowerCase().trim();
  
  const characterId = location.characters?.find(charId => {
    const character = characters[charId];
    if (!character) return false;
    
    const charName = character.name.toLowerCase();
    return charName === target || 
           charName.includes(target) || 
           target.includes(charName) ||
           charName.split(" ").some(word => target.includes(word)) ||
           target.split(" ").some(word => charName.includes(word));
  });
  
  if (!characterId) {
    return `There is no "${target}" here to speak with.`;
  }
  
  const character = characters[characterId];
  
  let response = `${character.name}: "${character.dialogue.greeting}"\n\n`;
  
  response += "You can ask about: ";
  const topics = Object.keys(character.dialogue.topics);
  response += topics.join(', ');
  response += "\n";
  
  const questDialogue = checkQuestDialogue(character, state);
  if (questDialogue) {
    response += `\n${questDialogue}\n`;
  }
  
  return response;
}

function checkQuestDialogue(character, state) {
  if (!character.questDialogue) return null;
  
  for (const [stepId, dialogue] of Object.entries(character.questDialogue)) {
    let questStep;
    let questId;
    
    for (const [qId, quest] of Object.entries(state.quests)) {
      const step = quest.steps.find(s => s.id === stepId && !s.completed);
      if (step) {
        questStep = step;
        questId = qId;
        break;
      }
    }
    
    if (questStep) {
      if (dialogue.completeStep) {
        completeQuestStep(questId, dialogue.completeStep);
      }
      
      if (dialogue.giveItem) {
        const updatedInventory = [...state.inventory, dialogue.giveItem];
        updateGameState({ inventory: updatedInventory });
        return `${character.name} gives you ${items[dialogue.giveItem].name} and says: "${dialogue.response}"`;
      }
      
      return `${character.name}: "${dialogue.response}"\n\nQuest updated!`;
    }
  }
  
  return null;
}

// Show help
function showHelp() {
  let response = "Available Commands:\n\n";
  
  commandHelp.forEach(cmd => {
    response += `${cmd.command}: ${cmd.description}\n`;
    response += `Example: ${cmd.examples[0]}\n\n`;
  });
  
  response += "You can also use variations of these commands. For example, 'look at sword' works the same as 'examine sword'.";
  
  return response;
}

// Show quests
function showQuests(state) {
  let response = "Current Quests:\n\n";
  
  for (const [questId, quest] of Object.entries(state.quests)) {
    response += `${quest.title}: ${quest.description}\n\n`;
    response += "Objectives:\n";
    
    quest.steps.forEach(step => {
      const status = step.completed ? "✓" : "○";
      response += `${status} ${step.description}\n`;
      
      if (!step.completed) {
        response += `   Hint: ${step.hint}\n`;
      }
    });
    
    response += "\n";
  }
  
  return response;
}

function handleUnknownCommand(input) {
  return `I don't understand "${input}". Type 'help' to see available commands.`;
}

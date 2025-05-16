import { getGameState, updateGameState, addToHistory } from './gameState';
import { locations } from '../data/locations';
import { items } from '../data/items';
import { characters } from '../data/characters';
import { executeCommand } from './gameActions';

// Command patterns
const commandPatterns = {
  look: /^look$/i,
  go: /^(?:go|move|travel|walk)(?:\s+(?:to|towards|toward|into))?\s+(.+)$/i,
  examine: /^(?:examine|inspect|check|look at|look)\s+(.+)$/i,
  take: /^(?:take|grab|pick up|get|collect)\s+(.+)$/i,
  inventory: /^(?:inventory|i|items|check inventory)$/i,
  use: /^(?:use|activate|apply)\s+(.+)$/i,
  speak: /^(?:speak|talk|chat|converse)(?:\s+(?:to|with|at))?\s+(.+)$/i,
  help: /^(?:help|commands|controls|guide|tutorial)$/i,
  quest: /^(?:quest|quests|mission|objective|goal)s?$/i
};

export function parseCommand(inputText) {
  inputText = inputText.trim().toLowerCase();
  
  for (const [command, pattern] of Object.entries(commandPatterns)) {
    const match = inputText.match(pattern);
    
    if (match) {
      return {
        command,
        params: match.length > 1 ? match[1].trim() : null
      };
    }
  }
  
  return {
    command: 'unknown',
    params: inputText
  };
}

export function processCommand(inputText) {
  const { command, params } = parseCommand(inputText);
  
  addToHistory(`> ${inputText}`, 'command');
  
  return executeCommand(command, params);
}

export const commandHelp = [
  { 
    command: 'look', 
    description: 'Look around at your current location',
    examples: ['look'] 
  },
  { 
    command: 'go', 
    description: 'Move in a direction (north, south, east, west, up, down)',
    examples: ['go north', 'move east', 'walk west'] 
  },
  { 
    command: 'examine', 
    description: 'Look more closely at an object, person, or feature',
    examples: ['examine rock', 'look at tree', 'inspect door'] 
  },
  { 
    command: 'take', 
    description: 'Pick up an item and add it to your inventory',
    examples: ['take sword', 'pick up coin', 'get key'] 
  },
  { 
    command: 'inventory', 
    description: 'Check what items you are carrying',
    examples: ['inventory', 'i'] 
  },
  { 
    command: 'use', 
    description: 'Use an item from your inventory',
    examples: ['use potion', 'use key on door'] 
  },
  { 
    command: 'speak', 
    description: 'Talk to a character',
    examples: ['speak to merchant', 'talk with elder'] 
  },
  { 
    command: 'help', 
    description: 'Show this list of commands',
    examples: ['help', 'commands'] 
  },
  { 
    command: 'quest', 
    description: 'Check your current quest objectives',
    examples: ['quest', 'quests'] 
  }
];

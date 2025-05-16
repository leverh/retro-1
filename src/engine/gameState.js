import { locations as locationsData } from '../data/locations';

export const initialGameState = {
  currentLocation: 'village_square',
  inventory: [],
  characters: {},
  quests: {
    mainQuest: {
      title: 'The Forgotten Artifact',
      description: 'Locate the ancient artifact hidden in the caves beyond the forest.',
      status: 'active',
      steps: [
        { id: 'speak_to_elder', description: 'Speak to the village elder about the artifact.', completed: false },
        { id: 'find_map', description: 'Find the map to the caves.', completed: false },
        { id: 'enter_forest', description: 'Navigate through the forest.', completed: false },
        { id: 'enter_caves', description: 'Find the entrance to the ancient caves.', completed: false },
        { id: 'retrieve_artifact', description: 'Retrieve the forgotten artifact.', completed: false },
        { id: 'return_to_village', description: 'Return the artifact to the village elder.', completed: false }
      ]
    }
  },
  gameHistory: [],
  playerName: 'Adventurer',
  gameLocations: JSON.parse(JSON.stringify(locationsData))
};

export const getGameState = () => {
  return JSON.parse(JSON.stringify(currentGameState));
};

export const updateGameState = (newState) => {
  currentGameState = { ...currentGameState, ...newState };
  return getGameState();
};

export const addToHistory = (message, type = 'narration') => {
  currentGameState.gameHistory.push({
    type,
    message,
    timestamp: Date.now()
  });
};

let currentGameState = { ...initialGameState };

export const resetGameState = () => {
  currentGameState = { ...initialGameState };
  addToHistory('Your adventure begins in the village of Eldervale, a peaceful settlement nestled between ancient forests and misty mountains. The village square bustles with activity as you arrive.');
  return getGameState();
};

export const getLocation = (locationId) => {
  return currentGameState.gameLocations[locationId];
};

export const updateLocation = (locationId, locationData) => {
  currentGameState.gameLocations[locationId] = {
    ...currentGameState.gameLocations[locationId],
    ...locationData
  };
};

resetGameState();

import { useState, useEffect } from 'react';
import CommandInput from './components/CommandInput';
import GameDisplay from './components/GameDisplay';
import InventoryDisplay from './components/InventoryDisplay';
import LocationDisplay from './components/LocationDisplay';
import QuestDisplay from './components/QuestDisplay';
import { getGameState, resetGameState } from './engine/gameState';
import { processCommand } from './engine/commandParser';

import './css/base.css';

function App() {
  const [gameState, setGameState] = useState(getGameState());
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  useEffect(() => {
    const initialState = resetGameState();
    setGameState(initialState);
    
    const introMessage = `
    # The Forgotten Artifact

    Welcome to Eldervale, a peaceful village nestled between ancient forests and misty mountains. You've come seeking adventure, and whispers of a powerful artifact hidden in the mountains have drawn your attention.
    
    Your journey begins in the village square. Explore, talk to the locals, and uncover the secrets of this land.
    
    Type 'help' to see a list of available commands.
    `;
    
    setGameState(prevState => ({
      ...prevState,
      gameHistory: [
        ...prevState.gameHistory,
        { message: introMessage, type: 'intro' }
      ]
    }));
  }, []);

  const handleCommandSubmit = (command) => {
    setCommandHistory([command, ...commandHistory]);
    
    const newState = processCommand(command);
    setGameState(newState);
  };

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>The Forgotten Artifact</h1>
      </header>
      
      <main className="game-main">
        <GameDisplay messages={gameState.gameHistory} />
      </main>
      
      <div className="command-area">
        <CommandInput 
          onSubmitCommand={handleCommandSubmit} 
          historyIndex={historyIndex}
          setHistoryIndex={setHistoryIndex}
          commandHistory={commandHistory}
        />
      </div>
      
      <aside className="game-sidebar">
        <div className="sidebar-panel">
          <LocationDisplay currentLocation={gameState.currentLocation} />
        </div>
        
        <div className="sidebar-panel">
          <InventoryDisplay inventory={gameState.inventory} />
        </div>
        
        <div className="sidebar-panel">
          <QuestDisplay quests={gameState.quests} />
        </div>
      </aside>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import TerminalDisplay from './components/TerminalDisplay';
import TerminalInput from './components/TerminalInput';
import TerminalSidebar from './components/TerminalSidebar';
import { getGameState, resetGameState } from './engine/gameState';
import { processCommand } from './engine/commandParser';

import './css/terminal.css';

function App() {
  const [gameState, setGameState] = useState(getGameState());
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  useEffect(() => {
    const initialState = resetGameState();
    setGameState(initialState);
    
    const introMessage = `
Welcome to the Realm of Eldoria.

Type "help" for available commands.

Type "start" to begin your journey.
`;
    
    setGameState(prevState => ({
      ...prevState,
      gameHistory: [
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
    <div className="app-container">
      <div className="terminal-container">
        <div className="terminal-main">
          <TerminalDisplay messages={gameState.gameHistory} />
          <TerminalInput 
            onSubmitCommand={handleCommandSubmit} 
            historyIndex={historyIndex}
            setHistoryIndex={setHistoryIndex}
            commandHistory={commandHistory}
          />
        </div>
        
        <TerminalSidebar 
          currentLocation={gameState.currentLocation}
          inventory={gameState.inventory}
          quests={gameState.quests}
        />
      </div>
    </div>
  );
}

export default App;
// src/components/TerminalInput.jsx
// This component creates a terminal-style input field

import React, { useState, useRef, useEffect } from 'react';
import '../css/terminal.css';

const TerminalInput = ({ onSubmitCommand, historyIndex, setHistoryIndex, commandHistory }) => {
  const [command, setCommand] = useState('');
  const inputRef = useRef(null);

  // Focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle command submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (command.trim() === '') return;
    
    onSubmitCommand(command);
    setCommand('');
    setHistoryIndex(-1); // Reset history index after submitting
  };

  // Handle arrow key navigation through command history
  const handleKeyDown = (e) => {
    // Up arrow
    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex]);
    }
    // Down arrow
    else if (e.key === 'ArrowDown' && historyIndex >= 0) {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCommand(newIndex >= 0 ? commandHistory[newIndex] : '');
    }
  };

  return (
    <div className="terminal-input">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span className="prompt">{'>'}</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=""
            ref={inputRef}
            autoFocus
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
      </form>
    </div>
  );
};

export default TerminalInput;

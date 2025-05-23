// src/components/TerminalDisplay.jsx
// Terminal-like display with typing effect

import { useState, useEffect, useRef } from 'react';
import '../css/terminal.css';

const TerminalDisplay = ({ messages, typingSpeed = 10 }) => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const messagesEndRef = useRef(null);
  
  // Process new messages as they come in
  useEffect(() => {
    if (messages.length > currentMessageIndex && !isTyping) {
      setIsTyping(true);
      setCurrentText('');
      setCurrentCharIndex(0);
    }
  }, [messages, currentMessageIndex, isTyping]);
  
  // Typing effect
  useEffect(() => {
    if (!isTyping) return;
    
    const currentMessage = messages[currentMessageIndex];
    
    if (!currentMessage) {
      setIsTyping(false);
      return;
    }
    
    // If it's a command (user input), it's added immediately - no typing effect
    if (currentMessage.type === 'command') {
      setDisplayedContent(prev => [...prev, { ...currentMessage, fullyTyped: true }]);
      setCurrentMessageIndex(prev => prev + 1);
      setIsTyping(false);
      return;
    }
    
    // For normal messages, create the typing effect
    const content = currentMessage.message;
    
    if (currentCharIndex < content.length) {
      const timer = setTimeout(() => {
        setCurrentText(content.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      // Message fully typed
      setDisplayedContent(prev => [...prev, { 
        ...currentMessage, 
        message: currentText,
        fullyTyped: true 
      }]);
      setCurrentMessageIndex(prev => prev + 1);
      setIsTyping(false);
    }
  }, [currentCharIndex, currentMessageIndex, currentText, isTyping, messages, typingSpeed]);
  
  // Auto-scroll to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedContent, currentText]);
  
  // Format a message for display
  const formatMessage = (message, index) => {
    if (message.type === 'command') {
      return (
        <div key={index} className="terminal-line command">
          <span className="prompt">{'>'}</span> {message.message}
        </div>
      );
    }
    
    if (message.type === 'intro') {
      return (
        <div key={index} className="terminal-line intro">
          {message.message.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      );
    }
    
    // Parse line breaks and formatting for location descriptions
    const lines = message.message.split('\n');
    
    return (
      <div key={index} className="terminal-line">
        {lines.map((line, lineIndex) => {
          if (lineIndex === 0 && line.trim() && lines.length > 1 && !line.includes(':')) {
            return <div key={lineIndex} className="location-name">[{line}]</div>;
          }
          
          if (line.toLowerCase().includes('exits:')) {
            return <div key={lineIndex} className="exits-line">{line}</div>;
          }
          
          if (line.toLowerCase().includes('you can see:')) {
            return <div key={lineIndex} className="items-line">{line}</div>;
          }
          
          if (line.toLowerCase().includes('present:')) {
            return <div key={lineIndex} className="characters-line">{line}</div>;
          }
          
          if (line.includes(': "') && line.endsWith('"')) {
            const [character, dialogue] = line.split(': "');
            return (
              <div key={lineIndex} className="dialogue-line">
                <span className="character-name">{character}:</span> 
                <span className="character-speech">"{dialogue}</span>
              </div>
            );
          }
          
          return line ? <div key={lineIndex}>{line}</div> : null;
        })}
      </div>
    );
  };
  
  return (
    <div className="terminal-display">
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
        <div className="terminal-title">Fantasy Adventure Terminal</div>
      </div>
      
      <div className="terminal-content">
        {/* Display fully typed messages */}
        {displayedContent.map((message, index) => formatMessage(message, index))}
        
        {/* Display currently typing message */}
        {isTyping && (
          <div className="terminal-line typing">
            {currentText}
            <span className="cursor"></span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="terminal-footer">
        <div className="terminal-info">Location: {messages.length > 0 ? 'start' : ''}</div>
        <div className="terminal-info">Health: 100</div>
        <div className="terminal-info">Items: {displayedContent.filter(m => m.type === 'command' && m.message.includes('take')).length}</div>
      </div>
    </div>
  );
};

export default TerminalDisplay;

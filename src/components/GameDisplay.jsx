import { useRef, useEffect } from 'react';
import '../css/display.css';

const GameDisplay = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatMessage = (message, index) => {
    // If the message is a command (starts with '>')
    if (message.type === 'command') {
      return (
        <div key={index} className="message command">
          {message.message}
        </div>
      );
    }
    
    const paragraphs = message.message.split('\n').filter(p => p.trim() !== '');
    
    return (
      <div key={index} className="message narration">
        {paragraphs.map((paragraph, pIndex) => {
          if (pIndex === 0 && paragraphs.length > 1 && paragraph.trim() && !paragraph.includes(':')) {
            return <h2 key={pIndex} className="location-name">{paragraph}</h2>;
          }
          
          if (paragraph.includes(': "') && paragraph.endsWith('"')) {
            const [character, dialogue] = paragraph.split(': "');
            return (
              <p key={pIndex} className="dialogue">
                <span className="character-name">{character}:</span> 
                <span className="character-speech">{dialogue.slice(0, -1)}</span>
              </p>
            );
          }
          
          if (paragraph === 'Inventory:' || paragraph === 'Current Quests:' || paragraph === 'Available Commands:') {
            return <h3 key={pIndex} className="section-title">{paragraph}</h3>;
          }
          
          if (paragraph.startsWith('- ') || paragraph.startsWith('✓ ') || paragraph.startsWith('○ ')) {
            return <p key={pIndex} className="list-item">{paragraph}</p>;
          }
          
          if (paragraph.trim().startsWith('Hint:')) {
            return <p key={pIndex} className="hint">{paragraph}</p>;
          }
          
          return <p key={pIndex}>{paragraph}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="game-display">
      <div className="message-container">
        {messages.map((message, index) => formatMessage(message, index))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default GameDisplay;

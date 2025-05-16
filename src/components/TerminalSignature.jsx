import { useState, useEffect } from 'react';
import '../css/terminal.css';

const TerminalSignature = ({ myName, portfolioUrl }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = `[root@eldervale ~]$ whoami\nDeveloper: ${myName} | Portfolio: ${portfolioUrl} | © ${new Date().getFullYear()}`;
  
  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 30); // Typing speed
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [typedText, fullText, isTyping]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  const formatText = () => {
    const parts = typedText.split(portfolioUrl);
    
    if (parts.length < 2) {
      return <>{typedText}</>;
    }
    
    return (
      <>
        {parts[0]}
        <a 
          href={portfolioUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-link"
        >
          {portfolioUrl}
        </a>
        {parts[1]}
      </>
    );
  };
  
  return (
    <div className="terminal-signature">
      <pre className="signature-text">
        {formatText()}
        {isTyping && showCursor && <span className="terminal-cursor">█</span>}
      </pre>
    </div>
  );
};

export default TerminalSignature;

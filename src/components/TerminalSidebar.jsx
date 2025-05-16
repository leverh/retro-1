import { useEffect, useRef, useState } from 'react';
import { items } from '../data/items';
import { getLocation } from '../engine/gameState';
import CommandsModal from './CommandsModal';

import '../css/terminal.css';

const TerminalSidebar = ({ currentLocation, inventory, quests }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const location = getLocation(currentLocation);
  
  const activeQuests = Object.values(quests).filter(quest => 
    quest.steps.some(step => !step.completed)
  );
  
  const locationContentRef = useRef(null);
  const inventoryContentRef = useRef(null);
  const questContentRef = useRef(null);
  const helpContentRef = useRef(null);
  
  const locationHeaderRef = useRef(null);
  const inventoryHeaderRef = useRef(null);
  const questHeaderRef = useRef(null);
  const helpHeaderRef = useRef(null);
  
  useEffect(() => {
    const checkScrollable = (contentRef, headerRef) => {
      if (!contentRef.current || !headerRef.current) return;
      
      const element = contentRef.current;
      const isScrollable = element.scrollHeight > element.clientHeight;
      
      if (isScrollable) {
        element.classList.add('scrollable');
        headerRef.current.classList.add('has-scroll');
      } else {
        element.classList.remove('scrollable');
        headerRef.current.classList.remove('has-scroll');
      }
    };
    
    checkScrollable(locationContentRef, locationHeaderRef);
    checkScrollable(inventoryContentRef, inventoryHeaderRef);
    checkScrollable(questContentRef, questHeaderRef);
    checkScrollable(helpContentRef, helpHeaderRef);
    
    const resizeObserver = new ResizeObserver(() => {
      checkScrollable(locationContentRef, locationHeaderRef);
      checkScrollable(inventoryContentRef, inventoryHeaderRef);
      checkScrollable(questContentRef, questHeaderRef);
      checkScrollable(helpContentRef, helpHeaderRef);
    });
    
    if (locationContentRef.current) resizeObserver.observe(locationContentRef.current);
    if (inventoryContentRef.current) resizeObserver.observe(inventoryContentRef.current);
    if (questContentRef.current) resizeObserver.observe(questContentRef.current);
    if (helpContentRef.current) resizeObserver.observe(helpContentRef.current);
    
    return () => resizeObserver.disconnect();
  }, [location, inventory, activeQuests]);
  
  const handleScroll = (e) => {
    if (!e || !e.currentTarget) return;
    
    e.currentTarget.classList.add('scrolling');
    
    clearTimeout(e.currentTarget._scrollTimeout);
    e.currentTarget._scrollTimeout = setTimeout(() => {
      if (e.currentTarget) {
        e.currentTarget.classList.remove('scrolling');
      }
    }, 1000);
  };
  
  useEffect(() => {
    const sections = [
      locationContentRef.current,
      inventoryContentRef.current,
      questContentRef.current,
      helpContentRef.current
    ].filter(Boolean); 
    
    sections.forEach(section => {
      if (section) {
        section.addEventListener('scroll', handleScroll);
      }
    });
    
    return () => {
      sections.forEach(section => {
        if (section) {
          section.removeEventListener('scroll', handleScroll);
        }
      });
    };
  }, []);
  
  const openCommandsModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      <div className="terminal-sidebar">
        <div className="sidebar-section location-section">
          <div className="section-header" ref={locationHeaderRef}>
            <span className="section-icon">📍</span>
            <h3>Location</h3>
          </div>
          
          {location && (
            <div className="section-content" ref={locationContentRef}>
              <div className="location-name">{location.name}</div>
              
              {location.exits && Object.keys(location.exits).length > 0 && (
                <div className="location-exits">
                  <div className="subsection-title">Exits:</div>
                  <div className="exits-list">
                    {Object.keys(location.exits).map((dir, idx) => (
                      <span key={idx} className="exit-direction">
                        {dir === 'in' ? 'inside' : 
                         dir === 'out' ? 'outside' : dir}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {location.characters && location.characters.length > 0 && (
                <div className="location-characters">
                  <div className="subsection-title">Present:</div>
                  <div className="characters-list">
                    {location.characters.map(charId => charId).join(', ')}
                  </div>
                </div>
              )}
              
              {location.items && location.items.length > 0 && (
                <div className="location-items">
                  <div className="subsection-title">Items:</div>
                  <div className="items-list">
                    {location.items.map(itemId => {
                      try {
                        return items[itemId].name;
                      } catch (e) {
                        return itemId;
                      }
                    }).join(', ')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="sidebar-section inventory-section">
          <div className="section-header" ref={inventoryHeaderRef}>
            <span className="section-icon">🎒</span>
            <h3>Inventory</h3>
          </div>
          
          <div className="section-content" ref={inventoryContentRef}>
            {inventory.length === 0 ? (
              <div className="empty-inventory">Your backpack is empty</div>
            ) : (
              <ul className="inventory-list">
                {inventory.map((itemId, index) => {
                  const item = items[itemId];
                  if (!item) return null;
                  
                  return (
                    <li key={index} className="inventory-item">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        
        <div className="sidebar-section quest-section">
          <div className="section-header" ref={questHeaderRef}>
            <span className="section-icon">📜</span>
            <h3>Quests</h3>
          </div>
          
          <div className="section-content" ref={questContentRef}>
            {activeQuests.length === 0 ? (
              <div className="no-quests">No active quests</div>
            ) : (
              <div className="quests-list">
                {activeQuests.map((quest, index) => (
                  <div key={index} className="quest-item">
                    <div className="quest-title">{quest.title}</div>
                    <div className="quest-progress">
                      {Math.round((quest.steps.filter(step => step.completed).length / quest.steps.length) * 100)}% complete
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="sidebar-section help-section">
          <div className="section-header" ref={helpHeaderRef}>
            <span className="section-icon">ℹ️</span>
            <h3>Commands</h3>
          </div>
          
          <div className="section-content" ref={helpContentRef}>
            <div className="command-summary">
              Type commands in the terminal to play. Use <span className="cmd">help</span> for a list of commands.
            </div>
            <button className="help-button" onClick={openCommandsModal}>
              <span className="button-icon">📖</span> View All Commands
            </button>
          </div>
        </div>
      </div>
      
      <CommandsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default TerminalSidebar;
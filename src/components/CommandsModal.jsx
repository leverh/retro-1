import '../css/terminal.css';

const CommandsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="commands-modal-overlay" onClick={onClose}>
      <div className="commands-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Available Commands</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="modal-content">
          <div className="command-category">
            <h3>Navigation</h3>
            <ul>
              <li><span className="cmd">look</span> - Examine your surroundings</li>
              <li><span className="cmd">go [direction]</span> - Move north, south, east, west, etc.</li>
              <li><span className="cmd">examine [object]</span> - Look at something more closely</li>
            </ul>
          </div>
          
          <div className="command-category">
            <h3>Inventory</h3>
            <ul>
              <li><span className="cmd">inventory</span> or <span className="cmd">i</span> - Check your inventory</li>
              <li><span className="cmd">take [item]</span> - Pick up an item</li>
              <li><span className="cmd">use [item]</span> - Use an item from your inventory</li>
            </ul>
          </div>
          
          <div className="command-category">
            <h3>Interaction</h3>
            <ul>
              <li><span className="cmd">speak [character]</span> - Talk to someone</li>
              <li><span className="cmd">quest</span> - Check your current quest objectives</li>
              <li><span className="cmd">help</span> - Show this help information</li>
            </ul>
          </div>
          
          <div className="command-category">
            <h3>Tips</h3>
            <p>You can use variations of commands, for example:</p>
            <ul>
              <li><span className="cmd">take coin</span> works the same as <span className="cmd">get coin</span></li>
              <li><span className="cmd">look at tree</span> works the same as <span className="cmd">examine tree</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandsModal;
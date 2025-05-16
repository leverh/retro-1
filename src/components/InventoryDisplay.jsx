import '../css/inventory.css';
import { items } from '../data/items';

const InventoryDisplay = ({ inventory }) => {
  if (!inventory || inventory.length === 0) {
    return (
      <div className="inventory-display">
        <h3>Inventory</h3>
        <p className="empty-inventory">Your satchel is empty.</p>
      </div>
    );
  }

  return (
    <div className="inventory-display">
      <h3>Inventory</h3>
      <ul className="inventory-list">
        {inventory.map((itemId, index) => {
          const item = items[itemId];
          if (!item) return null;
          
          return (
            <li key={index} className="inventory-item">
              <span className="item-name">{item.name}</span>
              <span className="item-description">{item.description}</span>
            </li>
          );
        })}
      </ul>
      <div className="inventory-help">
        <p>Use commands like 'examine [item]' or 'use [item]' to interact with your inventory.</p>
      </div>
    </div>
  );
};

export default InventoryDisplay;

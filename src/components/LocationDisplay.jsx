import '../css/location.css';
import { characters } from '../data/characters';
import { items } from '../data/items';
import { getLocation } from '../engine/gameState';

const LocationDisplay = ({ currentLocation }) => {
  const location = getLocation(currentLocation);
  
  if (!location) {
    return <div className="location-display">Location not found</div>;
  }

  const exits = location.exits ? Object.keys(location.exits).map(dir => {
    // Convert 'in' and 'out' to more readable forms
    if (dir === 'in') return 'inside';
    if (dir === 'out') return 'outside';
    return dir;
  }) : [];

  const locationCharacters = location.characters ? location.characters.map(charId => {
    return characters[charId];
  }).filter(Boolean) : [];

  const locationItems = location.items ? location.items.map(itemId => {
    return items[itemId];
  }).filter(Boolean) : [];

  return (
    <div className="location-display">
      <h3>Location: {location.name}</h3>
      
      <div className="location-section">
        <h4>Exits</h4>
        {exits.length > 0 ? (
          <ul className="exits-list">
            {exits.map((exit, index) => (
              <li key={index}>{exit}</li>
            ))}
          </ul>
        ) : (
          <p>No visible exits.</p>
        )}
      </div>
      
      {locationCharacters.length > 0 && (
        <div className="location-section">
          <h4>Characters</h4>
          <ul className="characters-list">
            {locationCharacters.map((char, index) => (
              <li key={index}>{char.name}</li>
            ))}
          </ul>
        </div>
      )}
      
      {locationItems.length > 0 && (
        <div className="location-section">
          <h4>Items</h4>
          <ul className="items-list">
            {locationItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="location-help">
        <p>Type 'look' for a full description.</p>
      </div>
    </div>
  );
};

export default LocationDisplay;

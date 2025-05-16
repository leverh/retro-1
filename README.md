# The Forgotten Artifact

A fantasy text adventure game built with React and Vite. This game focuses on storytelling, immersion, and simple mechanics without overcomplicating the technical implementation.

## Features

- Rich, descriptive text that brings the world to life
- Command-based navigation system
- Inventory management
- Character dialogue
- Quest tracking
- Retro-inspired text adventure interface with modern styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory in your terminal
3. Install dependencies:

```bash
npm install
```

### Development

To run the game in development mode:

```bash
npm run dev
```

This will start a development server at [http://localhost:5173](http://localhost:5173)

### Building for Production

To build the game for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Game Commands

The game supports the following commands:

- `look` - Examine the current location
- `go [direction]` - Move north, south, east, west, up, or down
- `examine [object]` - Look at something more closely
- `take [item]` - Pick up an item
- `inventory` or `i` - Check what items you're carrying
- `use [item]` - Use an item from your inventory
- `speak [character]` - Talk to an NPC
- `help` - Show available commands
- `quest` - Show current quest information

## Project Structure

- `src/components/` - React components for the UI
- `src/css/` - CSS files for styling
- `src/data/` - Game data (locations, items, characters, quests)
- `src/engine/` - Game engine code (state management, command parsing, game actions)
- `src/App.jsx` - Main application component
- `src/main.jsx` - Entry point

## World Design

The game world includes:
- A village as the starting point
- Surrounding wilderness (forest, mountains)
- A cave system
- Various NPCs with distinct personalities and dialogue
- A main quest with a clear goal
- Hidden secrets and treasures to discover

## Customization

You can easily extend the game by:
- Adding new locations to `src/data/locations.js`
- Creating new items in `src/data/items.js`
- Adding characters in `src/data/characters.js`
- Creating new quests in `src/data/quests.js`


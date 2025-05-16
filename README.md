# Fantasy Adventure Terminal

A retro terminal-styled text adventure game built with React and Vite, with an authentic old-skool terminal aesthetic.

![Terminal Interface](/public/screenshot.png)
*Screenshot of the Fantasy Adventure Terminal interface*

## Features

- **Authentic Terminal Experience**: Classic green-on-black or amber-on-black terminal interface with CRT effects, typing animations, and pixel-perfect details
- **Rich Storytelling**: Immersive fantasy narrative with detailed location descriptions and character interactions
- **Core Game Mechanics**: 
  - Natural language command parser
  - Location-based navigation
  - Inventory management
  - Character dialogue system
  - Quest tracking
- **Interactive UI**: Responsive sidebar displaying location details, inventory, and quest progress
- **Retro Aesthetic**: Authentic terminal styling with scanlines, glow effects, and vintage typography

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leverh/retro-1
cd fantasy-adventure
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173` to play the game

## Game Commands

The game understands a variety of natural language commands:

- `look` - Examine your current surroundings
- `go [direction]` - Move in a direction (north, south, east, west, etc.)
- `examine [object]` - Look more closely at something
- `take [item]` - Pick up an item and add it to your inventory
- `inventory` or `i` - Check what items you're carrying
- `use [item]` - Use an item from your inventory
- `speak [character]` - Talk to a character
- `help` - Show available commands
- `quest` - Check your current quest objectives

Commands are flexible - for example, `get coin`, `take coin`, and `pick up coin` all work the same way.

![The Available Game Commands](/public/screenshot2.png)
*Screenshot of the Fantasy Adventure Available Commands interface*

## Project Structure

```
fantasy-adventure/
├── src/
│   ├── components/            # React UI components
│   │   ├── CommandsModal.jsx  # Modal displaying all available commands
│   │   ├── TerminalDisplay.jsx # Main terminal output display
│   │   ├── TerminalInput.jsx  # Command input component
│   │   └── TerminalSidebar.jsx # Sidebar with game info
│   ├── css/                   # Styling
│   │   └── terminal.css       # Main terminal styling
│   ├── data/                  # Game content
│   │   ├── characters.js      # Character definitions
│   │   ├── items.js           # Item definitions
│   │   ├── locations.js       # Location definitions
│   │   └── quests.js          # Quest definitions
│   ├── engine/                # Game logic
│   │   ├── commandParser.js   # Parses user input
│   │   ├── gameActions.js     # Executes game commands
│   │   └── gameState.js       # Manages game state
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
└── index.html                 # HTML template
```

## Game World

Explore the fantasy world of Eldervale:

- **Village**: Start in the village square, meet local characters, and discover the quest
- **Forest**: Navigate through an ancient forest with mysterious locations
- **Mountains**: Climb treacherous paths to reach hidden locations
- **Caves**: Explore a complex underground cave system
- **Temple**: Discover the ancient temple holding the forgotten artifact

## Customization

### Changing the Color Theme

The game supports both classic green terminal and amber terminal themes:

For the classic green theme, comment out the amber scheme that shows up after the media queries.

### Adding New Content

You can easily extend the game world:

- Add new locations in `src/data/locations.js`
- Create new items in `src/data/items.js`
- Add characters in `src/data/characters.js`
- Design new quests in `src/data/quests.js`

## Technical Details

- **Built with**: React, Vite, CSS
- **State Management**: Custom game state management (no Redux or Context API required)
- **Styling**: CSS modules for component styling
- **Effects**: CSS animations and pseudo-elements for terminal effects
- **Responsive Design**: Adapts to different screen sizes


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by classic text adventure games like Zork and Colossal Cave Adventure
- Terminal styling inspired by vintage computer terminals
- VT323 font used for authentic terminal typography
- Claude AI for help with the texts for the quests

---

## Future Enhancements

- Save/load game functionality
- Sound effects and ambient audio
- Additional quests and world expansion
- Advanced NPC dialogue trees
- Achievement system
- Mobile-optimized interface
- Possible connection to an AI API (if they ever become free to use...)

---

## Contact:
Created by [PixelSummit](https://pixelsummit.dev/)
For any inquiries, please contact me directly.

Made with 💀 using React 
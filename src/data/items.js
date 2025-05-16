export const items = {
  // Common items
  coin_pouch: {
    name: 'Small Coin Pouch',
    description: 'A worn leather pouch containing a few copper and silver coins.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the small coin pouch. The coins inside jingle softly.',
    onExamine: 'A simple leather pouch with a drawstring closure. Inside are a few copper and silver coins - not a fortune, but enough to purchase simple supplies.'
  },
  
  apple: {
    name: 'Ripe Apple',
    description: 'A juicy, red apple that looks perfect for eating.',
    takeable: true,
    usable: true,
    onTake: 'You pick up the ripe apple. It feels firm and fresh in your hand.',
    onUse: 'You take a bite of the apple. It\'s crisp and sweet, quenching your thirst and giving you a small energy boost.',
    onExamine: 'A perfect, red apple with shiny skin. It smells sweet and fresh, clearly picked at just the right time.'
  },
  
  small_pouch: {
    name: 'Small Herb Pouch',
    description: 'A small cloth pouch containing fragrant dried herbs.',
    takeable: true,
    usable: true,
    onTake: 'You take the small herb pouch, catching a whiff of the aromatic contents.',
    onUse: 'You open the pouch and inhale the soothing herbal scent. It clears your mind and makes you feel more alert.',
    onExamine: 'The cloth pouch contains a mixture of dried herbs - lavender, thyme, and something unfamiliar with a spicy scent. The combination is pleasant and seems to clear your head when you smell it.'
  },
  
  tankard: {
    name: 'Wooden Tankard',
    description: 'A sturdy wooden tankard, empty but still smelling faintly of ale.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the wooden tankard. It\'s well-crafted and solid in your hand.',
    onExamine: 'A sturdy tankard carved from a single piece of dark wood, polished smooth by years of use. The inside still smells faintly of ale and has stains from countless fills.'
  },
  
  healing_herbs: {
    name: 'Bundle of Healing Herbs',
    description: 'A carefully tied bundle of medicinal herbs with a strong, clean scent.',
    takeable: true,
    usable: true,
    onTake: 'You carefully take the bundle of healing herbs, making sure not to damage the delicate leaves.',
    onUse: 'You crush some of the herbs between your fingers and apply them to your wounds. The effect is immediate - a cooling sensation followed by reduced pain.',
    onExamine: 'This bundle contains several varieties of healing herbs, expertly harvested and dried. You recognize comfrey and yarrow among them, known for their medicinal properties. They could be useful if you sustain any injuries on your journey.'
  },
  
  // Forest items
  sturdy_stick: {
    name: 'Sturdy Walking Stick',
    description: 'A solid branch that makes for a good walking staff.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the sturdy branch. It feels well-balanced in your hand and would make traveling easier.',
    onExamine: 'This branch is surprisingly straight and strong, as if it had fallen from the tree recently. The wood is smooth and the weight is perfect for a walking stick. It could also serve as a defensive tool if needed.'
  },
  
  colorful_mushroom: {
    name: 'Brightly Colored Mushroom',
    description: 'A small mushroom with a cap of vibrant blue and red specks.',
    takeable: true,
    usable: true,
    onTake: 'You carefully pick the colorful mushroom, trying not to damage its delicate structure.',
    onUse: 'You hesitate - eating an unknown mushroom from the forest floor doesn\'t seem wise without proper knowledge.',
    onExamine: 'This unusual mushroom has a cap that shifts between blue and red depending on how the light hits it. The stem is pale white with spiral patterns. You\'re not sure if it\'s edible, medicinal, or possibly dangerous - perhaps someone knowledgeable about forest plants could tell you more.'
  },
  
  wildflowers: {
    name: 'Bunch of Wildflowers',
    description: 'A colorful assortment of forest wildflowers in full bloom.',
    takeable: true,
    usable: false,
    onTake: 'You gather a small bunch of the most vibrant wildflowers, careful not to take too many.',
    onExamine: 'This beautiful collection includes delicate white stars, purple bell-shaped blooms, and yellow flowers with soft, fuzzy centers. They fill the air around you with a subtle, sweet fragrance. These aren\'t just ordinary flowers - there\'s something special about their vivid colors and perfect forms.'
  },
  
  shiny_stone: {
    name: 'Unusual Shiny Stone',
    description: 'A smooth stone with flecks that catch the light in an unusual way.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the shiny stone and pocket it. It feels slightly warm to the touch.',
    onExamine: 'This stone appears ordinary at first glance, but when it catches the light, flecks of something crystalline within it sparkle with colors that seem too vibrant for a normal rock. It feels slightly warm even when the surroundings are cool, as if it has some inner energy.'
  },
  
  strange_amulet: {
    name: 'Ancient Stone Amulet',
    description: 'A pendant carved from grayish stone, inscribed with unfamiliar symbols.',
    takeable: true,
    usable: true,
    onTake: 'You carefully lift the stone amulet. It feels heavier than it looks, and the symbols seem to shift slightly when not viewed directly.',
    onUse: 'You hold the amulet tightly and focus on it. For a moment, the symbols glow faintly, and you feel a strange connection to your surroundings, as if your senses are heightened.',
    onExamine: 'This amulet appears very old, carved from a stone you don\'t recognize. The symbols etched into its surface don\'t match any writing system you\'re familiar with, but they give you an odd sense of familiarity nonetheless. The cord it hangs from is newer, suggesting someone has maintained it over time. There\'s a subtle energy about it that you can feel when holding it.'
  },
  
  // Mountain items
  sharp_rock: {
    name: 'Sharp-Edged Rock',
    description: 'A rock with one edge naturally formed into a surprisingly sharp blade.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the sharp rock, careful not to cut yourself on its edge.',
    onExamine: 'This rock has fractured in such a way that one edge is almost as sharp as a knife. The material is a dark, glassy stone - possibly obsidian. It could be useful as a tool or improvised weapon.'
  },
  
  torch: {
    name: 'Torch',
    description: 'A wooden torch wrapped with cloth and soaked in pitch. It\'s already lit and casting a warm glow.',
    takeable: true,
    usable: false,
    onTake: 'You take the torch, holding it carefully. The flame casts dancing shadows around you.',
    onExamine: 'This well-made torch consists of a sturdy wooden handle wrapped at one end with cloth that has been soaked in pitch. The flame burns steadily, giving off both light and heat. It should burn for several hours before being consumed.'
  },
  
  unlit_torch: {
    name: 'Unlit Torch',
    description: 'A wooden torch wrapped with cloth and soaked in pitch, ready to be lit.',
    takeable: true,
    usable: true,
    onTake: 'You take the unlit torch. It feels solid and well-crafted.',
    onUse: 'Without a fire source, you can\'t light the torch yet.',
    onExamine: 'This torch is well-constructed, with a sturdy wooden handle and cloth wrapped around one end, soaked in some flammable substance. It only needs a flame source to be useful in dark places.'
  },
  
  smooth_stone: {
    name: 'River-Polished Stone',
    description: 'A perfectly smooth stone polished by years in the underground river.',
    takeable: true,
    usable: false,
    onTake: 'You pick up the smooth stone. It fits perfectly in your palm, almost as if it was made to be held.',
    onExamine: 'This stone is remarkably smooth, polished by years of the underground river flowing over it. It\'s a deep blue-gray color with swirls of lighter gray throughout. When you hold it, it seems to have a calming effect, and you find yourself running your thumb over its surface absentmindedly.'
  },
  
  small_crystal: {
    name: 'Luminescent Crystal Fragment',
    description: 'A small piece of crystal that gives off a faint blue glow.',
    takeable: true,
    usable: true,
    onTake: 'You carefully break off a small crystal fragment. It continues to glow softly in your hand.',
    onUse: 'You focus on the crystal, and its glow intensifies slightly, providing enough light to see in dark areas.',
    onExamine: 'This crystal fragment is about the size of your thumb and appears to be broken from a larger formation. It emits a gentle blue-white light that doesn\'t seem to fade or require any external energy source. The light pulses very subtly, almost like a heartbeat. The crystal feels cool to the touch and seems to hum almost imperceptibly when held close.'
  },
  
  ancient_artifact: {
    name: 'The Forgotten Artifact',
    description: 'A crystalline orb that pulses with inner light and feels warm to the touch.',
    takeable: true,
    usable: true,
    onTake: 'As your hands close around the artifact, a surge of energy courses through you. The orb pulses brighter for a moment, as if recognizing your touch.',
    onUse: 'You focus your attention on the artifact. The light within it swirls and brightens, and you feel a strange connection to the world around you, as if you could sense energies normally invisible.',
    onExamine: 'The artifact is a perfectly spherical orb about the size of your palm. It appears to be made of crystal, but like no crystal you\'ve ever seen. Inside, lights and colors swirl and shift in patterns that seem almost deliberate, as if conveying information you can\'t quite comprehend. Despite being in the cool cave, it feels warm to the touch. There\'s a sense of immense age and power about it, but also something almost alive in the way it reacts to your presence.'
  },
  
  // Quest items
  ancient_map: {
    name: 'Ancient Cave Map',
    description: 'A fragile parchment showing paths through the mountains and caves, marked with strange symbols.',
    takeable: true,
    usable: true,
    onTake: 'You carefully fold the ancient map and put it away safely.',
    onUse: 'You unfold the map and study it carefully. The markings show a path through the forest to the mountains, and then into a cave system, eventually leading to what appears to be a chamber marked with symbols of power.',
    onExamine: 'This map is drawn on thin parchment that has somehow survived the centuries. The ink has faded to a sepia tone, but the lines are still clear. It shows the forest, mountains, and a complex cave system with certain chambers marked by symbols you don\'t recognize. There are notes written in an ancient script along the edges. From what you can decipher, they warn of guardians and tests that await those who seek the artifact.'
  }
};

export const locations = {
  // Village locations
  village_square: {
    name: 'Village Square',
    description: 'The heart of Eldervale village. Stone cottages with thatched roofs encircle a well-worn cobblestone square. A large oak tree provides shade in the center, and villagers go about their daily business.',
    longDescription: 'The village square serves as the center of life in Eldervale. Merchants display their wares on wooden stalls, and the sweet scent of freshly baked bread wafts from the nearby bakery. Children play around the ancient oak tree that has stood here for generations. The village elder\'s cottage sits on the north side of the square, its door always open to those seeking wisdom.',
    exits: {
      north: 'village_elder_cottage',
      east: 'village_marketplace',
      south: 'village_outskirts',
      west: 'village_tavern'
    },
    items: ['coin_pouch'],
    characters: ['villager'],
    firstVisit: true
  },
  
  village_elder_cottage: {
    name: 'Village Elder\'s Cottage',
    description: 'A modest stone cottage with herbs hanging from the rafters. The air smells of sage and old parchment. The village elder sits by the hearth, deep in thought.',
    longDescription: 'Inside the elder\'s cottage, time seems to slow down. Bundles of dried herbs hang from the ceiling beams, filling the air with earthy aromas. Bookshelves line the walls, filled with ancient tomes and scrolls. The elder, known for their wisdom and knowledge of the region\'s history, sits in a worn chair by the hearth. A small table near the window holds various potions and curiosities.',
    exits: {
      south: 'village_square'
    },
    items: [],
    characters: ['village_elder'],
    firstVisit: true
  },
  
  village_marketplace: {
    name: 'Village Marketplace',
    description: 'A bustling area filled with stalls selling everything from fresh produce to handcrafted goods. The air is alive with the sounds of haggling and friendly conversation.',
    longDescription: 'The marketplace is the economic heart of Eldervale. Colorful awnings cover stalls selling fruits, vegetables, breads, and meats. Artisans display intricate woodcarvings, pottery, and textiles. A blacksmith hammers away at a glowing piece of metal, sparks flying with each strike. The scents of spices, fresh bread, and smoked meats blend together in a delightful aroma that draws villagers from all corners.',
    exits: {
      west: 'village_square',
      east: 'village_herbalist'
    },
    items: ['apple', 'small_pouch'],
    characters: ['merchant'],
    firstVisit: true
  },
  
  village_tavern: {
    name: 'The Wanderer\'s Rest Tavern',
    description: 'A warm, inviting tavern with a crackling fireplace and the smell of hearty stew in the air. Wooden tables are scattered around, and a few locals enjoy their drinks.',
    longDescription: 'The Wanderer\'s Rest has been serving travelers and locals for generations. Its sturdy wooden beams are darkened with age and smoke from the large stone fireplace that keeps the room warm even on the coldest nights. Tankards hang from hooks behind the bar, and barrels of ale line the wall. The tavern keeper keeps a watchful eye on patrons while wiping down the worn but clean bar top. Stories and rumors flow as freely as the ale, making this the best place to hear about happenings in the wider world.',
    exits: {
      east: 'village_square'
    },
    items: ['tankard'],
    characters: ['tavern_keeper', 'mysterious_traveler'],
    firstVisit: true
  },
  
  village_outskirts: {
    name: 'Village Outskirts',
    description: 'The path leads away from the village, with farmland on either side. To the south, a dense forest looms, while the village lies safely behind you to the north.',
    longDescription: 'As the village proper gives way to scattered farms and open fields, you can feel the boundary between civilization and wilderness. Well-tended crops grow in neat rows, and the occasional farmhouse dots the landscape. Farmers work the land with practiced movements, acknowledging you with a nod as you pass. Beyond the fields to the south, the forest\'s edge creates a dark line against the horizon, both inviting and somewhat foreboding.',
    exits: {
      north: 'village_square',
      south: 'forest_entrance'
    },
    items: [],
    characters: ['farmer'],
    firstVisit: true
  },

  village_herbalist: {
    name: 'Herbalist\'s Hut',
    description: 'A small cottage with plants growing all around it. Bundles of herbs hang from the ceiling, and shelves are filled with bottles of various colors.',
    longDescription: 'The herbalist\'s hut sits slightly apart from the rest of the village, surrounded by carefully tended garden beds filled with medicinal and culinary herbs. Inside, the sweet and pungent aromas of dried plants fill the air. Every available surface is covered with jars, bottles, and pouches containing remedies and ingredients. The herbalist, known for their knowledge of natural medicine, works diligently at a table covered with mortar and pestles, dried plants, and small scales for precise measurements.',
    exits: {
      west: 'village_marketplace'
    },
    items: ['healing_herbs'],
    characters: ['herbalist'],
    firstVisit: true
  },

  // Forest locations
  forest_entrance: {
    name: 'Forest Entrance',
    description: 'The edge of an ancient forest. Tall trees with thick canopies block much of the sunlight, creating a boundary between the open farmland and the mysterious woods.',
    longDescription: 'Standing at the forest\'s edge feels like standing at the threshold of another world. The trees here are old and tall, their branches reaching skyward like ancient guardians. Birdsong fills the air, and the scent of pine and rich earth replaces the pastoral smells of the farmland behind you. A narrow path winds between the trees, disappearing into the dappled shadows. Moss-covered stones line the path, perhaps placed there long ago to mark the way.',
    exits: {
      north: 'village_outskirts',
      south: 'forest_path'
    },
    items: ['sturdy_stick'],
    characters: [],
    firstVisit: true
  },
  
  forest_path: {
    name: 'Forest Path',
    description: 'A narrow dirt path winding through the forest. Sunlight filters through the leaves overhead, creating shifting patterns on the ground. The forest feels alive around you.',
    longDescription: 'The forest path meanders through the woods, sometimes nearly disappearing beneath fallen leaves before emerging again. The forest floor is soft underfoot, carpeted with moss and fallen leaves that muffle your footsteps. Ancient trees tower overhead, their trunks wider than you could hope to encircle with your arms. Occasionally, you spot small woodland creatures darting between the underbrush. The air is cooler here, and rich with the scent of life and decay—the eternal cycle of the forest.',
    exits: {
      north: 'forest_entrance',
      east: 'forest_clearing',
      west: 'forest_stream'
    },
    items: ['colorful_mushroom'],
    characters: [],
    firstVisit: true
  },
  
  forest_clearing: {
    name: 'Forest Clearing',
    description: 'A peaceful circular clearing where sunlight streams down unimpeded. Wildflowers dot the lush grass, and a fallen log provides a natural place to rest.',
    longDescription: 'This natural clearing offers a moment of brightness in the forest\'s green embrace. The open sky above is a startling blue after the filtered light beneath the canopy. Wildflowers in purples, yellows, and whites create splashes of color among the grass. Butterflies and bees move lazily from bloom to bloom. The clearing feels serene and somehow significant, as though nature herself designated this spot for rest and contemplation. The fallen log at the edge has been worn smooth by weather and, perhaps, previous travelers taking a moment\'s respite.',
    exits: {
      west: 'forest_path',
      south: 'forest_ancient_stones'
    },
    items: ['wildflowers'],
    characters: ['forest_spirit'],
    firstVisit: true
  },

  forest_stream: {
    name: 'Forest Stream',
    description: 'A clear, bubbling stream cuts through the forest. Smooth stones line the banks, and the sound of running water creates a soothing atmosphere.',
    longDescription: 'The stream\'s gentle voice is a constant presence here, a melodious counterpoint to the occasional bird calls and rustling leaves. The water runs clear over smooth stones, catching sunlight and fragmenting it into countless sparkles. Small fish dart in the deeper pools, quick flashes of silver beneath the surface. The banks are lined with smooth stones and thick moss that feels springy underfoot. Trees on either side reach their branches toward each other, creating a loose canopy over the water. The air feels fresher here, cooled by the flowing stream.',
    exits: {
      east: 'forest_path',
      south: 'forest_old_bridge'
    },
    items: ['shiny_stone'],
    characters: [],
    firstVisit: true
  },

  forest_ancient_stones: {
    name: 'Ancient Stone Circle',
    description: 'A circle of standing stones, weathered by countless seasons. Strange symbols are carved into their surfaces, barely visible beneath moss and lichen.',
    longDescription: 'These ancient monoliths stand in a perfect circle, their origins lost to time. Each stone towers above human height, arranged with a precision that speaks of purpose and careful planning. The symbols carved into their surfaces have been weathered by rain and wind but remain just visible—spirals, lines, and shapes that hint at forgotten meaning. The air feels different here, charged with a subtle energy that raises the hair on your arms. The ground within the circle is bare earth rather than grass, as though nothing has grown there for centuries. Standing in the center, you can\'t help but feel observed, though by what or whom, you couldn\'t say.',
    exits: {
      north: 'forest_clearing',
      west: 'forest_old_bridge'
    },
    items: ['strange_amulet'],
    characters: [],
    firstVisit: true
  },

  forest_old_bridge: {
    name: 'Old Stone Bridge',
    description: 'A weathered stone bridge crosses a deep ravine. Below, the stream widens and flows rapidly over rocks. The bridge looks ancient but still sturdy.',
    longDescription: 'This bridge must have stood for centuries, its stone weathered but still holding firm. The craftsmanship speaks of skilled hands and forgotten techniques, with interlocking stones fitted so precisely that no mortar was needed. Below, the ravine drops steeply to where the stream becomes wider and more forceful, creating a constant background roar as water crashes over rocks. Moss and small plants have taken root in cracks between the stones, adding splashes of green to the gray structure. On the far side, the path continues southward, eventually leading to the distant mountains visible through gaps in the trees.',
    exits: {
      north: 'forest_stream',
      east: 'forest_ancient_stones',
      south: 'mountain_foothills'
    },
    items: [],
    characters: [],
    firstVisit: true
  },

  // Mountain and cave locations
  mountain_foothills: {
    name: 'Mountain Foothills',
    description: 'The forest gradually gives way to rocky terrain as the ground begins to slope upward. Small shrubs and hardy plants replace the tall trees of the forest.',
    longDescription: 'The transition from forest to mountains is gradual but unmistakable. The ground becomes increasingly uneven and rocky, rising in a gentle but persistent slope. The tall forest trees yield to smaller, hardier varieties that can withstand the harsher conditions. Wind moves more freely here, carrying the crisp scent of the heights. Looking back, you can see the vast expanse of forest stretching toward the distant village. Ahead, the mountains rise in earnest, their peaks occasionally hidden by clouds. The path becomes less defined, marked primarily by areas where the rocks and vegetation show signs of previous travelers.',
    exits: {
      north: 'forest_old_bridge',
      south: 'mountain_path'
    },
    items: ['sharp_rock'],
    characters: [],
    firstVisit: true
  },
  
  mountain_path: {
    name: 'Mountain Path',
    description: 'A narrow path winds its way up the mountainside. The air grows cooler and thinner as you ascend, and the view of the surrounding lands expands.',
    longDescription: 'The mountain path alternates between relatively gentle slopes and more challenging rocky sections that require careful footing. Each bend in the path reveals new vistas—the forest spreading like a green carpet below, distant fields beyond, and perhaps the glint of a river catching sunlight. The air feels clean and bracing, growing cooler as you climb higher. Mountain flowers in vibrant hues cling to crevices between rocks, adding splashes of color to the predominantly gray and brown landscape. Occasionally, small creatures scurry away at your approach, disappearing into rocky hideaways.',
    exits: {
      north: 'mountain_foothills',
      east: 'mountain_cave_entrance'
    },
    items: [],
    characters: ['mountain_goat'],
    firstVisit: true
  },
  
  mountain_cave_entrance: {
    name: 'Cave Entrance',
    description: 'A dark opening in the mountainside, partially hidden by boulders. Cool air flows from the entrance, carrying a faint mineral scent.',
    longDescription: 'The cave entrance might be easily missed if not for the strange air currents that flow from its depths. The opening is nestled between large boulders and overhung with hardy mountain vegetation, almost as if the mountain itself is trying to keep its secrets hidden. The rock face around the entrance bears unusual markings—whether natural formations or deliberately carved symbols is hard to tell. The temperature drops noticeably as you approach the threshold, and the sounds of the outside world seem muffled by the heavy stone. Peering inside reveals only darkness that swallows the light a few feet in, promising mystery and perhaps danger.',
    exits: {
      west: 'mountain_path',
      in: 'cave_entrance_chamber'
    },
    items: ['torch'],
    characters: [],
    firstVisit: true
  },

  cave_entrance_chamber: {
    name: 'Entrance Chamber',
    description: 'Just inside the cave, this natural chamber is dimly lit by light filtering in from outside. The walls glisten with moisture, and the sound of dripping water echoes softly.',
    longDescription: 'The entrance chamber serves as a transitional space between the outside world and the depths of the cave system. Natural light still reaches here, though dimly, creating shadows that shift and move with the changing angle of the sun outside. The ceiling rises to a surprising height, disappearing into shadows above. The floor is relatively smooth, perhaps worn down by water or the passage of many feet over long ages. The walls shimmer with moisture, and mineral deposits create fantastic patterns of color and texture. The air feels heavier here, rich with the scents of earth and stone. Passages lead deeper into the mountain, promising discovery or perhaps peril.',
    exits: {
      out: 'mountain_cave_entrance',
      north: 'cave_narrow_passage'
    },
    items: ['unlit_torch'],
    characters: [],
    firstVisit: true
  },
  
  cave_narrow_passage: {
    name: 'Narrow Passage',
    description: 'A tight corridor of stone where the walls close in on either side. The ceiling is low, forcing you to duck in places. Your footsteps create hollow echoes.',
    longDescription: 'The narrow passage requires careful navigation, with the rough stone walls pressing close on either side. In some places, you must turn sideways to squeeze through, while in others, the low ceiling forces you to stoop or even crawl. The passage twists and turns, following the natural faults and weaknesses in the mountain\'s stone heart. Without adequate light, this place would be treacherous indeed. The sound of your movements is amplified, bouncing back from the stone in eerie echoes that sometimes sound like whispered voices or distant footsteps. Despite the confinement, air flows through the passage—a promising sign that it opens to larger spaces rather than ending in a deadly dead end.',
    exits: {
      south: 'cave_entrance_chamber',
      east: 'cave_underground_river'
    },
    items: [],
    characters: [],
    firstVisit: true
  },
  
  cave_underground_river: {
    name: 'Underground River',
    description: 'A wide chamber where a swift, dark river cuts through the stone. The sound of rushing water fills the space, and the air feels damp and cool.',
    longDescription: 'This impressive chamber must have been carved by water over countless millennia. The river that still flows here is black in the dim light, moving with purpose through a channel worn smooth in the bedrock. The sound of the water creates a constant background roar that makes conversation difficult. The ceiling arches high overhead, lined with stalactites that drip water into the river below. The chamber extends beyond the reach of your light in both directions, following the river\'s course. A narrow stone ledge provides passage along the river\'s edge, though it looks slippery with spray and moisture. The air here is noticeably cooler and heavy with humidity, causing your light to cast a slight halo.',
    exits: {
      west: 'cave_narrow_passage',
      north: 'cave_crystal_chamber'
    },
    items: ['smooth_stone'],
    characters: [],
    firstVisit: true
  },

  cave_crystal_chamber: {
    name: 'Crystal Chamber',
    description: 'A breathtaking cavern where crystals of various colors jut from the walls, ceiling, and floor. They catch and reflect light in dazzling patterns.',
    longDescription: 'The crystal chamber is nature\'s cathedral, a place of wonder and beauty hidden deep within the mountain. Crystals in shades of purple, blue, green, and clear quartz emerge from every surface, ranging from tiny specimens no bigger than your fingernail to massive formations taller than a person. When light strikes them, they create a dazzling display of reflected and refracted colors that dance across the walls and ceiling. The air here feels charged with some subtle energy, and sound behaves strangely—sometimes muffled, sometimes amplified in unexpected ways. The floor is uneven, requiring careful steps to avoid damaging the crystal formations or yourself. Despite being deep underground, the chamber feels alive, as though the crystals themselves are breathing in the darkness.',
    exits: {
      south: 'cave_underground_river',
      east: 'cave_ancient_temple'
    },
    items: ['small_crystal'],
    characters: [],
    firstVisit: true
  },

  cave_ancient_temple: {
    name: 'Ancient Underground Temple',
    description: 'A massive chamber that shows clear signs of intelligent construction. Stone pillars support the high ceiling, and the walls bear faded carvings and symbols.',
    longDescription: 'Unlike the natural formations in the rest of the cave system, this chamber was clearly shaped by intelligent hands. The perfect symmetry of the space cannot be a product of nature alone. Massive pillars, carved from the living rock, rise to support a ceiling too even and smooth to be natural. The walls bear intricate carvings—scenes of people, strange creatures, and abstract symbols that might be a form of writing. Who built this place, and when, remains a mystery, but the craftsmanship speaks of high skill and purpose. The air feels still and ancient, undisturbed for perhaps thousands of years before your arrival. At the chamber\'s center stands a stone altar or table, its purpose unknown but its importance obvious from its prominent placement. This place feels significant, a destination rather than merely a passage.',
    exits: {
      west: 'cave_crystal_chamber'
    },
    items: ['ancient_artifact'],
    characters: ['guardian_spirit'],
    firstVisit: true
  }
};

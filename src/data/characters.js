export const characters = {
  // Village characters
  villager: {
    name: 'Village Resident',
    description: 'A friendly villager going about their daily tasks.',
    dialogue: {
      greeting: 'Good day to you, traveler! Welcome to Eldervale.',
      topics: {
        village: 'Eldervale has stood here for generations. We\'re a simple folk, but we look after our own.',
        elder: 'The elder? You\'ll find them in the cottage to the north of the square. Been the village\'s guiding hand for longer than I can remember.',
        forest: 'I wouldn\'t venture into those woods without good reason. Strange things happen under those ancient trees.',
        artifact: 'An ancient artifact? I\'ve heard whispers of such things, but the elder would know more than I.'
      },
      farewell: 'Safe travels to you!'
    }
  },
  
  village_elder: {
    name: 'Elder Thorne',
    description: 'An elderly person with wise eyes and a thoughtful expression. Their simple clothes are adorned with small symbols embroidered in silver thread.',
    dialogue: {
      greeting: 'Ah, a visitor. Come in, come in. The hearth is warm and there\'s tea if you wish it.',
      topics: {
        village: 'Eldervale has stood in the shadow of the mountains for nearly five hundred years. We endure, through good seasons and harsh.',
        forest: 'The forest is ancient, far older than our village. It holds many secrets—some beautiful, some best left undisturbed.',
        mountains: 'The mountains beyond the forest are treacherous, but they too have their wonders. Caves riddle their slopes, some leading deep into the earth.',
        artifact: 'You seek the forgotten artifact? Few do anymore. It was lost generations ago—a relic of power from before our village was founded. Legends say it lies hidden in a temple deep within the mountain caves, guarded by... but perhaps that\'s just an old tale. If you truly seek it, you\'ll need a map. The herbalist might help you there—they keep the old knowledge.',
        map: 'A map to the caves? I haven\'t seen such a thing in many years. Perhaps the herbalist might help—they collect old scrolls and documents.'
      },
      farewell: 'May wisdom guide your steps, wherever they may lead.'
    },
    questDialogue: {
      speak_to_elder: {
        prompt: 'artifact',
        response: 'You seek the forgotten artifact? I can tell you what little I know. The artifact is said to be a crystal orb of great power, created by a civilization that dwelled here long before our village was established. It was hidden away in a temple deep within the mountain caves when danger threatened its creators. To find it, you\'ll need the old map that shows the way through the caves. The herbalist keeps many old documents—they might have the map or know where to find it.',
        completeStep: 'speak_to_elder'
      }
    }
  },
  
  merchant: {
    name: 'Merchant Orlen',
    description: 'A stout individual with a friendly smile and shrewd eyes. Their colorful clothes are worn but clean, and various goods hang from their belt and pack.',
    dialogue: {
      greeting: 'Hello there! Looking to trade? I\'ve got wares from all over.',
      topics: {
        village: 'Eldervale\'s a good place for honest trade. The people are fair, and the roads are safer than most.',
        trade: 'I travel between the villages in this region. It\'s not an easy life, but I see more of the world than most.',
        forest: 'I stick to the roads, myself. That forest has a bad reputation among travelers. Strange sounds at night, and some say the paths change when you\'re not looking.',
        rumors: 'Rumors? I hear plenty on the road. There\'s talk of strange lights seen in the mountains at night. And they say the old temple in the caves holds treasure beyond imagining—for those brave or foolish enough to seek it.'
      },
      farewell: 'Come back anytime! Coin is always welcome.'
    }
  },
  
  tavern_keeper: {
    name: 'Keeper Talia',
    description: 'A tall, imposing figure with strong arms and a no-nonsense expression that occasionally breaks into a warm smile. Their apron is stained with evidence of their trade.',
    dialogue: {
      greeting: 'Welcome to the Wanderer\'s Rest. What can I get for you?',
      topics: {
        tavern: 'Been running this establishment for fifteen years now. Inherited it from my father, who got it from his mother before him.',
        village: 'Eldervale\'s a good place. Quiet, mostly, which suits us fine. We get enough excitement from travelers and their tales.',
        travelers: 'All sorts pass through here. Merchants, adventurers, scholars sometimes. The mysterious one by the fire has been here three days now. Pays well but doesn\'t say much.',
        rumors: 'You want rumors? I hear everything eventually. There\'s talk of an ancient temple in the mountains that appears and disappears with the phases of the moon. And they say the village herbalist isn\'t entirely... human. But that\'s just talk, mind you.'
      },
      farewell: 'Mind yourself out there. And come back when your tankard\'s empty.'
    }
  },
  
  mysterious_traveler: {
    name: 'Hooded Traveler',
    description: 'A figure shrouded in a worn traveling cloak, face partially hidden by a deep hood. They sit alone, nursing a drink and observing the tavern with keen eyes.',
    dialogue: {
      greeting: 'You notice me? Most don\'t. Or pretend not to, at least.',
      topics: {
        identity: 'Who I am isn\'t important. What matters is what I\'ve seen.',
        artifact: 'The artifact? So you seek it too. Interesting. I\'ve been searching for years, following whispers and fragments of lore. I know it lies within the mountain caves, but the way is treacherous and full of guardians both seen and unseen.',
        caves: 'The caves are not natural formations, not entirely. They were shaped by the same hands that built the temple and created the artifact. The deeper you go, the more you\'ll see their influence.',
        advice: 'If you truly intend to seek the artifact, heed this warning: what guards it is not of this world. It does not live or die as we do. And the artifact itself... its power comes with a price. Always a price.'
      },
      farewell: 'Our paths may cross again. Whether that brings fortune or misfortune remains to be seen.'
    }
  },
  
  farmer: {
    name: 'Farmer Edda',
    description: 'A weathered individual with sun-darkened skin and calloused hands. Their simple clothing is practical, and a wide-brimmed hat shields their eyes from the sun.',
    dialogue: {
      greeting: 'Don\'t get many folk wandering out this way. What brings you to the edge of Eldervale?',
      topics: {
        farming: 'Been working this land for thirty years now. The soil\'s good, if you know how to read it and respect its ways.',
        forest: 'That forest? I keep my distance. Sometimes at night, I see lights among the trees. And the animals won\'t go near it—they know something we don\'t.',
        village: 'The village has been good to me and mine. Elder Thorne keeps things peaceful, though there\'s been talk of strange happenings lately.',
        weather: 'The weather\'s been odd this season. Sudden storms coming from nowhere, clear skies turning dark in minutes. Some say it\'s just nature\'s way, but I wonder.'
      },
      farewell: 'Mind how you go, especially if you\'re heading toward that forest.'
    }
  },
  
  herbalist: {
    name: 'Herbalist Fern',
    description: 'A serene individual with eyes that seem to shift color in different lights. Their clothes are practical but adorned with embroidered plants and symbols.',
    dialogue: {
      greeting: 'Welcome to my humble workshop. What brings you to seek the green wisdom?',
      topics: {
        herbs: 'Every plant has its purpose and its power. The trick is learning their language—what they can tell us about healing, about the world, about ourselves.',
        village: 'The village tolerates me, and I them. They come when they need healing or remedies, and otherwise leave me to my studies. It\'s a fair arrangement.',
        forest: 'The forest is a place of power and ancient memory. I gather many of my rarest ingredients there, though even I do not venture too deep without preparation.',
        artifact: 'The forgotten artifact? Yes, I know of it. A dangerous thing to seek, but perhaps necessary in these times. The signs and portents have been... troubling.',
        map: 'A map to the caves where the artifact rests? I have such a document, passed down through many hands before reaching mine. I\'ve kept it safe, waiting for one who has cause to use it. The elder sent you? Then perhaps you are that one.'
      },
      farewell: 'May the green wisdom guide your path and keep you from harm.'
    },
    questDialogue: {
      find_map: {
        prompt: 'map',
        response: 'A map to the ancient caves? Yes, I have preserved such a document. It was entrusted to my predecessor, and to theirs before them, going back generations. It shows the way through the forest to the mountain caves, and something of the passages within. The script is archaic, but I can translate enough to know it leads to the temple where the artifact is kept. If Elder Thorne believes you should have it, then take it with my blessing—but be warned, the path it shows is dangerous in more ways than one.',
        completeStep: 'find_map',
        giveItem: 'ancient_map'
      }
    }
  },
  
  // Forest characters
  forest_spirit: {
    name: 'Ethereal Presence',
    description: 'A shimmering, translucent figure that seems formed from mist and forest light. Their features are difficult to discern, constantly shifting and flowing.',
    dialogue: {
      greeting: 'Few mortals enter my glade. Fewer still can perceive me. You have unusual sight.',
      topics: {
        forest: 'This forest remembers when the mountains were young and the seas distant. I am but one of its many children, neither the oldest nor the wisest.',
        village: 'The human settlement? A fleeting thing. It will pass, as all mortal works do. Yet they are not unwelcome—they remember some of the old ways, the proper respects.',
        artifact: 'The artifact is not of my realm, though its makers knew of us and honored the old pacts. It was crafted for a purpose I cannot fathom, but its power resonates even here, in the green places.',
        spirit: 'What am I? A question with many answers. A thought of the forest. A memory of ancient times. A dream dreaming itself. Or simply a guide, for those with the wisdom to follow.'
      },
      farewell: 'Our paths may cross again, or they may not. The forest has many ways, and time flows differently among the trees.'
    }
  },
  
  mountain_goat: {
    name: 'Mountain Goat',
    description: 'A sturdy, sure-footed goat with curved horns and a thick coat. It watches you with surprising intelligence in its amber eyes.',
    dialogue: {
      greeting: 'The goat pauses in its grazing to regard you curiously, tilting its head to one side.',
      topics: {
        mountains: 'The goat bleats softly, as if sharing some secret knowledge of the heights.',
        food: 'The goat\'s ears perk up at the mention of food, and it takes a hopeful step toward you.',
        path: 'The goat paws at the ground and looks meaningfully toward the eastern path, as if suggesting a direction.',
        cave: 'At the mention of the cave, the goat becomes suddenly alert, stamping its hoof against the stone with a sharp crack.'
      },
      farewell: 'The goat returns to its grazing, seemingly dismissing you from its concerns.'
    }
  },
  
  guardian_spirit: {
    name: 'Ancient Guardian',
    description: 'A towering figure formed from light and shadow, with features that suggest both human and something entirely other. Energy crackles around its form.',
    dialogue: {
      greeting: 'Mortal. You stand in the sacred temple, before the Guardian of the Artifact. State your purpose or depart.',
      topics: {
        artifact: 'The Artifact of Radiance was created by those who understood the balance between worlds. They entrusted it to my keeping when they passed beyond. None have proven worthy to claim it since.',
        temple: 'This temple was built at the nexus of powerful energies. The makers shaped the mountain itself to create this place, using knowledge lost to your kind for millennia.',
        guardian: 'I am bound to this place and to the artifact. I have watched empires rise and fall, seen countless seekers come and go. Time means little to one such as I.',
        test: 'If you seek the artifact, you must be tested. Not merely in strength or cunning, but in understanding. The artifact responds to need, not desire. To purpose, not ambition. What is your true purpose in seeking it?'
      },
      farewell: 'Consider carefully what you have learned here. Return when you are ready to be tested—or do not return at all.',
      questDialogue: {
        retrieve_artifact: {
          prompt: 'test',
          response: 'I see truth in your words, mortal. The shadows grow in the world above, and the balance shifts dangerously. Perhaps this is indeed the time for the artifact to return to mortal hands. Approach and take what you came for, but remember: the artifact\'s power serves a purpose greater than any one being\'s desire. Use it with wisdom, or it will consume you as it has others before.',
          completeStep: 'retrieve_artifact'
        }
      }
    }
  }
};
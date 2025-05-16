export const quests = {
  mainQuest: {
    title: 'The Forgotten Artifact',
    description: 'Locate the ancient artifact hidden in the caves beyond the forest.',
    steps: [
      {
        id: 'speak_to_elder',
        description: 'Speak to the village elder about the artifact.',
        completed: false,
        hint: 'The village elder lives in a cottage north of the village square.'
      },
      {
        id: 'find_map',
        description: 'Find the map to the caves.',
        completed: false,
        hint: 'The elder mentioned that the herbalist might have the map you need.'
      },
      {
        id: 'enter_forest',
        description: 'Navigate through the forest.',
        completed: false,
        hint: 'The forest lies to the south of the village outskirts.'
      },
      {
        id: 'enter_caves',
        description: 'Find the entrance to the ancient caves.',
        completed: false,
        hint: 'According to the map, the cave entrance is somewhere in the mountains beyond the forest.'
      },
      {
        id: 'retrieve_artifact',
        description: 'Retrieve the forgotten artifact.',
        completed: false,
        hint: 'The artifact is said to be kept in an ancient temple deep within the caves.'
      },
      {
        id: 'return_to_village',
        description: 'Return the artifact to the village elder.',
        completed: false,
        hint: 'The village elder will want to see the artifact you\'ve recovered.'
      }
    ],
    rewards: {
      experience: 500,
      items: ['ancient_amulet'],
      story: 'As you place the artifact in the elder\'s hands, their eyes widen with wonder and respect. "You have done what many thought impossible," they say. "With this returned to us, Eldervale may face the coming darkness with hope. You have our eternal gratitude, and will always be welcome here as a hero of our village."'
    }
  },
  
  // Additional side quests
  herbCollecting: {
    title: 'Healing Hands',
    description: 'Collect rare herbs for the village herbalist.',
    active: false,
    steps: [
      {
        id: 'speak_to_herbalist',
        description: 'Learn what herbs the herbalist needs.',
        completed: false,
        hint: 'The herbalist lives in a hut east of the marketplace.'
      },
      {
        id: 'find_forest_herbs',
        description: 'Find moonleaf herbs in the forest clearing.',
        completed: false,
        hint: 'The herbalist said these herbs grow in forest clearings where moonlight can reach them.'
      },
      {
        id: 'find_mountain_herbs',
        description: 'Find stoneroots near the mountain path.',
        completed: false,
        hint: 'Stoneroots apparently grow in rocky soil on the mountain paths.'
      },
      {
        id: 'return_herbs',
        description: 'Return the collected herbs to the herbalist.',
        completed: false,
        hint: 'The herbalist is waiting for your return with the herbs.'
      }
    ],
    rewards: {
      experience: 200,
      items: ['healing_potion'],
      story: 'The herbalist expertly examines the plants you\'ve brought back, nodding with approval. "These are perfect specimens. With these, I can create remedies that will help many in the village. Your keen eye and careful handling show a natural affinity for the green wisdom. Take this potion as a token of my thanks—it may prove useful in your further adventures."'
    }
  },
  
  tavernTale: {
    title: 'Tales from the Road',
    description: 'Help the tavern keeper collect interesting stories for their patrons.',
    active: false,
    steps: [
      {
        id: 'speak_to_tavern_keeper',
        description: 'Learn what kind of stories the tavern keeper wants.',
        completed: false,
        hint: 'The tavern keeper can be found in the Wanderer\'s Rest tavern.'
      },
      {
        id: 'find_forest_tale',
        description: 'Discover something unusual in the forest to talk about.',
        completed: false,
        hint: 'Explore the forest thoroughly - anything unusual or magical would make a good story.'
      },
      {
        id: 'find_mountain_tale',
        description: 'Find something interesting in the mountains to add to your tale.',
        completed: false,
        hint: 'The mountains are ancient and full of wonders - surely you can find something noteworthy.'
      },
      {
        id: 'tell_tales',
        description: 'Return to the tavern and share your stories.',
        completed: false,
        hint: 'The tavern keeper is waiting to hear about your adventures.'
      }
    ],
    rewards: {
      experience: 150,
      items: ['silver_coin_pouch'],
      story: 'You regale the tavern with tales of your explorations—the ethereal forest spirit, the ancient stone circle, and the crystal caverns deep within the mountain. The patrons listen with rapt attention, buying you drinks and asking questions long into the night. The tavern keeper slips you a pouch of silver coins with a wink. "Come back when you have more tales to tell," they say. "You\'ve got a gift for it, and good stories are worth their weight in gold around here."'
    }
  }
};

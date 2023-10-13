const characterData = {
  conscript : {
    avatar : 'assets/assets/conscript.png', 
    backstory : 'Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.', 
    catchphrase : 'Bravery only takes you so far.', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Marcus anræd', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    dead : false,
    duplicates : {},
    distance : 67, 
    elId : 'conscript',
    health : 200,
    numberOfTurns : 0,
    originalHealth: 200, 
    intelligence : 89,
    messages: '',
    race : 'human', 
    relationship : 'hardened', 
    skill : ['hand-to-hand combat', 'survival', 'strategem', 'honor'], 
    speed : 50, 
    strength : 75, 
    totalDiceCount: 3,
    weakness : ['hunger', 'non-magic race'], 
    weapon : 'Broad Sword'
  },
  ignisfatuus : {
    avatar : 'assets/assets/ignisfatuus.png', 
    backstory : 'For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Sid fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again. Abandoned by his people, lost to his love, the only thing he had left was a smile, but all he could do with it was to give it away.', 
    catchphrase : 'Wanna hear a secret?', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Sidney son of Slugabed', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    dead : false,
    duplicates : {},
    distance : 89, 
    elId : 'ignisfatuus',
    health : 90, 
    numberOfTurns : 0,
    originalHealth: 75,
    intelligence : 100,
    messages: '',
    race : '"Fire-Fool" Elf', 
    relationship : 'loyal', 
    skill : ['foolery', 'levitation', 'elemental'], 
    speed : 80, 
    strength : 60, 
    totalDiceCount: 7,
    weakness : ['rules','strength', 'secrets', 'greed'], 
    weapon : 'boughs and sparrows', 
  },
  mage : {
    avatar : 'assets/assets/mage.png',
    backstory : 'Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.',
    catchphrase : 'Choose not to be harmed—and you won\'t feel harmed. Don\'t feel harmed—and you haven\'t been.',
    characterClass : 'hero',
    characterCardFlexDirection: 'row',
    characterName : 'Hatchala the ancient one',
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 10, 
    dead : false, 
    duplicates : {},
    elId : 'mage',
    health : 300,
    numberOfTurns : 0,
    originalHealth: 300,
    intelligence : 1000,
    messages: '',
    race : 'unknown',
    relationship : 'patriarchal',
    skill : ['cooking','magic', 'strategem'],
    speed : 10, 
    strength : 75,
    totalDiceCount: 4,
    weakness : ['remembrance'],
    weapon : 'magic',
  },
  naqualk : {
    avatar : 'assets/assets/naqualk.png', 
    backstory : 'Goyathlay emerged as a child from a land where scorching sun meets the unrelenting sands. She displayed an innate connection to the land. As a skilled tracker, she mastered the art of reading shifting dunes and deciphering desert secrets. Armed with his ancestral bow she became known as the "Sandborne Guardian." With the winds as her allies and the sun as her witness, Goyathlay stood as a beacon of hope against darkness in the heart of the scorching desert.', 
    catchphrase : 'Horizons are boundaries set by the mind, but broken by the heart', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Goyathlay of the seering plains', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 67, 
    dead : false,
    duplicates : {},
    elId : 'naqualk',
    health : 275, 
    numberOfTurns : 0,
    originalHealth : 275,
    intelligence : 89,
    messages: '',
    race : 'Desert Elf', 
    relationship : 'extrovert', 
    skill : ['stealth', 'infiltration', 'elemental', 'honor', 'femininity'], 
    speed : 30, 
    strength : 75, 
    totalDiceCount: 3,
    weakness : ['intransigence','rigid-fidelity'], 
    weapon : 'Staff', 
  },
  ogre : {
    avatar : '',
    backstory : '',
    catchphrase : '',
    characterCardFlexDirection: 'row-reverse',
    characterClass : 'villain',
    characterName : '',
    cssOrder: 0,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 10, 
    dead : false,
    duplicates : {},
    elId : '',
    health : 1000,
    numberOfTurns : 0,
    originalHealth : 1000,
    intelligence : 100,
    messages: '',
    race : 'ogre',
    relationship : '',
    skill : 'brute strength',
    speed : 15, 
    strength : 80,
    totalDiceCount: 3,
    weakness : ['steel'],
    weapon : 'battle axe',
  },
  soulforge : {
    avatar : 'assets/assets/soulforge.png', 
    backstory : 'To the priest the process is called dismorgrification.  To the commoner it is called "soul-tearing" and "soul-forging."  The first is the process that happened while yet alive.  The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is literally ripped apart.  The second part of the process is what most term as "hell."  It is the absolutely solitary act of stitching together their own soul, one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the screams of the Soul Forge stalking the late hours.', 
    catchphrase : 'Death may be the greatest of all human blessings', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Isolwyn Stormbrand', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 67, 
    dead : false,
    duplicates : {},
    elId : 'soulforge',
    health : 325, 
    numberOfTurns : 0,
    originalHealth : 325,
    intelligence : 89,
    messages: '',
    race : 'dismorgrified soul', 
    relationship : 'empty', 
    skill : ['interworld perception','chaos', 'foolery', 'magic'], 
    speed : 5, 
    strength : 90, 
    totalDiceCount: 3,
    weakness : ['rage'], 
    weapon : 'Broad Sword', 
  },
  zedfire : {
    avatar : 'assets/assets/zed-fire.png',
    backstory : 'The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath. Existing before the existence, he is not all-powerful, but he is connected to everything.  He is the shadow to every light, the trance that consumes when the dream flees your eyelids.  He is the not to everything that is, the antecedal complement that consumes everything that is good.  And he hungers for you.',
    catchphrase : 'I am the fire that scorcheth humanity',
    characterCardFlexDirection: 'row-reverse',
    characterClass : 'villain',
    characterName : 'Zedfire, Hælend of darkness',
    cssOrder: 0,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 10, 
    dead : false,
    duplicates : {},
    elId : 'zedfire',
    health : 2111,
    numberOfTurns : 0,
    originalHealth: 2111,
    intelligence : 100,
    messages: '',
    race : 'unknown',
    relationship : 'adversarial',
    skill : [],
    speed : 50, 
    strength : 80,
    totalDiceCount: 5,
    weakness : ['honor', 'magic', 'elemental'],
    weapon : 'dark-magic, fire',
  }

}

export default characterData
const characterData = {
  conscript : {
    alive: true,
    avatar : 'assets/assets/conscript.png', 
    backstory : 'Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.', 
    catchphrase : 'Bravery only takes you so far.', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Marcus Skia', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 67, 
    elId : 'conscript',
    health : 100, 
    intelligence : 89,
    race : 'human', 
    relationship : 'hardened', 
    skill : '', 
    speed : 50, 
    strength : 75, 
    totalDiceCount: 3,
    weakness : ['hunger','anger','greed'], 
    weapon : 'Broad Sword'
  },
  ignisfatuus : {
    alive: true,
    avatar : 'assets/assets/ignisfatuus.png', 
    backstory : 'For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Iggie fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again.', 
    catchphrase : 'Wanna hear a secret?', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : 'Iggie', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 89, 
    elId : 'ignisfatuus',
    health : 45, 
    intelligence : 100,
    race : '"Fire-Fool" Elf', 
    relationship : 'loyal', 
    skill : 'levity and levitation', 
    speed : 80, 
    strength : 60, 
    totalDiceCount: 3,
    weakness : ['rules','strength', 'secrets', 'youth'], 
    weapon : 'bow', 
  },
  mage : {
    alive: true,
    avatar : 'assets/assets/mage.png',
    backstory : 'Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.',
    catchphrase : 'Choose not to be harmed—and you won\'t feel harmed. Don\'t feel harmed—and you haven\'t been.',
    characterClass : 'hero',
    characterCardFlexDirection: 'row',
    characterName : 'Hatchala',
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 10, 
    elId : 'mage',
    health : 50,
    intelligence : 1000,
    race : 'unknown',
    relationship : 'patriarchal',
    skill : 'cooking',
    speed : 10, 
    strength : 75,
    totalDiceCount: 3,
    weakness : ['remembering'],
    weapon : 'magic',
  },
  naqualk : {
    alive: true,
    avatar : 'assets/assets/naqualk.png', 
    backstory : 'put info here', 
    catchphrase : 'Horizons are boundaries set by the mind, but broken by the heart', 
    characterCardFlexDirection: 'row',
    characterClass : 'hero',
    characterName : '', 
    cssOrder: -1,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 67, 
    elId : 'naqualk',
    health : 100, 
    intelligence : 89,
    race : 'Desert Elf', 
    relationship : 'extrovert', 
    skill : '', 
    speed : 30, 
    strength : 75, 
    totalDiceCount: 3,
    weakness : ['hunger','anger','greed'], 
    weapon : 'Staff', 
  },
  ogre : {
    alive: true,
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
    elId : '',
    health : 1000,
    intelligence : 100,
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
    alive: true,
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
    elId : 'soulforge',
    health : 100, 
    intelligence : 89,
    race : 'dismorgrified soul', 
    relationship : 'empty', 
    skill : 'interworld perception', 
    speed : 5, 
    strength : 90, 
    totalDiceCount: 3,
    weakness : ['hunger','anger','greed'], 
    weapon : 'Broad Sword', 
  },
  zedfire : {
    alive: true,
    avatar : 'assets/assets/zed-fire.png',
    backstory : 'The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath.',
    catchphrase : 'I am the fire that scorcheth humanity',
    characterCardFlexDirection: 'row-reverse',
    characterClass : 'villain',
    characterName : 'Zedfire',
    cssOrder: 0,
    currentDiceScore : [],
    currentDefendDiceScore : [],
    distance : 10, 
    elId : 'zedfire',
    health : 1000,
    intelligence : 100,
    race : 'unknown',
    relationship : 'adversarial',
    skill : 'none',
    speed : 50, 
    strength : 80,
    totalDiceCount: 5,
    weakness : ['non-fire elemental weapons'],
    weapon : 'dark-magic, fire',
  }

}

export default characterData
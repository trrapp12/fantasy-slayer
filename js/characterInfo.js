let conscript = {
  elId : 'conscript',
  characterClass : 'hero',
  characterName : 'Marcus Skia', 
  avatar : 'assets/assets/conscript.png', 
  race : 'human', 
  health : 100, 
  weapon : 'Broad Sword', 
  skill : '', 
  speed : 50, 
  strength : 75, 
  distance : 67, 
  backstory : 'Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.', 
  catchphrase : 'Bravery only takes you so far.', 
  weakness : ['hunger','anger','greed'], 
  relationship : 'hardened', 
  intelligence : 89,
  alive: true,
}

let ignisfatuus = {
  elId : 'ignisfatuus',
  characterClass : 'hero',
  characterName : 'Iggie', 
  avatar : 'assets/assets/ignisfatuus.png', 
  race : '"Fire-Fool" Elf', 
  health : 45, 
  weapon : 'bow', 
  skill : 'levity and levitation', 
  speed : 80, 
  strength : 60, 
  distance : 89, 
  backstory : 'For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Iggie fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again.', 
  catchphrase : 'Wanna hear a secret?', 
  weakness : ['rules','strength', 'secrets', 'youth'], 
  relationship : 'loyal', 
  intelligence : 100,
  alive: true,
}

let soulforge = {
  elId : 'soulforge',
  characterClass : 'hero',
  characterName : '', 
  avatar : 'assets/assets/mage.png', 
  race : 'dismorgrified soul', 
  health : 100, 
  weapon : 'Broad Sword', 
  skill : 'interworld perception', 
  speed : 5, 
  strength : 90, 
  distance : 67, 
  backstory : 'To the priest the process is called dismorgrification.  To the commoner it is called "soul-tearing" and "soul-forging."  The first is the process that happened while yet alive.  The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is literally ripped apart.  The second part of the process is what most term as "hell."  It is the absolutely solitary act of stitching together their own soul, one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the screams of the Soul Forge stalking the late hours.', 
  catchphrase : 'Death may be the greatest of all human blessings', 
  weakness : ['hunger','anger','greed'], 
  relationship : 'empty', 
  intelligence : 89,
  alive: true,
}

let naqualk = {
  elId : 'naqualk',
  characterClass : 'hero',
  characterName : '', 
  avatar : 'assets/assets/naqualk.png', 
  race : 'Desert Elf', 
  health : 100, 
  weapon : 'Staff', 
  skill : '', 
  speed : 30, 
  strength : 75, 
  distance : 67, 
  backstory : 'put info here', 
  catchphrase : 'Horizons are boundaries set by the mind, but broken by the heart', 
  weakness : ['hunger','anger','greed'], 
  relationship : 'extrovert', 
  intelligence : 89,
  alive: true,
}

let mage = {
  elId : 'mage',
  characterClass : 'hero',
  characterName : 'Hatchala',
  avatar : 'assets/assets/mage.png',
  race : 'unknown',
  health : 50,
  weapon : 'magic',
  skill : 'cooking',
  speed : 10, 
  strength : 75,
  distance : 10, 
  backstory : 'Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.',
  catchphrase : 'Choose not to be harmed—and you won\'t feel harmed. Don\'t feel harmed—and you haven\'t been.',
  weakness : ['remembering'],
  relationship : 'patriarchal',
  intelligence : 1000,
  alive: true,
}

let zedfire = {
  elId : 'zedfire',
  characterClass : 'villain',
  characterName : 'the fire that scorcheth humanity',
  avatar : 'assets/assets/zed-fire.png',
  race : 'unknown',
  health : 1000,
  weapon : 'dark-magic, fire',
  skill : 'none',
  speed : 50, 
  strength : 80,
  distance : 10, 
  backstory : 'The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath.',
  catchphrase : 'I am the fire that scorcheth humanity',
  weakness : ['non-fire elemental weapons'],
  relationship : 'adversarial',
  intelligence : 100,
  alive: true,
}


export { conscript, ignisfatuus, soulforge, naqualk, mage, zedfire };
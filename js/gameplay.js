import { conscript, ignisfatuus, soulforge, naqualk, mage, zedfire } from './characterInfo.js'

// must be able to take turns

// must be able to create order to rolling dice
// must compare dice to health
// must add/subtract health
// must decide which characters turn it is
// must calculate damage with extras
// must decide who wins

// must be able to roll dice
function rollDice (sides) {
    return Math.floor(Math.random() * sides) + 1;
}


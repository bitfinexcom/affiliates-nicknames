'use strict'

const getNickname = require('.')

console.log(getNickname())

const custom = getNickname({
  adjectives: ['laughing', 'dancing', 'jumping'],
  nouns: ['Cloud', 'Sun', 'Moon']
})
console.log(custom)

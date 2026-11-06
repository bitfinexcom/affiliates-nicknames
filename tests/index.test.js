'use strict'

const test = require('brittle')
const getNickname = require('..')

test('builds a start-cased "adjective noun" from a custom dictionary', (t) => {
  t.is(getNickname({ adjectives: ['laughing'], nouns: ['cloud'] }), 'Laughing Cloud')
})

test('uses the default dictionary when none is given', (t) => {
  const nickname = getNickname()

  t.is(typeof nickname, 'string')
  t.ok(nickname.length > 0)
})

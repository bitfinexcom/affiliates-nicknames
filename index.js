'use strict'

const wordsDefault = require('./words.json')

// Matches lodash startCase on the dictionaries in use (plain ASCII words).
const WORD = /[A-Za-z0-9]+/g

function sample (list = []) {
  return list[Math.floor(Math.random() * list.length)]
}

function startCase (text) {
  const words = text.match(WORD) || []

  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function getNickname (dict) {
  const words = dict || wordsDefault

  const name = []

  name.push(sample(words.adjectives))
  name.push(sample(words.nouns))

  return startCase(name.join(' '))
}

module.exports = getNickname

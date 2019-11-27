'use strict'

const _ = require('lodash')
const wordsDefault = require('./words.json')

function getNickname (dict) {
  const words = dict || wordsDefault

  const name = []

  name.push(_.sample(words.adjectives))
  name.push(_.sample(words.nouns))

  return _.startCase(name.join(' '))
}

module.exports = getNickname

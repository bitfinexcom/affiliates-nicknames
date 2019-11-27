# affiliates-nicknames

Nickname Generation for Fun and Profit


## Usage

```js
const getNickname = require('@bitfinex/nicknames')

console.log(getNickname())

// custom dictionaries
const custom = getNickname({
  adjectives: ['laughing', 'dancing', 'jumping'],
  nouns: ['Cloud', 'Sun', 'Moon']
})
console.log(custom)

```

Runable example: [example.js](example.js)

## Test

```
npm i -g mocha standard
npm t
```

const fs = require('fs');

const wordsPath = './data/words.txt'

let words;

const init = function () {
  // read in words
  let raw = fs.readFileSync(wordsPath, 'utf8')

  /**
   * performance tweak - removed (665) records
   * optimize our dataset by removing anything less than three letters
   * since the requirement is to dis-allow it anyway.
   *
  */
  words = raw.split('\n').filter(word => word.length >= 3)
}

async function find(prefix, limit){
  if(!prefix) throw 'Prefix is required'

  const result = [];
  const len = prefix.length
  const prefixLower = prefix.toLowerCase()

  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx].slice(0, len).toLowerCase()

    if (word !== prefixLower) continue

    result.push(words[idx])

    if(result.length >= limit) break
  }

  return result
}

// initialize
init()

module.exports = {
  find
}

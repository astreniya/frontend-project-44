import viewDefault from '../src/index.js'
import crypto from 'crypto'

let example = []
let correctAnswer = []

for (let i = 0; i < 3; i++) {
  example.push(crypto.randomInt(0, 100))
  if (Number(example[i]) < 2) {
    correctAnswer.push('no')
  }
  else if (Number(example[i]) === 2) {
    correctAnswer.push('yes')
  }
  else if (Number(example[i]) % 2 === 0) {
    correctAnswer.push('no')
  }
  else {
    let isPrime = true
    const limit = Math.sqrt(Number(example[i]))

    for (let u = 3; u <= limit; u += 2) {
      if (Number(example[i]) % u === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      correctAnswer.push('yes')
    }
    else {
      correctAnswer.push('no')
    }
  }
}

viewDefault('Answer "yes" if given number is prime. Otherwise answer "no".', example, correctAnswer)

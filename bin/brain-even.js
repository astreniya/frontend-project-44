#!/usr/bin/env node
import viewDefault from '../src/index.js'
import crypto from 'crypto'

let number = crypto.randomInt(1, 101)
let example = []
let correctAnswer = []
for (let i = 0; i < 3; i++) {
  number = crypto.randomInt(1, 101)
  example.push(number)
  if (Number(example[i] % 2 === 0)) {
    correctAnswer.push('yes')
  }
  else {
    correctAnswer.push('no')
  }
}
console.log(example)
viewDefault('Answer "yes" if the number is even, otherwise answer "no".', example, correctAnswer)

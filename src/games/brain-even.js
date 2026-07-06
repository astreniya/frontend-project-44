#!/usr/bin/env node
import viewDefault from '../index.js'
import crypto from 'crypto'

export default () => {
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

  viewDefault('Answer "yes" if the number is even, otherwise answer "no".', example, correctAnswer)
}
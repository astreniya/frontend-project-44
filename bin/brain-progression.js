#!/usr/bin/env node
import viewDefault from '../src/index.js'
import crypto from 'crypto'

let example = []
let correctAnswer = []

for (let i = 0; i < 3; i++) {
  let step = crypto.randomInt(1, 15)
  let randWidth = crypto.randomInt(5, 10)
  let randIndexEmpty = crypto.randomInt(0, (randWidth - 1))
  let firstNum = crypto.randomInt(1, 15)
  let doneProgression = []
  for (let i = 0; i < randWidth; i++) {
    let result = firstNum + step * i
    if (i === randIndexEmpty) {
      correctAnswer.push(result.toString())
      result = '..'
    }
    doneProgression.push(result)
  }

  example.push(doneProgression.join(' '))
}

viewDefault('What number is missing in the progression?', example, correctAnswer)

#!/usr/bin/env node
import viewDefault from '../src/index.js'
import crypto from 'crypto'

let example = []
let correctAnswer = []
for (let i = 0; i < 3; i++) {
  example.push(crypto.randomInt(1, 101) + ' ' + crypto.randomInt(1, 101))
}

for (const item of example) {
  let nums = item.split(' ')
  let num1 = Number(nums[0])
  let num2 = Number(nums[1])
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)
  while (num2 !== 0) {
    let temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  correctAnswer.push(num1.toString())
}

viewDefault('Find the greatest common divisor of given numbers.', example, correctAnswer)

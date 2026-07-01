#!/usr/bin/env node

import readlineSync from 'readline-sync'
import crypto from 'crypto'

console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

for (let i = 0; i < 3; i++) {
  let number = crypto.randomInt(1, 101)
  console.log(`Question: ${number}`)
  let answer = readlineSync.question('Your answer: ')

  if (number % 2 === 0) {
    let correct = 'yes'
    if (answer === correct) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\n` + `Let's try again, ${name}!`)
      break
    }
  }
  else {
    let correct = 'no'
    if (answer === correct) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\n` + `Let's try again, ${name}!`)
      break
    }
  }
}

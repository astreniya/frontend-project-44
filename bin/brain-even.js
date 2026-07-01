#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < 3; i++) {
  let number = getRandomIntInclusive(1, 100)
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

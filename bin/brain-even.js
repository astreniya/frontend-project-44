#!/usr/bin/env node
let correctAnswer = 'no'
let name = 'Bill'
let answer = 'yes'

console.log('Welcome to the Brain Games!')
console.log(`May I have your name? ${name}`)
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
console.log('15')
console.log(`Your answer:  ${answer}`)
if (answer === correctAnswer) {
    console.log('Correct!')
} else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n` +
        `Let's try again, ${name}!`)
}

import viewDefault from '../index.js'
import crypto from 'crypto'

export default () => {
  let example = []
  let correctAnswer = []

  let operation = ['+', '-', '*']
  let num1 = crypto.randomInt(1, 101)
  let num2 = crypto.randomInt(1, 101)
  let randIndOp = crypto.randomInt(0, 2)

  for (let i = 0; i < 3; i++) {
    num1 = crypto.randomInt(1, 101)
    num2 = crypto.randomInt(1, 101)
    randIndOp = crypto.randomInt(0, 2)
    example.push(`${num1} ${operation[randIndOp]} ${num2}`)
  }
  for (const it of example) {
    const parts = it.split(' ')
    const item1 = Number(parts[0])
    const item2 = parts[1]
    const item3 = Number(parts[2])
    let currentResult
    if (item2 === '+') {
      currentResult = item1 + item3
    }
    else if (item2 === '-') {
      currentResult = item1 - item3
    }
    else if (item2 === '*') {
      currentResult = item1 * item3
    }
    correctAnswer.push(currentResult.toString())
  }

  viewDefault('What is the result of the expression?', example, correctAnswer)
}
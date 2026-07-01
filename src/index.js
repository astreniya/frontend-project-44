import readlineSync from 'readline-sync'

export default (gameTitle, example, correctAnswer) => {
  console.log('Welcome to the Brain Games!')
  let name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameTitle)

  for (let i = 0; i < 3; i++) {
    console.log(`Question: ${example[i]}`)

    let answer = readlineSync.question('Your answer: ')

    if (answer.toString() === correctAnswer[i]) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.\n` + `Let's try again, ${name}!`)
      break
    }
  }
}

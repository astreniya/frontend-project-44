import readlineSync from 'readline-sync'

export default (gameTitle, example, correctAnswer) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameTitle)

  for (let i = 0; i <= 2; i++) {
    console.log(`Question: ${example[i]}`)

    const answer = readlineSync.question('Your answer: ')

    if (answer.toString() === correctAnswer[i]) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${name}!`)
      }
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.\n` + `Let's try again, ${name}!`)
      break
    }
  }
}

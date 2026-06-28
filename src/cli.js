import readlineSync from 'readline-sync';

export default (name) => {
    return readlineSync.question('May I have your name? ' + name + '\nHello, ' + name + '!');
}

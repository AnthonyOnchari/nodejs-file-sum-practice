const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'numbers.txt');

function appendAndSum(newNumbersString) {
    fs.appendFileSync(filePath, newNumbersString + ',', 'utf8');

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const numbers = fileContent.split(',')
        .filter(str => str.trim() !== '')
        .map(Number);

    const total = numbers.reduce((acc, curr) => acc + curr, 0);

    console.log('Numbers:', numbers);
    console.log('Sum:', total);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (answer) => {
    appendAndSum(answer);
    rl.close();
});

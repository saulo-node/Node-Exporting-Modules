const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log('You entendered: ' + name)
    rl.close();
});

rl.on('close', () => {
    console.log('Interface closed');
    process.exit(0);
})
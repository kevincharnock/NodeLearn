import chalk from 'chalk';


//Brincando com chalk

console.log(chalk.blue('Hello'+ chalk.red(' world!')));
console.log(chalk.bgCyan("Luiggi gay"));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

//

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

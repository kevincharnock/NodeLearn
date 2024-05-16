import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.bgGreen("teste"));

function pegaArquivo(pathFile){
    const encoding = 'UTF-8';
    fs.readFile(pathFile,encoding,(_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./texto.md');

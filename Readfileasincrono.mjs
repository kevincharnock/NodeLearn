import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';


function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code,"Não há arquivo no diretório"));
}

function getFile(pathFile){
    const encoding = 'utf-8';
    fs.promises
    .readFile(pathFile, encoding)
    .then((escrita) => console.log(chalk.bgGreen(escrita)))
    .catch(trataErro);
}


getFile('./texto.md');

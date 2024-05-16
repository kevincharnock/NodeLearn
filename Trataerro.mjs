import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';


function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code,"Não há arquivo no diretório"));
}

function pegaArquivo(pathFile){
    const encoding = 'UTF-8';
    fs.readFile(pathFile,encoding,(erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));

    })
}

pegaArquivo('./texto.md');

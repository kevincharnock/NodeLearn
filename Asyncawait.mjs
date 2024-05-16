import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';


function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code,"Não há arquivo no diretório"));
}

//Async / Await
async function getFile(pathFile){

    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(pathFile, encoding);
        console.log(chalk.bgGreen(texto));
        
    } catch(erro){
        trataErro(erro);
    }

}

getFile('./texto.md');
getFile('./');

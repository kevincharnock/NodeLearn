
import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
  }


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
extraiLinks('./texto.md')

const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);




/*
function gerarFaturaHTML(fatura, calc) {
  let html = `<html>\n`;
  html += `<p> Fatura ${fatura.cliente} </p>\n`;
  html += `<ul>\n`;

  for (let apre of fatura.apresentacoes) {
    const peca = calc.repo.getPeca(apre);
    html += `<li>  ${peca.nome}: ${formatarMoeda(
      calc.calcularTotalApresentacao(apre)
    )} (${apre.audiencia} assentos) </li>\n`;
  }

  html += `</ul>\n`;
  html += `<p> Valor total: ${formatarMoeda(
    calc.calcularTotalFatura(fatura.apresentacoes)
  )} </p>\n`;
  html += `<p> Créditos acumulados: ${
    calc.calcularTotalCreditos(fatura.apresentacoes)
  } </p>\n`;
  html += `</html>`;

  return html;
}
*/

//const faturaHTML = gerarFaturaHTML(faturas, pecas, calc);
//console.log(faturaHTML);



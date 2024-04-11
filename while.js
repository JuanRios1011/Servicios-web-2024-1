// let i = 0;
// let text = "";
// while (i > 10) {
//   text += `the number is ${i} - `;
//   i++;
// }

// // numeros del 1 al 100 de forma asc
// let number = 1;
// while (numero <= 100) {
//   console.log(numero);
//   numero++;
// }

// // numeros del 1 al 100 de forma desc
// let numero = 100;
// while (numero >= 1) {
//   console.log(numero);
//   numero--;
// }

// tabla multiplicar
const multiplicando = +process.argv[2];
let multiplicador = 1;
const result = [];

while (multiplicador <= 10) {
  result.push({
    multiplicando: multiplicando,
    multiplicador: multiplicador,
    producto: multiplicando * multiplicador,
  });
  multiplicador++;
}

console.table(result);
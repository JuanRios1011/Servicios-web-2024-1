let counter = 1;
while (counter < 10) {
  console.log(counter);
  counter++;
}

let counterTwo = 1;
do {
  console.log(`counter = ${counterTwo}`);
  counterTwo++;
} while (counterTwo < 10);

let number = 0;
do {
  number = +prompt("ingrese un numero mayor que 100");
  if (number >= 100) {
    alert("escribiste el numero correcto");
  }
} while (number < 100);
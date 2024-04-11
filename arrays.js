let colours = ["orange", "green", "yellow", "red", "gray"]; // lenght = 5
// console.log({ coloursLength: colours.length });
// console.log(colours[2]);
// console.log(colours[colours.length - 1]);
// console.log(colours.at(-1));

let some = [27, "nicolas", { brand: "mazda", model: 2024 }];
// console.log(some[2].model);
// console.log(some[2].brand);

// insertar un elemento al final de un array
colours.push(10);
colours.push(20);

console.log(colours);

// elimina el ultimo elemento del array
colours.pop();
console.log(colours);
// eliminar el primer elemento del array
colours.shift();
console.log(colours);
// insertar un elemento al inicion del arr
colours.unshift("nuevo-elemento");
console.log(colours);
// conocer el index de un elm dentro del arr
console.log(colours.indexOf("red"));
console.log(colours.indexOf("hola-mundo"));
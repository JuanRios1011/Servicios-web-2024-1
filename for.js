// let counter = 0;
// while (counter <= 100) {
//   console.log(`counter = ${counter}`);
//   counter++;
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(`counter with for = ${i}`);
// }

// for (let counter = 100; counter >= 0; counter--) {
//   console.log(`counter = ${counter}`);
// }

// for (let counter = 0; counter <= 100; counter += 2) {
//   console.log(`counter = ${counter}`);
// }

// let fruits = ["pera", "manzana", "naranja", "papaya", "limon"];
// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// ["limon", "papaya", "naranja","manzana", "pera"]
// for (let index = fruits.length - 1; index >= 0; index--) {
//   console.log(fruits[index]);
// }

// const firstName = "esteban";
// for (const char of firstName) {
//   console.log(`${char}`);
// }

const person = {
    firstName: "esteban",
    lastName: "lopez",
    age: 24,
    weight: "100",
    height: "1.72",
    gender: "male",
    phone: "3334446666",
  };
  
  // for (const key in person) {
  //   console.log(person[key]);
  // }
  
  // let chars = ["n", "i", "c", "o"];
  // delete chars[0];
  // console.log(chars.join("*"));
  
  // const numbersOne = [1, 2, 3, 4, 5];
  // const numbersTwo = [6, 7, 8, [9, [10, 11]]];
  // const numbers = numbersOne.concat(numbersTwo).flat(2);
  // console.log(numbers);
  
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // // fruits.splice(2, 1, "Lemon", "Kiwi");
  // fruits.splice(0, 2);
  // console.log(fruits);
  
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1, 3);
  console.log(citrus);
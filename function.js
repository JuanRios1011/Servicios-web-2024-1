// function add(num1 = 10, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

const addTwo = (num1, num2) => num1 + num2;

let result = addTwo(10, 10);
console.log(result);

// let result = add(undefined, 30);
// let results = add(1, 2);
// let resultTwo = add(3, 4);
// let resultThree = add(5, 6);

// console.log(results);
// console.log(resultTwo);
// console.log(resultThree);

function grettings() {
  console.log("hello world");
}

// grettings();
// grettings();
// grettings();
// grettings();
// grettings();

// let counter = 10;
// while (counter >= 0) {
//   (function () {
//     console.log("hello world");
//   })();
//   counter--;
// }

const person = {
  firstName: "esteban",
  lastName: "lopez",
  age: 24,
  weight: "100",
  height: "1.72",
  gender: "male",
  phone: "3334446666",
  printAge: function () {
    console.log(`la edad de ${this.firstName} es: ${this.age}`);
  },
};

person.printAge();
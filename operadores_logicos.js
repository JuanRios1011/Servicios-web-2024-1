console.log("operadores logicos")

console.log("operador AND &&")
console.log(false && false)
console.log(true && false)
console.log(false && true)
console.log(true && true)

console.log("operador OR || ")
console.log(false || false)
console.log(true || false)
console.log(false || true)
console.log(true || true)

console.log("operador NOT !")
console.log(!true)
console.log(!false)

let counter = 10
console.log(`el valor del counter: ${counter}`)

if (counter>100){
    console.log(`el valor del counter: ${counter} es mayor a 100`)
}else{
    console.log(`el valor del counter: ${counter} es menor que 100`)
}

counter > 100 ? console.log("counter > 100"): console.log("counter < 100")
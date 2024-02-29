const sum = (num1,num2) => console.log(num1 + num2)
const res = (num1,num2) => console.log(num1 - num2)
const mul = (num1,num2) => console.log(num1 * num2)
const div = (num1,num2) => console.log(num1 / num2)

const processEnv = process.argv




if(processEnv[2]=="-sum"){
    const num1= parseInt(processEnv[3])
    const num2= parseInt(processEnv[4])
    sum(num1, num2)
}

if(processEnv[2]=="-res"){
    const num1= parseInt(processEnv[3])
    const num2= parseInt(processEnv[4])
    res(num1, num2)
}

if(processEnv[2]=="-mul"){
    const num1= parseInt(processEnv[3])
    const num2= parseInt(processEnv[4])
    mul(num1, num2)
}

if(processEnv[2]=="-div"){
    const num1= parseInt(processEnv[3])
    const num2= parseInt(processEnv[4])
    div(num1, num2)
}
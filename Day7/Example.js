function square() {
  let num = 2;
  let num1 = 5;
  let suma = num * num1;
  console.log(suma);
}
square();

//Retorno

function fullName() {
  let nombre = "Kevin";
  let apellido = "Reyes";
  let nombrecompleto = nombre + "" + apellido;
  return nombrecompleto;
}
console.log(fullName());

//Parametro
function numero(num2) {
  return num2 + num2;
}
numero(1, 2);

//Parametro 2

function viviendogeneral(colegio, ciduad) {
  let vivienda = colegio + " " + ciduad;
  return vivienda;
}
viviendogeneral("alpes", "bogota");

//Parametros varios
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

function sumAllnums(...argument) {
  let sum1 = 0;
  for (let i = 0; i < argument.length; i++) {
    sum1 += argument[i];
  }
  return sum1;
}
console.log(sumAllnums(1, 2, 3, 4, 5));
console.log(sumAllnums(2, 3, 4, 5));

//La función flecha usa una flecha en lugar de la palabra clave function para declarar una función. Veamos tanto la función declarativa como la función flecha.

function square2 (n){
    return n*n
}
console.log(square2(2))

const square3 = (n) =>{
    return n *n
}
console.log(square3(2))

const square4 = (n) => n*n

    
    const printFullName = (firstname , lastname )=>{
        return `${firstname} ${lastname}`
    }
    console.log(printFullName("Kevin", "Reyes"))
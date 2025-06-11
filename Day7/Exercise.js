function nombre() {
  let nombre = "Kevin";
  let apellido = "Reyes";
  let fullname = nombre + " " + apellido;
  return fullname;
}
console.log(nombre());

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(fullName("Kevin ", "Reyes"));

function addNumber(num1, num2) {
  total = num1 + num2;
  return total;
}
addNumber(2, 4);

//Area , perimetro, volumne
function areaOfRectangle(altura, ancho, largo) {
  let area = altura * ancho;
  let perimetro = 2 * (altura + ancho);
  let volumenprimsa = altura * ancho * largo;
  return { area, perimetro, volumenprimsa };
}
areaOfRectangle(6, 2, 8);

//Area circulo
const areaOfCircle = (r) => {
  const PI = Math.PI;
  let circulo = r * r * PI;
  return circulo;
};
areaOfCircle(6);

//Circurferencia
const circumOfCircle = (r) => {
  const PI = Math.PI;
  let circunferencia = 2 * r * PI;
  return circunferencia;
};

const radio = prompt("Ingrese el radio del círculo:");
const resultado = circumOfCircle(Number(radio));
alert(`La circunferencia del círculo es: ${resultado}`);



function Totalimc(peso , altura) {
  imc = peso / (altura * altura) ** 2;
  if (imc <= 18.5) {
    return("Peso bajo");
  } else if (imc < 24.9) {
    return ("Peso normal");
  } else if (imc < 29.9) {
    return ("Sobre peso");
  } else if (imc > 30) {
    return ("Obeso");
  }
}

const pesoUsuario = prompt("Ingrese su peso");
const alturaUsuario = prompt("Ingrese su Altura");

const resultado1 = Totalimc(pesoUsuario, alturaUsuario);
alert(`El peso de usted es de ${resultado1}`);



function cheackSeason(mes){
        const mesLower = mes.toLowerCase();
        if (["diciembre", "enero", "febrero"].includes(mesLower)) {
    return "Invierno";
  } else if (["marzo", "abril", "mayo"].includes(mesLower)) {
    return "Primavera";
  } else if (["junio", "julio", "agosto"].includes(mesLower)) {
    return "Verano";
  } else if (["septiembre", "octubre", "noviembre"].includes(mesLower)) {
    return "Otoño";
  } else {
    return "Mes no válido";
  }
}
const ingresomes = prompt ("Ingrese el mes del año ")
const resultado2 = cheackSeason(ingresomes)
alert(`La estacion que esta es  ${resultado2}`)



function showDateTime (){
let now = new Date()
const date = now.getFullYear()
return date 
}
console.log("La fecha de hoy es "+ showDateTime())


function randomiP (){
    const getRandom = ()=> Math.floor(Math.random()*256)
    return (`${getRandom()}, ${getRandom()}, ${getRandom()}`)
}
console.log(randomiP())
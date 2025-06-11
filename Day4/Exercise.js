const edad = prompt("Ingrese su edad");

if (edad >= 18) {
  console.log("Tiene permiso para conducir");
} else {
  console.log(`No tiene permiso le falta ${18 - edad}años para conducir `);
}

let a = 2;
let b = 3;
let total = a > b ? console.log("a es mayor") : console.log("b es menor ");

const par = prompt("Ingrese un numerom ");
if (par % 2 == 0) {
  console.log("El numero es par");
} else {
  console.log("El numero  es impar");
}

const puntajeNumerico = prompt("Ingrese su nota");

if (puntajeNumerico >= 80) {
  // Si es 80-100
  calificacion = "A";
} else if (puntajeNumerico >= 70) {
  // Si es 70-79
  calificacion = "B";
} else if (puntajeNumerico >= 60) {
  // Si es 60-69
  calificacion = "C";
} else if (puntajeNumerico >= 50) {
  // Si es 50-59
  calificacion = "D";
} else {
  // Si no es ninguno de los anteriores, debe ser 0-49
  calificacion = "F";
}

const fechasActual = new Date();
const mes = paretInt(prompt("Ingrese el mes"))

let estacion;

switch (mes) {
  case 11:
  case 0:
  case 1:
    alert("Invierno");
    break;

  case 2:
  case 3:
  case 4:
    alert("Primavera");
    break;
  case 5:
  case 6:
  case 7:
    alert("Verano");
    break;
  case 8:
  case 9:
  case 10:
    alert("Otoño");
    break;
  default:
    estacion = "mes invalido";
}

console.log(
  `El mes actual (${mes }) corresponde a la estación de:`
);

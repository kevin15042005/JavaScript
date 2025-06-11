/*Valores Boleanos  todos los valores positivos y negsativas exeptuando cero
String sin espacios*/
/*Vallres negativos null, undifined ,0 , string con espacios */
/*Operadores aritmeticos  +,-,*,/,**  */
/*Operadores de comparacion  >, < =, >=, <= */
/*Operadores logicos && , || , !  ,  
 El operador && se vuelve verdadero sólo si los dos operandos son verdaderos. El operador || se vuelve verdadero cualquiera de los operandos es verdadero*/
/*++,--, ternario? si : no */
/*Fechas const = new Date () getFullYear  */

const firstName = "Kevin",
  lastName = "Reyes",
  country = "Colombia",
  city = "Bgota",
  age = 20;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age
);

const a = 10;
console.log(typeof 10 == 10);

const b = 9.8;
const verificacion = b == 10;
console.log("Se verifica " + verificacion);

const total = a > 10;
const total1 = a == 10;
const total2 = b < 1;
console.log("Valores " + total + " " + total1 + " " + total2);

const python = "python",
  jargon = "jargon";
const largo = python.length >= jargon.length;

const now = new Date();
console.log(
  now.getDay(),
  now.getMonth(),
  now.getDate(),
  now.getTime(),
  now.getHours(),
  now.getMinutes()
);
const tiempoanterior = new Date(1936, 11, 29);
const tiempoactual = new Date();
const tiempo = tiempoactual - tiempoanterior;
console.log("Tiempo pasado es " + tiempo);

//Exercise

const base = prompt("Ingrese la base");
const altura = prompt("Ingrese la altura");
const area = altura * base * 0.5;
alert("Total es " + area);

const PI = Math.PI;
const r = prompt("Escriba el radioi");
const circeferencia = r * r * PI;
console.log("La circuferencia es " + circeferencia);

const nombre = "Kevin";
if (nombre > 7) {
  console.log("Nombre largo");
} else {
  console.log("Nombre corto");
}

let firstName1 = "Asabeneh";
let lastName1 = "Yetayeh";
let longitud1 = firstName1.length;
let longitud2 = lastName1.length;
if (longitud1 > longitud2) {
  console.log(
    `Tu primer nombre ${firstName1} es mas largo que tu apellido ${lastName1}`
  );
} else {
  console.log(
    `Tu primer nomvre ${firstName1} es mas corto que tu apellido ${lastName1}`
  );
}

const añosvividos = prompt("Ingrese sun años para convertilos ");
const segundoVivido = añosvividos * 365 * 24 * 60 * 60;
console.log(`Su año son ${añosvividos} y en segundo son ${segundoVivido}`);


console.log(`El dia de hoy es ${nombre.getDay()} el mes es ${now.getMonth()} el año ${now.getFullYear()}la hora es ${now.getHours()} y completo es ${now.getFullYear()} `)
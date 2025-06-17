//Datos primitivos , int,float,string,boolean,null, undifined
//Datos no primitivos objetc ,function ,  matriz,
const PI = Math.PI
console.log(Math.round(PI)); //Redondea el numero
console.log(Math.sqrt(16)); //Raiz cuadrada
const randNUm = (Math.random() * 10);
console.log(randNUm); //Numero aleatorio entre 0 y 10

//t3 tabulacion o speeracion de este 
console.log("Dia1\tDia2\tDia3");

//Concatenar con inyeccion 

let a = 8;
let b = 6;
console.log(`La suma de ${a} + ${b} el total es ${a+b}`)

//Cadena 
let cadena = "Kevin";
let cadena2 = "JavaScript";
console.log(cadena.length);
console.log(cadena2.length)

//toUpperCase
console.log("Nombre en maysucula "+ cadena.toUpperCase())

//toLowerCase 
console.log("Descripcion en minuscula "+ cadena2.toLowerCase())

//Split separ una cadena
let cadena3 = "Kevin Reyes"
console.log(cadena.split( " "))

//Trim elimina el espacio incio y final
console.log("   Kevin Reyes   ".trim());

//Includes verifica si una cadena contiene otra cadena
console.log(cadena.includes("Reyes")); //true

//replace reemplaza una cadena por otra
console.log(cadena3.replace ("Alejandro Reyes"))

//Concat |Concatena dos cadenas
let cadena4 = "Hola";
let cadena5 = "Mundo";
console.log(cadena4.concat(" ", cadena5)); 

//search |Busca una cadena y es lo primero que encuentre
console.log(cadena4.search("Hola"))



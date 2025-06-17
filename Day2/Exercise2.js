console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
const a = 10;
console.log( a === 10 && typeof a == "number" ? "a is a number" : "a is not a number");

const b = 9.8
console.log(Math.round(b))

const string1 = "python";
const string2 = "jargon";
const tieneON = string1.search("on") && string2.search("on")
console.log(tieneON)

const busqueda = "Espero que este curso no esté lleno de jerga. "
console.log(busqueda.includes("jargon"))

const PI = Math.PI;
const randNum = (Math.random()* 100);
console.log(randNum)


const cadena = "JavaScript";
const indice = (Math.random(cadena.length));
console.log("Carcater aleatorio", cadena[indice]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");


const string  = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(string.search("porque") && string.substring(0, 20));
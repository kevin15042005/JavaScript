const fruits = ["banana", "orange", "mango", "lemon"]; // array de strings, Fruits
console.log("Array de frutas " + fruits.length);
const reusltadobsuqueda = fruits[0];
console.log(reusltadobsuqueda);
let lastIndex = fruits.length - 1;
lastfruit = fruits[lastIndex];
console.log(lastfruit);

const array = "JavaScriptSplit";
const arraysplit = array.split("");
console.log("Este es un array split " + arraysplit);

//Un aArray es mutable
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 0;
numbers[1] = 2;
console.log(numbers);

//Crear unArray vacio
const arr = Array(8);
console.log(arr);
//Fill llena los espacio vacios con datos estaticos
const arrrelleno = arr.fill("X");
//Concat concatena todos los array
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const concatenar = firstList.concat(secondList);
console.log(concatenar)
//Longitud length
const total = firstList.length
console.log(total);

//IndexOf  verifica si existe el array  si es 0 a psoitivo si existe 
const thirdtList = [1, 2, 3,4,5];
console.log(thirdtList.indexOf(1))

//Include verific si exite 
const fourList = [1,2,3,4,5,6,7]
console.log(fourList.includes(1))

//Arrais .is .Array 
const fiveList = [1,2,3]
const sixList = 100;
console.log(Array.isArray(fiveList))
console.log(Array.isArray(sixList))

//toString convierte un Array a string
const egithList = [1,2,3,4,5,6,7,8]
console.log(egithList.toString())

//Join unir los array 
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.join(","))   
//slice corta los elemensots dependiendo que  parametros requiera
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(2 , 4))
//Splice tomas los 3 oarametros inciales
const numbers1 = [1, 2, 3, 4, 5];
numbers.splice(0, 1);
console.log(numbers1); 

//push agregar a el incio del array 
const arr1 = ["item1", "item2", "item3"];
arr1.push("new item")
console.log(arr1)
//unshitf  agrega e el incio
arr1.unshift("item 0 ");
console.log(arr1)
//shif elimina a el incio 
arr1.shift()
console.log(arr1)
//pop elimina al final
arr1.pop()
console.log(arr1)
//reverse  invierte el array 
arr1.reverse()

//sort organiza de acedente a decendente 
  
webTechs.sort()
console.log(webTechs)


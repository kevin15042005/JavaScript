const arrVacio = [];
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux"];
const longitud = webTechs.length;
console.log(longitud);

const hallarprimero = webTechs[0];
const hallarmedio = webTechs[2];
const hallarultimo = webTechs.length - 1;
let hallarultimoindex = webTechs[hallarultimo];
console.log(
  `El primer nombre ${hallarprimero} el segudno aray es ${hallarmedio} y el utlimo ${hallarultimoindex}`
);

const mixedDataTypes = ["HTML", "CSS", 1, 2, 3];
const itCompanies = mixedDataTypes.unshift("Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.")
console.log(mixedDataTypes)

const separar = mixedDataTypes[0].split(", ");

if(separar.includes ("Facebook")){
    console.log("Si existe la empresa")
}else{
    console.log("No existe la empresa")
}

const mayuscula = separar.map(emp => emp.toUpperCase());
console.log(mayuscula)


const ordenado = mixedDataTypes.sort()
console.log("Ordenado"+ordenado)

const reversa = mixedDataTypes.reverse();
console.log(reversa)

const cortado = separar.slice(3)
console.log(cortado)

const cortadultimo = separar.slice(0 , separar.length -3 )
console.log(cortadultimo)
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
//1
for (let i = 0; i <= countries.length; i++) {
  console.log(countries[i]);
}
let i = 0;
while (i <= countries.length) {
  console.log(countries[i]);
  i++;
}

do {
  console.log(countries[i]);
  i++;
} while (i <= countries.length);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//2
for (let i2 = 0; i2 < webTechs.length; i2++) {
  console.log(webTechs[i2]);
}

let i2 = 0;
while (i2 < webTechs.length) {
  console.log(webTechs[i2]);
  i2++;
}

do {
  console.log(webTechs[i2]);
  i2++;
} while (i2 >= webTechs.length);

//3
const mernStack = ["MongoDB", "Express", "React", "Node"];
for (let i = 0; i <= mernStack.length; i++) {
  console.log(mernStack[i]);
}

//Excerise
let symbol = "";
for (let i = 0; i <= 5; i++) {
  symbol += "#";
  console.log(symbol);
}

for (let i = 0; i < 10; i++) {
  console.log(`Los numero a multiplciar son ${i} * ${i} = ${i * i}`);
}

for (let i = 0; i < 10; i++) {
  console.log(`Elevacion 2 ${i ** 1} ${i ** 2} ${i ** 3}`);
}


for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es par`);
  } else {
    console.log(`${i} es impar`);
  }
}

let suma1 = 0 
let suma2 = 0 
for (let i = 0 ; i<100; i++){
    if(i%2 == 0 ){
        suma1 += i
    }else{
        suma2 += i
    }
}
console.log(suma1)
console.log(suma2)

let i3  = 0
for(let i = 0 ; i < 100 ; i++){
 i3+= i
}
console.log(i)

let matriz = []
for(let i =0 ; i < 5;i++){
    const numero= (Math.random()*5)
    matriz.push(numero)
}
console.log(matriz)


let matriz1 =[];
for(let i = 0 ; i<5 ; i++){
    const numero1 = (Math.random()*5)
    matriz1.push(numero1)
}
console.log(matriz1)
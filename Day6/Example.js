//For 

for (let i = 0 ; i <= 5; i++){
    console.log(i)
}
for(let i = 0 ; i >= 5 ; i--){
    console.log(i)
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArra = [];
for (let i = 0 ; i < countries.length; i++){
newArra.push(countries[i].toUpperCase())
}


const countries1 = ["Brazil", "Canada", "Argentina", "Mexico", "Colombia"];
const Array = []
for (let i = 0 ; i< countries1.length; i++){
    Array.push(countries1[i].toUpperCase());
}
console.log(Array)

//While

let i = 0 
while (i<=5){
    console.log(i)
    i++
}

//Do While

let i2 = 0 ;
do{
console.log(i2)
i++
}while(i2 <= 5)



    
    //Break se utliza para terminar el bucle 


    for (let i = 0 ;i<=5 ; i++){
        if(i==3){
            break
        }
        console.log(i)
    }

    //Continue omitir ciertas interacciones

    for(let i = 0 ; i <=5 ; i++){
        if(i==3){
            continue
        }
        console.log(i)
    }
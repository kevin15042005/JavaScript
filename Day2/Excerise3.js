const amor ="El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.";
console.log(amor.match(/amor/g).length); // Cuenta cuántas veces aparece "amor"

const frase = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(frase.match(/porque/gi).length)
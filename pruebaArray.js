let ciudades = ['Madrid', 'Barcelona', 'Valencia'];
let resultante = [];

let tamano = 10;
let illamado = 0;

for (i = 0; i <= tamano; i++){

    illamado !== ciudades.length - 1 ? illamado = illamado + 1 : illamado = 0;
   
    resultante.push(ciudades[illamado]);

   
};

console.log(resultante);
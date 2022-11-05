//DEFINICION DE ARREGLOS
const arregloFrutas = ['manzana','mango','mandarina','limon'];
console.log(arregloFrutas);

//ACCEDER A VALORES DE POSIIONES DEL ARREGLO
console.log(arregloFrutas[0]);
console.log(arregloFrutas[3]);

//RECORRER ARREGLO CON CICLO FOR
for (let index = 0; index < arregloFrutas.length; index++) {
    const elemento = arregloFrutas[index];
    console.log(elemento);
}

//MODIFICAR ELEMENTOS DEL ARREGLO
arregloFrutas[1] = 'pera';
console.log(arregloFrutas);

//AGREGAR ELEMENTOS
arregloFrutas.push('banano');
console.log(arregloFrutas);

//ARREGLOS ASOCIATIVOS
const arregloAutos = {
    "color": "rojo",
    "marca": "renault",
    "modelo": 2005
}
console.log(arregloAutos);

console.log(arregloAutos['color']);
console.log(arregloAutos['modelo']);
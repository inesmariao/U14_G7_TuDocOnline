let numero = 20;

if (numero === 1) {
    console.log('Numero Uno');
} else if (numero === 2) {
    console.log('Numero Dos');
} else if (numero === 3) {
    console.log('Numero Tres');
} else if (numero === 4) {
    console.log('Numero Cuatro');
} else if (numero == 5) {
    console.log('Numero Cinco');
} else {
    console.log('Valor no encontrado');
}

let mes = 20;
let estacion = '';

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = 'Invierno';
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = 'Primavera';
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = 'Verano';
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = 'Otoño';
} else {
    estacion = 'No encontrada';
}
console.log(estacion);
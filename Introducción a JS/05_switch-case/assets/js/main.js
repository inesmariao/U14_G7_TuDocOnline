let numero = 10;
let numeroTexto = '';

switch (numero) {
    case 1:
        numeroTexto = 'Numero Uno';
        break;

    case 2:
        numeroTexto = 'Numero Dos';
        break;

    case 3:
        numeroTexto = 'Numero Tres';
        break;

    case 4:
        numeroTexto = 'Numero Cuatro';
        break;

    case 5:
        numeroTexto = 'Numero Cinco';
        break;

    case 6:
        numeroTexto = 'Numero Seis';
        break;

    default:
        numeroTexto = 'Valor no encontrado';
        break;
}
console.log(numeroTexto);

let mes = 9;
let estacion = '';

switch (mes) {
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;

    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;

    case 6: case 7: case 8:
        estacion = 'Verano';
        break;

    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;

    default:
        estacion = 'estacion no encontrada';
        break;
}
console.log(estacion);
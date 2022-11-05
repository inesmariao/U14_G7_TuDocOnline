//DEFINICION DE FUNCIONES
function suma1(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(resultado);
}

//LLAMADA A LA FUNCION
suma1(10,20);

//FUNCIONES CON RETORNO DE VALORES
function suma2(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
let resultadoSuma = suma2(200,200);
console.log(resultadoSuma);

//FUNCIONES TIPO FLECHA LINEA
const suma3 = (numero1,numero2) => numero1 + numero2;
resultadoSuma = suma3(500,500);
console.log(resultadoSuma);

//FUNCION TIPO FLECHA MULTILINEA
const suma4 = (numero1,numero2) => {
    let resultado = numero1 + numero2;
    return resultado;
}
resultadoSuma = suma4(2000,1000);
console.log(resultadoSuma);

const crearPersonas = (nombres,apellidos,email) => {
    return [nombres, apellidos];
}
const arregloPersonas = crearPersonas('jhon jairo','cortes paredes','jhon@live.com');
console.log(arregloPersonas);

const crearPersonas2 = (nombres,apellidos,email) => {
    return {
        nombrePersona: nombres,
        apellidoPersona: apellidos
    }
}
const objetoPersona = crearPersonas2('jhon jairo','cortes paredes','jhon@live.com');
console.log(objetoPersona);
console.log(objetoPersona.apellidoPersona);
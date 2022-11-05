let resultado = 0;
let numero1 = 20;
let numero2 = 10;
let numero3 = 50;
let numero4 = 100;
let numero5 = 150;

//OPERADORES ARITMETICOS
resultado = numero1 + numero2;
console.log('el resultado de la suma: ' + resultado);

resultado = numero1 - numero2;
console.log('el resultado de la resta: ' + resultado);

resultado = numero1 * numero2;
console.log('el resultado de la multiplicacion: ' + resultado);

resultado = numero1 / numero2;
console.log('el resultado de la division: ' + resultado);

resultado = numero1 % numero2;
console.log('el residuo de la division: ' + resultado);

resultado = numero1 ** numero2;
console.log('el resultado de la potencia: ' + resultado);

//OPERADORES DE INCREMENTO
resultado = numero1++;//numero1 = numero1 + 2
console.log('operador de POST-INCREMENTO: ' + resultado);

resultado = ++numero1;
console.log('operador de PRE-INCREMENTO: ' + resultado);

//OPERADORES DE DECREMENTO
resultado = numero2--;//numero2 = numero2 - 2
console.log('operador de POST-DECREMENTO: ' + resultado);

resultado = --numero2;//numero2 = numero2 - 2
console.log('operador de PRE-DECREMENTO: ' + resultado);

//OPERADORES DE ASIGNACION
numero3 += 3;//numero3 = numero3 + 3
console.log('asignacion de valor: ' + numero3);

numero3 -= 3;//numero3 = numero3 - 3
console.log('asignacion de valor: ' + numero3);

//OPERADORES DE COMPARACION

//IGUAL QUE
console.log('150' == numero5);//revisa el valor sin importar el tipo de datos
console.log(150 === numero5);//revisa el valor y el tipo datos

//OPERADOR DE DIFERENTE
console.log(numero4 != numero5);//revisa el valor sin importar el tipo de datos
console.log(numero4 !== numero5);//revisa el valor y el tipo datos

//MENOR QUE
console.log(numero4 < numero5);

//MAYOR QUE
console.log(numero4 > numero5);

//MAYOR IGUAL QUE
console.log(numero4 >= numero5);

//MENOR IGUAL QUE
console.log(numero4 <= numero5);

//OPERADORES LOGICOS
//AND &&
let valor = 15;
let valorMinino = 0;
let valorMaximo = 10;

if (valor >= valorMinino && valor <= valorMaximo) {
    console.log('dentro de los rangos de valores');
} else {
    console.log('fuera de los rangos de valores');
}

//OR ||

if (valor >= valorMinino || valor <= valorMaximo) {
    console.log('dentro de los rangos de valores');
} else {
    console.log('fuera de los rangos de valores');
}

//OPERADORES TERNARIOS
resultado = (10>5) ? 'verdadero' : 'falso';
console.log(resultado);

let valorNumero = 110;
resultado = (valorNumero % 2 == 0) ? 'Numero Par' : 'Numero Impar';
console.log(resultado);
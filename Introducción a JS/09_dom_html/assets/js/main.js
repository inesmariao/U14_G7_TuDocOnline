let titulo = document.getElementById('titulo');
console.log(titulo.innerHTML);

let parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1.innerHTML);

let arreglo = document.getElementsByClassName('texto');
console.log(arreglo);
console.log(arreglo[0].innerHTML);
console.log(arreglo[1].innerHTML);

let elementos = document.querySelectorAll('p.texto');
console.log(elementos);
console.log(elementos[0].innerHTML);
console.log(elementos[1].innerHTML);

const cambiarTexto = () => {
    document.getElementById('titulo').innerHTML = 'PROGRAMACION JS';
}
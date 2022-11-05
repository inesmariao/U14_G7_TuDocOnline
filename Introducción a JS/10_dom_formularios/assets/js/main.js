const guardarPersona = () => {
    const cajaNombres = document.getElementById('nombres').value;
    const cajaApellidos = document.getElementById('apellidos').value;
    const cajaCorreo = document.getElementById('correo').value;

    const mostrarTexto = cajaNombres + '<br/>' + cajaApellidos + '<br/>' + cajaCorreo;
    document.getElementById('valores').innerHTML = mostrarTexto;
}
const url = 'http://localhost:4000/api/roles';

//listar todos los roles  - GET
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//eliminar un rol - DELETE
const urlBorrar = `${url}/6352f96b9bd1ab9fd18c2676`
fetch(urlBorrar, {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(data => console.log(data))

//crear un rol - POST
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "SECRETARIA",
        estadoRol: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//editar un rol - PUT
const urlEditar = `${url}/63583ea8e7e9a22bbc5ed8af`
fetch(urlEditar, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "SECRETARIAS",
        estadoRol: 2
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
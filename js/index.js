var form = document.getElementById('form');
var url = 'https://jsonplaceholder.typicode.com/users';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;

    const info = {
        nombre,
        apellido,
        nacimiento
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(info)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta al servidor', data)
        })
})


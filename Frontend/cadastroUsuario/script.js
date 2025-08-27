
 function cadastroUsuario(event){
    event.preventDefault();

    let nome = event.target.nome.value;
    let idade = event.target.idade.value;
    let senha = event.target.senha.value;


    fetch('http://localhost:3000/usuarios', {

    method: 'POST',

    headers: {

        'Content-Type': 'application/json'

    },

    body: JSON.stringify(data)

})

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.log(error));
}


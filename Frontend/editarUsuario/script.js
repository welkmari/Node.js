const params = new URLSearchParams(window.location.search);
console.log(window.location.search);
console.log(params.get("id"));
const usuarioId = params.get("id");
let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let senha = document.getElementById("senha")

document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://localhost:3000/usuarios/${usuarioId}`)

        .then(response => response.json())

        .then(data => {
            console.log(data)
            nome.value = data.nome;
            idade.value = data.idade;
            senha.value = data.senha
        })
        .catch(error => console.log(error));
})

function atualizarUsuario(event) {
    event.preventDefault()
    fetch(`http://localhost:3000/usuarios/${usuarioId}`, {

        method: 'PUT',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            nome: nome.value,
            idade: idade.value

        })

    })

        .then(response => response.json())

        .then(data => {
            console.log(data)
            alert(Usuário ${usuarioId} foi atualizado)
            window.location.href = "../index.html";
        })


        .catch(error => console.log(error));
}
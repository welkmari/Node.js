fetch("http://localhost:3000/usuarios").then(res => {
    if (!res.ok) {
        throw new Error("Erro ao buscar usuários");
    }


    return res.json();
}).then(usuarios => {
    const listaUsuarios = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        console.log(usuario.nome);
        listaUsuarios.innerHTML +=
            `<li class="list-group-item">

        <div class="d-flex justify-content-between">
            <h5>nome: ${usuario.nome} -idade ${usuario.idade}</h5>
            <div>
                <a href ="editarUsuario/index.html?id=${usuario.id}" class="btn btn-primary">Atualizar</a>
                <button type="button" class="btn btn-danger" onclick="deletarUsuario(${usuario.id})">Deletar</button>
            </div>
        </div>    

        </li>
        `;
    });

})
    .catch(err => {
        console.error(err);
    });

    function deletarUsuario(userId) {
        let confirmar = confirm("Você deseja excluir esse usuário" + userId + "?");
        console.log(confirmar);
        if (confirmar) {
            fetch(`http://localhost:3000/usuarios/${userId}`, {
    
                method: 'DELETE',
    
            })
    
                .then(response => {
                    console.log(response);
                })
    
                .catch(error => console.log(error));
        }
    }
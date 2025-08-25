fetch("http://localhost:3000/usuarios").then( res=>{
    if(!res.ok){
        throw new Error("Erro ao buscar usuários");
    }
    

    return res.json();
}).then(usuarios =>{
    const listaUsuarios = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        console.log(usuario);
    });

})
.catch(err=>{
    console.error(err);
});
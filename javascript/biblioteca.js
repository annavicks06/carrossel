let titulo = document.getElementById("Titulo");
let autor = document.getElementById("Autor");
let ano = document.getElementById("Ano");
let genero = document.getElementById("Genero");


let btnCadastrar = document.getElementById("btnCadastrar");
let Estante = document.getElementById ("Estante");

let buscando = document.getElementById("busca");

let livros = [];
btnCadastrar.addEventListener("click",Cadastrar);
buscando.addEventListener("keyup", pesquisar);

function Cadastrar(){

    let livro = {
        titulo:titulo.value,
        autor:autor.value,
        ano:ano.value,
        genero:genero.value
    };

    livros.push(livro);
    MostrarLivros();
}

function MostrarLivros() {
    let saida = "";

    for (let i = 0; i < livros.length; i++) {
        saida += `
        <div class="livro">
            <h3> ${livros[i].titulo}</h3>
            <p> Autor: ${livros[i].autor}</p>
            <p> Ano: ${livros[i].ano}</p>
            <p> Genero: ${livros[i].genero}</p>
        </div>
        `;
    }

    estante.innerHTML = saida;
}

function pesquisar() {
    let termo = buscando.value.toLowerCase();
    let saida = "";
    for (let i = 0; i <livros.length; i++) {
        if(livros[i].titulo.toLowerCase().includes(termo)){
            saida += `
        <div class="livro">
            <h3>${livros[i].titulo}</h3>
            <p> Autor: ${livros[i].autor}</p>
            <p> Ano: ${livros[i].ano}</p>
            <p> Genero: ${livros[i].genero}</p>
        </div>
        `;

        }
    }
    estante.innerHTML = saida;
}
//Captura o botão "proximo"
let btnProxima = document.getElementById("proxima");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem");
//Cria o album e guarda as fotos
let album = [
    "https://i.pinimg.com/736x/3b/fd/8c/3bfd8c606ae8ce83e99ffb6782dc56c7.jpg",
    "https://i.pinimg.com/736x/d7/0e/53/d70e53f816b05eb8aa6b35751866f348.jpg",
    "https://i.pinimg.com/1200x/46/ea/66/46ea66882d1e6c0fa2c4dd1ee29d3afe.jpg",
    "https://i.pinimg.com/1200x/9a/f1/42/9af1428e4e4e423a8fc38d668943451d.jpg",
    "https://i.pinimg.com/736x/f0/0f/57/f00f57b0f7b6bad878f7b7f61d35d25d.jpg",
]  
 
//Quando o botão proximo for clicado executa a função mostrar proximo
btnProxima.addEventListener("click", mostrarProximo);
btnAnterior.addEventListener("click",mostrarAnterior)
 
//Define a posição inicial da foto do album
let foto = 0;
 
//Função responsável por mostrar a proxima foto
function mostrarProximo(){
    //Avança uma posição do álbum
    foto = foto + 1;
    if (foto >= album.length) {
        foto = 0;
    }
    Quadroimagem.src = album[foto];
}
 
btnAnterior.addEventListener("click", mostrarAnterior);
 
//Função responsável por mostrar a proxima foto
function mostrarAnterior(){
    //Avança uma posição do álbum
    foto = foto - 1;
        if (foto < 0) {
        foto = album.length - 1;
    }
    Quadroimagem.src = album[foto];
    return;
}
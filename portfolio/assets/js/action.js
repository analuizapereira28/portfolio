function enviarFormulario() {
    document.getElementById('resultado-contato').innerHTML = "Enviado com sucesso!";
    document.getElementById('resultado-contato').style.display = 'block'; 
}
document.getElementById('btnEnviar').addEventListener('click', enviarFormulario);

function aumentarImagem() {
    var imagem = document.querySelector('.foto-perfil img');
    imagem.style.transform = 'scale(1.3)';
    imagem.style.transition = 'transform 0.3s ease-in-out';
}

function reduzirImagem() {
    var imagem = document.querySelector('.foto-perfil img');
    imagem.style.transform = 'scale(1)';
}

document.querySelector('.foto-perfil img').addEventListener('mouseover', aumentarImagem);
document.querySelector('.foto-perfil img').addEventListener('mouseout', reduzirImagem);


var titulo = document.getElementById('titulo');


function aumentarTitulo() {
    titulo.style.transition = "transform 0.3s ease-in-out"; 
    titulo.style.transform = "scale(1.2)"; 
}

function voltarTitulo() {
    titulo.style.transform = "scale(1)";
}


titulo.addEventListener('mouseenter', aumentarTitulo); 
titulo.addEventListener('mouseleave', voltarTitulo);   



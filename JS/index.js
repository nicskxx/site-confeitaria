let indice = 0;
let imagens = [
    "IMG/bolo_morango.png",
    "IMG/bolo_chocolate.png",
    "IMG/bolo_red_velvet.png",
    "IMG/bolo_frutas_vermelhas.jpg",
    "IMG/bolo_maracuja.jpg",
    "IMG/bolo_abacaxi.jpg"

]

function trocarImagem() {
    let img = document.getElementById("img")
    img.src = imagens[indice]

}

setInterval(function() {
    trocarImagem()
    indice++
    if (indice >= imagens.length) {
        indice = 0
    }
}, 1500)


trocarImagem()
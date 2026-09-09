const imagemPrincipal = document.getElementById("img");

const imagens = [
    { src: "IMG/bolo_morango.png", alt: "Bolo de morango" },
    { src: "IMG/bolo_chocolate.png", alt: "Bolo de chocolate" },
    { src: "IMG/bolo_red_velvet.png", alt: "Bolo red velvet" },
    { src: "IMG/bolo_frutas_vermelhas.jpg", alt: "Bolo de frutas vermelhas" },
    { src: "IMG/bolo_maracuja.jpg", alt: "Bolo de maracujá" },
    { src: "IMG/bolo_abacaxi.jpg", alt: "Bolo de abacaxi" }
];

if (imagemPrincipal) {
    let indice = 0;

    setInterval(() => {
        indice = (indice + 1) % imagens.length;
        imagemPrincipal.src = imagens[indice].src;
        imagemPrincipal.alt = imagens[indice].alt;
    }, 1500);
}

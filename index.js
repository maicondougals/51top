function clickExpandir(){
    var area = document.querySelector('.section')
    var textoElement = document.getElementById('texto_oculto')

    if (textoElement.style.display === "none") {
        textoElement.style.display = "block";
    } else {
        textoElement.style.display = "none";
    }
}

function ampliarImagen(){
document.getElementById("caja2").addEventListener("click", function() {
    let imagen = document.getElementById("img");
    imagen.style.width = "1000";  // Agranda la imagen un 100%
    imagen.style.height = "1000";
});
}

function reducirImagen(){
document.getElementById("caja2").addEventListener("mouseleave", function() {
    let imagen = document.getElementById("img");
    imagen.style.width = "500px";  // Vuelve la imagen a su tamaño inicial
    imagen.style.height = "500px";
});
}

function agrandarLetra(){
    document.getElementById("letra").addEventListener("dblclick", function() {
        this.style.fontSize = "42px";  // Cambia el tamaño de la letra al hacer doble clic
    });   
}

function reducirLetra(){
document.getElementById("letra").addEventListener("mouseleave", function() {
    let parrafo = document.getElementById("letra");
    parrafo.style.fontSize = "16px";  // Vuelve al tamaño de letra original
});
}
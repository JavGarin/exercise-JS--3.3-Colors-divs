function cambiarColor(event) {
    // uso el event.target que hace referencia al elemento DOM en el que se hizo click.
    event.target.style.backgroundColor = 'black';
}
// usando los metodos DOM.
document.getElementById("div1").addEventListener("click", cambiarColor);
document.getElementById("div2").addEventListener("click", cambiarColor);
document.getElementById("div3").addEventListener("click", cambiarColor);
document.getElementById("div4").addEventListener("click", cambiarColor);
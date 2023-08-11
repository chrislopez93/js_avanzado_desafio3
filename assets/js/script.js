//CÓDIGO DEL DESAFÍO

// const ele = document.getElementById("ele1")

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     ele.addEventListener("click", pintar);

const ele = document.getElementById("ele1");
function pintar(color) {
  ele.style.backgroundColor = color;
  ele.style.transition = "800ms";
  ele.style.color = "white"
}
pintar("green"); //función invocada por defecto al cargar sitio web

function pintado() {
  ele.style.backgroundColor = "yellow";
  ele.style.color = "black"
}
ele.addEventListener("click", pintado);

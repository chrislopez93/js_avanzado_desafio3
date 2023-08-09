const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
function pintar(color){
    ele.style.backgroundColor = color;
    }

pintar('blue')
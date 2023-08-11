const divUno = document.getElementById("divUno");
const divDos = document.getElementById("divDos");
const divTres = document.getElementById("divTres");
const divCuatro = document.getElementById("divCuatro");

function colorUno(){
    divUno.style.backgroundColor = "black";
    divUno.style.transition = "800ms";
}
function colorDos(){
    divDos.style.backgroundColor = "black";
    divDos.style.transition = "800ms";
}
function colorTres(){
    divTres.style.backgroundColor = "black";
    divTres.style.transition = "800ms";
}
function colorCuatro(){
    divCuatro.style.backgroundColor = "black";
    divCuatro.style.transition = "800ms";
}

divUno.addEventListener("click", colorUno);
divDos.addEventListener("click", colorDos);
divTres.addEventListener("click", colorTres);
divCuatro.addEventListener("click", colorCuatro);

const divUno = document.getElementById("divUno");
const divDos = document.getElementById("divDos");
const divTres = document.getElementById("divTres");
const divCuatro = document.getElementById("divCuatro");

function colorUno(){
    divUno.style.backgroundColor = "black";
}
function colorDos(){
    divDos.style.backgroundColor = "black";
}
function colorTres(){
    divTres.style.backgroundColor = "black";
}
function colorCuatro(){
    divCuatro.style.backgroundColor = "black";
}

divUno.addEventListener("click", colorUno);
divDos.addEventListener("click", colorDos);
divTres.addEventListener("click", colorTres);
divCuatro.addEventListener("click", colorCuatro);

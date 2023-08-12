const divKey = document.getElementById('divCambioColor');
const nuevoDiv = document.getElementById('divNuevo');

document.addEventListener('keydown', function(cambiarColor){
    if(cambiarColor.key === 'a'){
        divKey.style.backgroundColor = "pink";
    }else if (cambiarColor.key === 's') {
        divKey.style.backgroundColor = "orange";
    }else if(cambiarColor.key === 'd'){
        divKey.style.backgroundColor = "lightblue";
    }
})

document.addEventListener('keydown', function(crearDiv){
    if(crearDiv.key === 'q'){
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.margin = "50px";
        nuevoDiv.style.backgroundColor = "purple"
        nuevoDiv.style.border = "solid 1px black"
    } 
     else if
        (crearDiv.key === 'w'){
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.margin = "50px";
        nuevoDiv.style.backgroundColor = "grey"
        nuevoDiv.style.border = "solid 1px black"
    }
     else if(crearDiv.key === 'e'){
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.margin = "50px";
        nuevoDiv.style.backgroundColor = "brown"
        nuevoDiv.style.border = "solid 1px black"
    }
}
)
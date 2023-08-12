// const divKey = document.getElementById('divUno');
// divKey.addEventListener('keydown', cambiarColor);

// function cambiarColor(){
//     if(event.keydown === 'a'){
//         divKey.style.backgroundColor = "pink";
//     }

// }

const divKey = document.getElementById('divUno');

document.addEventListener('keydown', function(cambiarColor){
    if(cambiarColor.key === 'a'){
        divKey.style.backgroundColor = "pink";
    }else if (cambiarColor.key === 's') {
        divKey.style.backgroundColor = "orange";
    }else if(cambiarColor.key === 'd'){
        divKey.style.backgroundColor = "lightblue";
    }
})
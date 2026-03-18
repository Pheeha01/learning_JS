let mandela = document.querySelectorAll("#pics > .mandela");

let favourites = document.querySelector("#favourites");


for(i =0; i < mandela.length; i++){
    mandela[i].addEventListener('click', function(){
        favourites.appendChild(mandela[i])
    })
}
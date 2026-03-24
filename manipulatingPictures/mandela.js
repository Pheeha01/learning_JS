let mandela = document.querySelectorAll("#pics > .mandela");
let picDiv= document.querySelector("#pics")
let favourites = document.querySelector("fieldset");
favourites.style.display = "flex"
favourites.style.gap= "5px"

mandela.forEach(picture => {
    picture.addEventListener('click', function(){
        if (!favourites.contains(picture)){
            favourites.appendChild(picture)
            picture.style.width = "120px";
            picture.style.height = "120px"
            picture.style.borderRadius = "20px"
        }
        else{
            picDiv.appendChild(picture)
        }
    })  
})

let numDice = document.getElementById("numOfDice")
let rollBtn = document.getElementById("rollDice")
let results = document.getElementById("Values")
let div = document.getElementById("diceFaces")


rollBtn.addEventListener('click', function(){
    div.innerHTML = "";
    results.textContent = "You rolled: ";
    div.style.display="flex"

    for(i=0; i<numDice.value;i++){
        let dieIndex= Math.floor(Math.random()*6)+1
        let img = document.createElement("img");
        img.src = `./diceFaces/dice${dieIndex}.png`;
        img.classList.add("face"); 
        img.classList.add("active");
        div.appendChild(img);
        results.textContent += `${dieIndex}, `;
    }   
})
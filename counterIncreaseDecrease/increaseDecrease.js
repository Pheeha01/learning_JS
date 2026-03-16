let numb=0;
 document.getElementById(`Increase`).onclick=function(){
    numb++
    document.getElementById(`Number`).textContent=numb
 }
document.getElementById(`Reset`).onclick=function(){
    document.getElementById(`Number`).textContent=0
    numb=0
 }
 document.getElementById(`Decrease`).onclick=function(){
    numb--;
    document.getElementById(`Number`).textContent=numb
 }
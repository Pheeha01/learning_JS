 document.getElementById("Title").textContent= `Guess a number between 0 and 10`
 document.getElementById("num").textContent = ``;

 document.getElementById("Submit").onclick=function(){
    let randomNum= Math.ceil(Math.random()*10);
   let usernum= document.getElementById("guess").value;

   if(randomNum > usernum){
      document.getElementById("num").textContent=`the random number is ${randomNum}, your guess is low`
   }
   else if(randomNum == usernum){
      document.getElementById("num").textContent=`Your number is the correct guess`
   }
   else{
      document.getElementById("num").textContent=`the random number is ${randomNum}, your guess is high`
   }
 }
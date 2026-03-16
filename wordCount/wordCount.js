let counter = document.getElementById("counter")
counter.addEventListener(`click`, function(){
   let sente = document.getElementById("userSentence").value.trim();
   let count = 1;
   for(let i=0; i < sente.length;i++){
      if (sente.charAt(i)== " " && sente.charAt(i+1)!==" " && sente.length>0){
         count++
      }
      else{
         continue;
      }
   }
   if (sente[sente.length-1]===" " || sente.length ===0){
      count--
      }
   if (count>=1) {
      document.getElementById("wordCount").textContent= `The word count is: ${count}`;
   }
   else{
      document.getElementById("wordCount").textContent= `There are no words`;
   }
})
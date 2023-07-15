let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);
let crctAns = n1*n2;

let qsn = document.querySelector("#question");
let form = document.querySelector("#form");
let btn = document.querySelector("#btn");
let scoreVal = document.querySelector("#score");

qsn.innerText = `What is ${n1} multiplied by ${n2} ?`;

let score = Number(localStorage.getItem("puni"));

if(!score){
   score = 0;
}

scoreVal.innerText = `Score: ${score}`;



form.addEventListener("submit", () =>
 {
   let userAns = Number(document.querySelector("#ans").value);
   if(userAns == crctAns){
      score++;
      updateScore();
   }
   else{
      score--;
      updateScore();
   }
 }
)

function updateScore(){
    localStorage.setItem("puni", String(score));
}

let userScore=0;
let compScore=0;
let compscoore=document.querySelector("#comp-score");
let userscoore=document.querySelector("#user-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
   const random= Math.floor(Math.random()*3);
   return options[random];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win!,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userscoore.innerText=userScore;
    }else{
        msg.innerText=`You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compscoore.innerText=compScore;
    }
}

const drawGame=()=>{
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="black";
}

const playGame=(userChoice)=>{
    const compChoice =genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
          userWin =  compChoice === "paper"? false : true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false:true;
        }
        else{
            userWin==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

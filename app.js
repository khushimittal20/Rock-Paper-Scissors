let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".game");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
};

const drawGame = () =>{
    msg.innerText="Its a Draw";
    msg.style.backgroundColor ="grey";
};
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WON :) ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#7DDF64";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOST :( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="#D61F3D";
    }
};

// const playGame=(userChoice)=>{
//     const compChoice=generateCompChoice();
//     if(userChoice === compChoice){
//         drawGame();
//     }else{
//         let userWin=true;
//         if(userChoice==="rock"){
//             userWin = compChoice ==="paper"?false:true;
//         }else if(userChoice==="paper"){
//             userWin=compChoice==="scissors"?false:true;
//         }else{
//             userWin=compChoice==="rock"?false:true;
//         }
//         showWinner(userWin,userChoice,compChoice);
//     }
// };
const playGame = (userChoice) => { 
    document.querySelector("h1").style.backgroundColor = "#9E768F";
    const compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        drawGame();
        document.querySelector("h1").style.backgroundColor = "#9E768F";
    } else {
        let userWin = true;
        switch (userChoice) {
            case "rock":
                userWin = compChoice !== "paper"; 
                break;
            case "paper":
                userWin = compChoice !== "scissors"; 
                break;
            case "scissors":
                userWin = compChoice !== "rock"; 
                break;
            default:
                userWin = false; 
        }
        if (userWin) {
            document.querySelector("h1").style.backgroundColor = "#7DDF64"; 
        } else {
            document.querySelector("h1").style.backgroundColor = "#D61F3D"; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((game) =>{
    game.addEventListener("click",()=>{
        const userChoice = game.getAttribute("id");
        playGame(userChoice);
});
});

document.querySelector("#reset-btn").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Lesgo play!";
    msg.style.backgroundColor = "";
    document.querySelector("h1").style.backgroundColor = "#9E768F";
});

//build a game that plays rock papers scissors

function getComputerChoice() {
    let num = getRandomVal(3, 1)
    return num
}

function generateCompRPS() {
    let choice = getComputerChoice()
    switch (choice) {
        case 1:
            return "rock"
          
        case 2:
            return "scissors"
         
        case 3:
            return "paper" 
    }
}


function getRandomVal(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function game(compchoice, playerchoice) {
    let play = (compchoice + playerchoice)

    switch (play) {
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            return "you win! The computer chose " + compchoice + " and your choice of " + playerchoice + " beats " + compchoice 
            
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return "The computer also chose " + compchoice + ". Its a draw! refresh to play again."
            
        default:
            return "you lost! The computer chose " + compchoice + " which beats your choice of  " + playerchoice
    }

}

//console.log(game(generateCompRPS(), getUserChoice()))

const buttonrock = document.getElementById("rock");
buttonrock.addEventListener("click", () =>{
    myFunction("rock")

})

const buttonpaper = document.getElementById("paper");
buttonpaper.addEventListener("click", () =>{
    myFunction("paper")

})

const buttonscissors = document.getElementById("scissors");
buttonscissors.addEventListener("click", () =>{
    myFunction("scissors");

})


function myFunction(tool){
const bottombit = document.getElementById("bottomtext");
bottombit.innerText = game(generateCompRPS(),tool);



document.getElementById("demo").innerHTML = Date();
}


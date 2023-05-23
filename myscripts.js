//build a game that plays rock papers scissors

function getComputerChoice(){
  let num = getRandomVal(3,1)
  return num
}

function generateCompRPS(){
    let choice = getComputerChoice()
    switch (choice){
        case 1:
            return "rock"
            break;
        case 2:
            return "scissors"
            break;
        case 3:
            return "paper"
            break;
    }
}

function getUserChoice(){
    let choice = prompt("What is your response to ROCK-PAPER-SCISSORS-SHOOT?")
    switch(choice.toLowerCase()){
        case "rock":
        return "rock"
        break;
        
        case "paper":
        return "paper"
        break;

        case "scissors":
        return "scissors"
        break;
        default:
            console.log("that was invalid, try again")
            getUserChoice();
}
}

function getRandomVal(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function game(compchoice, playerchoice){
    let play = (compchoice+playerchoice)
    
    switch(play){
        case "rockpaper":
            case "scissorsrock":
                case "paperscissors":
                console.log("you win! The computer chose " + compchoice + " and your choice of " + playerchoice + " beats " + compchoice)
            break;
        case "rockrock":
            case "paperpaper":
                case "scissorsscissors":
                console.log("The computer also chose " + compchoice + ". Its a draw! refresh to play again.")
                break;
        default:
        console.log("you lost! The computer chose " + compchoice + " which beats your choice of  " + playerchoice)
    } 

}

  console.log(game(generateCompRPS(),getUserChoice()))
//build a game that plays rock papers scissors

function getComputerChoice(){
  let num = getRandomVal(3,1)
  return num
}

function getRandomVal(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

  console.log(getComputerChoice())
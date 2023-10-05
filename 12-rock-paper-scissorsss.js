let score = {
  wins :0,
  losses :0,
  ties :0
}



function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins},
  losses: ${score.losses},
    Ties: ${score.ties}`;      
}

function PickcomputerMove(){

      const RandNum = Math.random()

      if (RandNum <= 0.33){
          OpponentMove = 'rock'
          // console.log(OpponentMove)
        }else if(RandNum > 0.33 && RandNum <= 0.66 ){
          OpponentMove = 'paper'
          // console.log(OpponentMove)

        }else {
          OpponentMove = 'scissors'
          // console.log(OpponentMove)
        }
        //Return function
        return OpponentMove;
}

function playGame(myMove,OpponentMove){
  let result = '';

if(myMove === 'scissors'){
  if( OpponentMove === 'scissors'){
  result = 'Tie';
  score.ties += 1;
  }else if(OpponentMove === 'rock'){
    result = 'You Lose'
    score.losses += 1;
    }else{
      result = 'You Win'
      score.wins += 1;

    }
  
}

else if(myMove === 'rock'){
  if( OpponentMove === 'rock'){
  result = 'Tie';
  score.ties += 1;
  }else if(OpponentMove === 'paper'){
    result = 'You Lose'
    score.losses += 1;
  }else{
    result = 'You Win'
    score.wins += 1;
  }
}

else if(myMove === 'paper'){
  if( OpponentMove === 'scissors'){
  result = 'Tie';
    score.ties += 1;
  }else if(OpponentMove === 'rock'){
    result = 'You Lose'
    score.losses += 1;
  }else{
    result = 'You Win'
    score.wins += 1;
  }

}

updateScore();     

document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You <img class="auto" src="RPS/${myMove}.png">
<img class="auto" src="RPS/${OpponentMove}.png"> Computer`;
}

//console.log(score)



let intervalID = 0; 

let changer = 0;
let isautoplaying = false;

//const autoplay = () => {

//}

function autoplay(){
  if (!window.isautoplaying){
    window.intervalID = setInterval(() => {
      const OpponentMove = PickcomputerMove();
      const playermove = PickcomputerMove();
      playGame(playermove,OpponentMove);
      window.isautoplaying = true;
    }, 1000);
  }else{
    clearInterval(window.intervalID);
    window.isautoplaying = false;
  }
}

GetScores();

function GetScores() {

    //get tennis scores for point between 0 - 3
    //get scroes for deuce, adv - 

    let score1 = 5;
    let score2 = 3;
    let player1 = "";
    let player2 = "";

    console.log(score1 + " " + score2);

    //Gets score below forty for players
    if (score1 < 4 && score2 < 4  && score1!=score2) { 
        player1 = GetPlayerScore(score1);
        player2 = GetPlayerScore(score2);

        return console.log(player1 + " " + player2);
    }

    //get all score combination
    if(score1<3 && score1===score2 ){
        player1 = GetPlayerScore(score1);

        return console.log(player1 + " all");
    }
    else
        {   
                //handle Game, Deuce and Ad scoring
                //5 - 4 Ad - , 5-5 deuce, 6-5 Ad, 6-6 deuce, 6-7 Ad,                
                 //in a deuce game 
                if(IsGame(score1,score2)) {
                    return console.log("Game");
                }

                if(IsDeuce(score1,score2)){
                    return console.log("deuce");
                }
                else if (IsAd(score1,score2)){
                    
                    return console.log("Ad - ");
                  }       
             }
        }
    


function IsGame(score1, score2){
    
  let diff =  (score1>score2)?score1-score2:score2-score1;
  if(diff===2){
      return true;
  }
      
  if((score1===4 && score2<3) || (score2===4 && score1<3)){
      return true;
  }

  return false;

}

function IsDeuce(score1,score2){
    if(score1>2 && score2>2 && score1===score2){
        return true;
    }

    return false;
}

function IsAd(score1,score2){
    let diff =  (score1>score2)?score1-score2:score2-score1;
    if(diff===1){
      return true;
  }

  return false;
}

function GetPlayerScore(score){
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
          return  "Thirty";
        case 3:
            return "Forty";
        default:
            return "";
}

}




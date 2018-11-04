function GetScores() {

    //get tennis scores for point between 0 - 3
    //get scroes for deuce, adv - 

    let score1 = 3;
    let score2 = 3;
    let player1 = "";
    let player2 = "";

    if (score1 < 4 && score2 < 4) {

        switch (score1) {
            case 0:
                player1 = "Love";
                break;
            case 1:
                player1 = "Fifteen";
                break;

            case 2:
                player1 = "Thirty";
                break;

            case 3:
                player1 = "Forty";
                break;

            default:
                player1 = "";
                break;
        }

        if(score1<4 && score2<4){
            switch (score2) {
                case 0:
                    player2 = "Love";
                    break;
                case 1:
                    player2 = "Fifteen";
                     break;
                case 2:
                    player2 = "Thirty";
                    break;
                case 3:
                    player2 = "Forty";
                    break;
                default:
                    player2 = "";
                    break;
            }
        }
        
    }
    console.log( score1 + " " + score2);

    if(score1===score2 && score1<3){
        return console.log(player1 + " All");
    }
    else
        {
            if(score1<=3 && score2<=3 && score1!=score2){
               console.log(player1 + " " + player2);
             }
             else{
                //5 - 4 Ad - , 5-5 deuce, 6-5 Ad, 6-6 deuce, 6-7 Ad,
                 
                if(IsGame(score1,score2)>1){
                    return console.log("Game");
                }

                let total =  score1 + score2;
                let isDeuce = total % 2;
                
                console.log(score1 +  score2);
 
 
                 if(isDeuce==0){
                     return  console.log("deuce ");
 
                 }
                 else{
                   return  console.log("Ad - ");
                 }
 
             }
        }

}

function IsGame(score1, score2){
    return (score1>score2)?score1-score2:score2-score1;
}

GetScores();




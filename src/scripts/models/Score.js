//Get scores for below deuce 
//Get scores for deuce and above
//Get love all scores
export class Score { 
    constructor(score1,score2) {
       this.score1 = score1;
       this.score2 = score2;
       this.player1 = this.GetPlayerScore(this.score1);
       this.player2 = this.GetPlayerScore(this.score2);

       console.log("Score 1: " + this.score1 + " Score 2: " + this.score2);
    
    }
    GetScores(){
       
        if (this.score1 < 4 && this.score2 < 4 && this.score1!=this.score2) {           

            return console.log(this.player1 + " " + this.player2);
        }
    
        if(this.score1<3 && this.score1===this.score2){
            return console.log(this.player1 + " all");
        }
        else
            {             
                    //5 - 4 Ad - , 5-5 deuce, 6-5 Ad, 6-6 deuce, 6-7 Ad,                    
                     //in a deuce game 
                    if(this.IsGame()) {
                        return console.log("Game");
                    }    
                    else if(this.IsDeuce()){
                        return console.log("Deuce");
                    }
                    else if (this.IsAd()){
                        
                        return console.log("Ad - ");
                    }     
            }
        }
    IsGame(){
        let diff =  (this.score1>this.score2)?this.score1-this.score2:this.score2-this.score1;
        if(diff===2){
            return true;
        }
            
        if((this.score1===4 && this.score2<3) || (this.score2===4 && this.score1<3)){
            return true;
        }

        return false;
    } 
    IsDeuce(){
        if(this.score1>2 && this.score2>2 && this.score1===this.score2){
            return true;
        }
    
        return false;
    }  
    IsAd(){
        let diff =  (this.score1>this.score2)?this.score1-this.score2:this.score2-this.score1;
        if(diff===1){
          return true;
      }

      return false;
    } 
    GetPlayerScore(score){
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
}
    
   
   
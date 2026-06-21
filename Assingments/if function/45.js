function findwinnerteam(team1,team2,team3,team4){
    let score1=team1;
    let score2=team2;
    let score3=team3;
    let score4=team4;

    if (score1>score2){
        if (score1>score3){
            if (score1>score4){
                console.log("Team 1 is the winner");
            }
            else{
                console.log("Team 4 is the winner");
            }
        }
        else{
            console.log("Team 3 is the winner");
        }
    }
    else{
        console.log("Team 2 is the winner");
    }
}
findwinnerteam(10,20,30,40);


function findwinnerteam(team1,team2,team3,team4){
    let score1=team1;
    let score2=team2;
    let score3=team3;
    let score4=team4;

    if (score1>score2 & score1>score3 & score1>score4){
        console.log("Team 4 is the winner");
    }
    if (score2>score1 & score2>score3 & score2>score4){
        console.log("Team 2 is the winner");
    }
    if (score3>score1 & score3>score2 & score3>score4){
        console.log("Team 3 is the winner ");
    }
    if (score4>score1 & score4>score2 & score4>score3){
        console.log("Team 4 is the winner");
    }
}
findwinnerteam(1000,200,300,40);
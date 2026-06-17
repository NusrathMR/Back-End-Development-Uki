function swapscores(score1,score2){

    let temp = score1;
    score1 = score2;
    score2 = temp;

    console.log("The First Team's score is: "+score1);
    console.log("The First Team's score is: "+score2);

}

swapscores(50,100);
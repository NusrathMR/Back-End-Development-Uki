function companymaintanance(Day){
    let day=Day;
    if((day%5)==0){       
        if((day%3)==0){
            console.log("It's can be divided by 5 and 3");
        }
        else{
            console.log("It's can be divided by only 5");
        }
    } 
    else{
        console.log("It can't divided by 5 and 3");
    }
}
companymaintanance(10);
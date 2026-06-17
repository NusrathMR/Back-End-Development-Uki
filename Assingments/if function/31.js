function findleapyear(year){
    let Year=year;
    if (Year%4==0){
        if (Year%100==0){
            if (Year%400==0){
                console.log("It is a super leap year");
            }
            else{
                console.log("This is not leap year because (100) years rule");
            } 
        }
        else{
            console.log("This is the leap year");
        }
    }
    else{
        console.log("This is not leap year");
    }
}
findleapyear(2900);
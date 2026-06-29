function tickets(Age){
    let age=Age;
    if (age<=10){
        console.log("You don't need tickets")
    }
    else if(age<=18){
        console.log ("Your ticket price is 500/=")
    }
    else if(age<=40){
        console.log ("Your ticket price is 750/=")
    }
    else if(age<=80){
        console.log("Your ticket price is 400/= (You are senior citizen so you have special discount)")
    }
    else{
        if (age>=80){
            console.log("We think you should died. Becuase your age is more than 80's ")
        }
    }
}
tickets(8);
// If employ works on more than 10 years. company gives 10000/= bonus.
// If employ works on more than 15 years. company gives 15000/= bonus.

function bonuscalcalculator(Years){
    let years=Years;
    if (years<10){
        console.log("You are not eligible to get Bonus")
    }
    else if (years<=15){
        console.log("You have a bonus amount 10000/=. Enjoy!")
    }
    else if (years<=20){
        console.log("You have a bonus amount 15000/=. Enjoy!")
    }
    else{
        if (years>20){
            console.log("Your working pediod is closed. Please go to your home. Bye!")
        }
    }

}
bonuscalcalculator(21);
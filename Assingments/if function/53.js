function drivinglicences(Age){
    let age=Age;
    if (age<=18){
        console.log("First go to the school. After we think about your licences ")
    }
    else if (age<=80){
        console.log("You are aligible. We will provide licences soon...")
    }
    else{
        if (age>80){
            console.log("Sorry! we can't give licences to you. because Vayasu poittu kumaru")
        }
    }
}
drivinglicences(85);
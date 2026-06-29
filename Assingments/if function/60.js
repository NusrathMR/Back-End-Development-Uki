function findpre(Amount){
    let amount=Amount;

    if (amount<=10000){
        console.log("Nomal customer")
    }
    else if (amount<=50000){
        console.log("Daily customer")
    }
    else{
        if (amount>=50000){
            console.log("Pre customer")
        }
    }
}
findpre(500)
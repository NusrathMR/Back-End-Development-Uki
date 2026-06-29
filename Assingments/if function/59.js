function incometex(Income){
    let income=Income;
    let tex=0;
    if (income<=150000){
        console.log("You don't have any texes");
    }
    else{
        if (income>=150000){
            console.log("You have to pay income texes");

            tex=(income/100)*25;
            console.log(tex);
            
        }
    }
}
incometex(100000000);
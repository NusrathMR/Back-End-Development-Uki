function agecategory(Age){
    let age=Age;
    if (age<13){
        console.log("Child")
    }
    else{
        if(age<19){
            console.log("Teen")
        }
        else{
            console.log("Adults")
        }
    }

}
agecategory(21);
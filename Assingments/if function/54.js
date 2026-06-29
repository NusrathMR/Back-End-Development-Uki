function admission(Marks,Age){
    let marks=Marks;
    let age=Age;

    if (marks>=75 && age>=18){
       if (age<=24){
            console.log("You are selected")
       }
       else{
        console.log ("You are not selected")
       }
    }
}
admission(55,22);
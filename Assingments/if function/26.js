function passorfail(Marks){
    let marks=Marks;

    if(marks<=100)
        if (marks>=50){
            console.log("Pass");
        }

        else{
            console.log("Fail");
        }
    else{
        console.log("Your ender marks value is undefinded")
    }   
}

passorfail(150);
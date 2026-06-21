function assignMarks(Marks){
    let mark=Marks;
    if (mark>=75){
        console.log("A");
    }

        else if (mark>=65){
            console.log("B");
        }
        else if (mark>=50){
            console.log("C");
        }
        else if (mark>=35){
            console.log("D");
        }

    else{
        console.log("F");
    }
}
assignMarks(34);
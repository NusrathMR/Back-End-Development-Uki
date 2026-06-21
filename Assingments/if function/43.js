function findtriangle(Side1,Side2,Side3){
    let side1=Side1;
    let side2=Side2;
    let side3=Side3;

    if(side1==side2 && side2==side3){
        console.log("equilateral");
    }

    else if(side1==side2 || side1==side3 || side2==side3){
        console.log("isosceles")
    }

    else{
        console.log("scalene.")
    }


}
findtriangle(10,10,10);
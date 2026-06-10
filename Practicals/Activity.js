function main(){
    findPositiveOrNegative(5);
    oddeven(15);
    FindNegetiveandPositiveNum(20);
    CtoF(30);
    findmarks(66);
}

function findPositiveOrNegative(num){
    let number=num;
    if(number>0)
        console.log("The given Number "+number+" It is a positive number");

    else
        console.log("The given Number"+number+"It is a Negative number");
    }

function oddeven(num){
    let number=num;
    if (number%2==0)
        console.log("It is even number");
    else
        console.log("It is odd number");
    }

function FindNegetiveandPositiveNum(num){
    let number=num;
    if (number<=0)
        console.log("It is a Negative number");
    else
        console.log("It is a Positive number");
    }

function CtoF(temp){
    let heat=temp;
    let f;
    f=9*heat/5+32;
    console.log("heat is "+f);
}

function findmarks(marks){
    let m=marks;
    console.log("Your given marks is "+marks);
    if (marks>=0 && marks<=100)
        if(marks>=80)
            console.log("Your Grade is A")
        else if(marks>=70)
            console.log("Your Grade is B")
        else if(marks>=60)
            console.log("Your Grade is C")
        else
            console.log("Your Grade is F")
    else 
       console.log("Invalid input. Try again"); 
}
main();
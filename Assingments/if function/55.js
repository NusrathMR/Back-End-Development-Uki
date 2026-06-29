// 100-85 = A+
// 84-70 = A
// 69-65 = B+
// 64-60 = B
// 59-40 = C
// Below 40 = Fail 

function Gradefinder(Marks){
    let marks=Marks;

    if (marks<=39){
        console.log("Fail")
    }
    else if (marks<=59){
        console.log("C")
    }
    else if (marks<=64){
        console.log("B")
    }
    else if (marks<=69){
        console.log("B+")
    }
    else if (marks<=84){
        console.log("A")
    }
    else{
        if (marks<=100){
            console.log("A+")
        }
    }
}
Gradefinder(95);
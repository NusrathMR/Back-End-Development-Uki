// 21. Print 
// * 
// ** 
// *** 
// **** 
// ***** 

function printstar(){
    for (let row=1; row<=5; row++){
        let stars="";

        for (let col=1; col<=row; col++){
            stars+="*";
        }
        console.log(stars);
    }
}
printstar();
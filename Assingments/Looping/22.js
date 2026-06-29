// 22. Print 
// ***** 
// **** 
// *** 
// ** 
// *

function printstar(){
    for (let row=5; row>=1; row--){
        let stars="";

        for (let col=5; col>=row; col--){
            stars+="*";
        }
        console.log(stars)
    }
}
printstar();
function main(){
    let num=[1,2,3,4,5,6,7,8];
    findspecificvalue(num);
    

}
main();

function findspecificvalue(num){
    let specific=5;
    for (let i=0; i<num.length; i++){
        if (num[i]==specific){
            console.log("this array have this specific number")
            break;
        }
        else {
            console.log("This array do not have specific number")
        }
    }
}
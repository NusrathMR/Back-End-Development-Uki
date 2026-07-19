function main(){
    let num=[1,2,3,4,5,6,7,8,9,10];
    firstinx(num);
    lastinx(num);
    console.log(firstinx(num));
    console.log(lastinx(num));
}
main();

function firstinx(num){
    let firstnum=num[0];
    return firstnum;
}

function lastinx(num){
    let final=0;
    for (let i=0; i<num.length; i++){
        final=num[i]
    }
    return final;
    
}
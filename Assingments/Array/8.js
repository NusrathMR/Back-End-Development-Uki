function main(){
    let num=[1,2,3,4];
    addnum(num)
    
}
main()

function addnum(num){
    num.shift();
    console.log(num);
}
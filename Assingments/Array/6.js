function main(){
    let num=[1,2,3,4];
    addnum(num)
    
}
main()

function addnum(num){
    num.unshift(5);
    console.log(num);
}
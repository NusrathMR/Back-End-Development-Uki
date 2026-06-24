// 20. Print all numbers between 1 and 100 except multiples of 7.

function printnumbersdivby7(){
    for(let n=1; n<=100; n++){
        if (n%7==0){
            console.log(n);
        }
    }
}
printnumbersdivby7();
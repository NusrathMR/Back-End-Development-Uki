// 16. Print numbers from 1 to 100 that are divisible by 3.

function print1to100(){
    for (let n=1; n<=100; n++){
        if (n%3==0){
            console.log(n);
        }
    }
}
print1to100();
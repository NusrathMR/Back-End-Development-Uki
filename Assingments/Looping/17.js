// 17. Print numbers from 1 to 100 that are divisible by 5 but not by 10. 

function print1to100(){
    for (let n=1; n<=100; n++){
        if (n%5==0 && n%10!=0){
            console.log(n);
        }
    }
}
print1to100();
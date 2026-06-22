// 10. Count how many numbers between 1 and 100 are divisible by 4.

function CountNumbersDivBy4(){
    let count=0;
    for(let num=0; num<=100; num++){
        if(num%4==0){
            count++
        }
    }
    console.log(count)
}
CountNumbersDivBy4();

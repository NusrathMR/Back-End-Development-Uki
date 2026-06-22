// 9. Find the sum of odd numbers from 1 to 100. 

function sumofoddnumbers(){
    let sum=0;

    for(let num=0; num<=100; num++){
        if(num%2==1){
            sum=num+sum;
        }
    }
    console.log(sum);
}
sumofoddnumbers();
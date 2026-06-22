// 8. Find the sum of even numbers from 1 to 100.

function sumofevennumbers(){
    let sum=0;

    for(let num=0; num<=100; num++){
        if (num%2==0){
            sum=num+sum;
        } 
    }  
    console.log(sum); 
}
sumofevennumbers();
// Print all even numbers from 1 to 100.

// function printevennumbers(){
//     let num=102;

//     do{
//         num=num-2;
//         console.log(num);
//     }
//     while(num>=2);
// }
// printevennumbers();

// function printevennumbers(){
//     for(let num=100; num>=0; num=num-2){
//         console.log(num);
//     }

// }
// printevennumbers();

function printevennumbers(){
    for (let num=0; num<=100; num++){
        if (num%2==0){
            console.log(num)
        }
    }
}
printevennumbers();
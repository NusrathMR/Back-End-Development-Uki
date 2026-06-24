// 18. Count the number of positive integers between 1 and 50.

function findpositivenumbers(){
    let count=0;
    for (let n=1; n<=50; n++){
        if (n>=0){
            count++;
        }
    }
    console.log(count)
}
findpositivenumbers();
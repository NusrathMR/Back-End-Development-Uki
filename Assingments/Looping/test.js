function countnum(Num){
    let num=Num;
    let count=0;

    while(num>0){
        num= Math.floor(num/10);
        count++;

    }
    console.log(count);
}
countnum(123456789);
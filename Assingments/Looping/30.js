function findproduct(Num){
    let num=Num;
    let product=1;

    while(num>=1){
        let digit=num%10;
        product=product*digit;
        num=Math.floor(num/10);
    }
    console.log(product)
}
findproduct(234);
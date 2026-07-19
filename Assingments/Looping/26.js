function fractorial(a){
    let result=1;
    for(let num=1; num<=a; num++){
        result*=num;
    }
    console.log(result);
}
fractorial(10);
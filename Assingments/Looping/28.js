function countnumber(Num){
    let num = Num;
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    console.log("Number of digits =", count);
}
countnumber(12345678);
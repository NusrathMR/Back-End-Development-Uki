function calculator(Num1,Operator,Num2){
    let num1=Num1;
    let operator=Operator;
    let num2=Num2;

    switch(operator){
        case "+":
            add=num1+num2;
            console.log(add);
            break;

        case "-":
            sab=num1-num2;
            console.log(sab);
            break;

        case "*":
            mul=num1*num2;
            console.log(mul);
            break;

        case "/":
            div=num1/num2;
            console.log(div);
            break;
            
    }
}
calculator(5,"/",5);
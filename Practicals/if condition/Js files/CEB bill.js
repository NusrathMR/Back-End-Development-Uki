function main(){
    cebbillpayment(85)
}

function cebbillpayment(unit){
    let Unit=unit;
    let amount;
    let fixed;
    let bill;
    
    if(Unit<=60){
        if(Unit<=30){
            amount=30*5;
            fixed=80;
            bill=amount+fixed;

        }

        else{
            amount=(30*5)+((Unit-30)*9);
            fixed=210;
            bill=amount+fixed;
        }
    }
    
    else{
        if(Unit<=90){
            amount=(60*14)+((Unit-60)*20);
            fixed=400
            bill=amount+fixed
        }
    }
    

    console.log("your bill is "+bill);
}
main();
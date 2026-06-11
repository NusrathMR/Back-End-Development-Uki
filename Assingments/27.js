function findsuppliers(sup1,sup2,sup3){
    let amount1=sup1;
    let amount2=sup2;
    let amount3=sup3;

    if(amount1>amount2){
        console.log("supplier1");  
    }

    else{
        if(amount2>amount3){
            console.log("Supplier2");
        }

        else{
            console.log("supplier3");
        }  
    }
}

findsuppliers(10,1000,2000);
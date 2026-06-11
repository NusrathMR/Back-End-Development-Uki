function findsuppliers(pro1,pro2,pro3){
    let cost1=pro1;
    let cost2=pro2;
    let cost3=pro2;

    if(cost1>cost2){
        console.log("product 1");  
    }

    else{
        if(cost2>cost3){
            console.log("product 2");
        }

        else{
            console.log("product 3");
        }  
    }
}

findsuppliers(10,1000,2000);
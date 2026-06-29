// when customer buys things more than 10000/= super market gives 25% discount;

function discount(Amount){
    let amount=Amount;
    let cost=Amount;
    let discount=0;
    if (amount>=10000){
        discount=(amount/100)*25;
        amount-=discount;
        console.log("Your Total cost is = "+cost);
        console.log("Your discount amount is = "+discount);
        console.log("Your Final total amount is = "+amount);
    }
    else{
        console.log("You are did not buy more than 10000/=")
    }
}
discount(70500);
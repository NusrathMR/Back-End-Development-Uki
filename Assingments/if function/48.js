// Monthly Usage	Unit Charge	Fixed Charge
// 0–30 units	Rs. 5 per unit	Rs. 80
// 31–60 units	Rs. 9 per unit	Rs. 210
// 61–90 units	Rs. 20 per unit	Rs. 400
// 91–120 units	Rs. 28 per unit	Rs. 1,000
// 121–180 units	Rs. 44 per unit	Rs. 1,500
// Above 180 units	Rs. 85 per unit	Rs. 2,100

function findebill(Units){
    let units=Units;
    let bill;
    if (units<=30){
        bill=(units*5)+80;
        console.log(bill)
    }
    else if (units<=60){
        bill=(units*9)+210;
        console.log(bill)
    }
    else if (units<=90){
        bill=(units*20)+400;
        console.log(bill)
    }
    else if (units<=120){
        bill=(units*28)+1000;
        console.log(bill)
    }
    else if (units<=180){
        bill=(units*44)+1500;
        console.log(bill)
    }
    else{
        if((units>=180)){
            bill=(units*85)+2100;
        console.log(bill);
        }
    }
}
findebill(85);
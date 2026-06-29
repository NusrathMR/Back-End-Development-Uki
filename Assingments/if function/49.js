// Water Consumption (Units/m³)	Usage Charge (Rs. per unit)	Monthly Service Charge (Rs.)
// 0 – 5	Rs. 50	Rs. 300
// 6 – 10	Rs. 70	Rs. 300
// 11 – 15	Rs. 90	Rs. 300
// 16 – 20	Rs. 100	Rs. 400
// 21 – 25	Rs. 120	Rs. 500
// 26 – 30	Rs. 150	Rs. 600
// 31 – 40	Rs. 170	Rs. 1,500
// 41 – 50	Rs. 195	Rs. 3,000
// 51 – 75	Rs. 225	Rs. 3,500
// 76 – 100	Rs. 250	Rs. 4,000
// Above 100	Rs. 280	Rs. 4,500

function findwaterbill(Liters){
    let liters=Liters;
    let bill;
    if (liters<=5){
        bill=(liters*50)+300;
        console.log(bill)
    }
    else if (liters<=10){
        bill=(liters*70)+300;
        console.log(bill)
    }
    else if (liters<=15){
        bill=(liters*90)+300;
        console.log(bill)
    }
    else if (liters<=20){
        bill=(liters*100)+400;
        console.log(bill)
    }
    else if (liters<=25){
        bill=(liters*120)+500;
        console.log(bill)
    }
    else if (liters<=30){
        bill=(liters*150)+600;
        console.log(bill)
    }
    else if (liters<=40){
        bill=(liters*170)+1500;
        console.log(bill)
    }
    else if (liters<=50){
        bill=(liters*195)+3000;
        console.log(bill)
    }
    else if (liters<=75){
        bill=(liters*225)+3500;
        console.log(bill)
    }
    else if (liters<=100){
        bill=(liters*250)+4000;
        console.log(bill)
    }
    else{
        if((liters>=100)){
            bill=(liters*280)+4500;
        console.log(bill);
        }
    }
}
findwaterbill(101);
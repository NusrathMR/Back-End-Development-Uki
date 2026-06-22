function findlowerquotations(quotations1,quotations2,quotations3,quotations4){
    if (quotations1<quotations2 & quotations1<quotations3 & quotations1<quotations4){
        console.log("Company 1");
    }
    if (quotations2<quotations1 & quotations2<quotations3 & quotations2<quotations4){
        console.log("Company 2");
    }
    if (quotations3<quotations2 & quotations3<quotations1 & quotations3<quotations4){
        console.log("Company 3");
    }
    if (quotations4<quotations2 & quotations4<quotations3 & quotations4<quotations1){
        console.log("Company 4");
    }   
}
findlowerquotations(400,500,600,70);
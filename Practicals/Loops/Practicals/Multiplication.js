function multiplicationtable(length){
    for(let row=1; row<=length; row++){
        let rowVal="";
        for(let col=1; col<=length; col++){
            rowVal+=(row*col+'\t');
        }
        console.log(rowVal);
    }
}
multiplicationtable(10);
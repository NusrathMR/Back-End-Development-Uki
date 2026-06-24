
function multiplicationtableif5(){
for(let row=1; row<=5; row++){
        let rowVal="";
        for(let col=1; col<=5; col++){
            rowVal+=(row*col+'\t');
        }
        console.log(rowVal);
    }
}
multiplicationtableif5();
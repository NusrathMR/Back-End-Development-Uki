
function multiplicationtableif5(){
for(let row=10; row>=1; row--){
        let rowVal="";
        for(let col=10; col>=1; col--){
            rowVal+=(row*col+'\t');
        }
        console.log(rowVal);
    }
}
multiplicationtableif5();
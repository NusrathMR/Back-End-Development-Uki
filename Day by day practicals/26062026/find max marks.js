function main(){
    const marks=[10,20,30,40,50];
    findmarks(marks);
}
main();

function findmarks(marks){
    let max=marks[0];
    for (let i=0; i < marks.length; i++){
        if (marks[i]>max){
            max = marks[i];
        }
        
    }
    console.log(max);
}
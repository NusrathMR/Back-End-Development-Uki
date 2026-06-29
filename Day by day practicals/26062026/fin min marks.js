function main(){
    const marks=[10,20,30,40,50];
    findminmarks(marks);
}
main();

function findminmarks(marks){
    let min=marks[0];
    for (let i=0; i< marks.length; i++){
        if (min>marks[i]){
            min=marks[i];
        }
    }
    console.log(min)
}
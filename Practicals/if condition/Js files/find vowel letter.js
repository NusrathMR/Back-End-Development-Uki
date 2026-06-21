function main(){
    findvowelletter("y");
}

function findvowelletter(char){
    if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U')
        console.log("is a vowel letter");
    else
        console.log("is a consonant letter");
}
main();

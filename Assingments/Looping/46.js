function printnum(){
    for (let row=1; row<=5; row++){
        let number=0;
        let line=""
        for(let col=1; col<=row; col++){
            number++
            line+=number 
        }
        console.log(line)
        
    }
}
printnum();
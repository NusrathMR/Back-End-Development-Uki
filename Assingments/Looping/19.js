// 19. Count even and odd numbers separately from 1 to 100. 

function findevenandoddnumbers(){
    let countodd=0;
    let counteven=0;
    for (let n=1; n<=100; n++){
        if (n%2==0){
            counteven++    
        }
        else {
            countodd++
        }
    }
    console.log("even "+counteven);
    console.log("odd "+countodd)
}
findevenandoddnumbers();
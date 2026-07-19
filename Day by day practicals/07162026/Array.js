function main(){
    let numbers=[1,2,3,4,5,6,7,8,9,10];
    
    console.log(sumofnum(numbers));
    // console.log(numbers[4]);
    // console.log(sumofnum(numbers));
    console.log(findlargestnum(numbers));


    let numarray=
                [[1,2,3],
                [4,5,6],
                [7,8,9]];
    console.log(findlargnumarray(numarray));

    let n=[1,2,2,3,3,4,5,6,7,8,8];
    console.log(dropsame(n));
}
main();

function sumofnum(numbers){
    let sum=0;
    for(let i=0 ;i<numbers.length; i++){
        sum +=numbers[i];
    }
     return sum;
}

function findlargestnum(numbers){
    let max=numbers[0];
    for(let z=0 ; z<numbers.length; z++){
        if (max<numbers[z]){
            max=numbers[z];
        }
        
    }
    return max;
}

function findlargnumarray(numarray){
    let maximum=numarray[0][0];
    for (let f=0; f<numarray.length; f++){
        for (let l=0; l<numarray[f].length; l++){
            if (maximum<numarray[f][l]){
                maximum=numarray[f][l];
                
            }
        }
    }
    return maximum;
}


function dropsame(n){
    let Num=n[0];
    let Newarray=new Array();

    for(let d=0; d<n.length; d++){
        if (n==Num){

        }
        else{
            Newarray=n[d];
        }

        console.log(Newarray);
    }
    // return Newarray;
}

function main(){
    let matrix=[
        [1,2],
        [3,4]
    ];

    // let opparetion="";
    let number=5;
    // MatrixMultiple(matrix,number);
    console.table(MatrixMultiple(matrix,number))
    

}
main()

function MatrixMultiple(matrix,number){
    for (let i=0; i<matrix.length; i++){
        for (let z=0; z<matrix[i].length; z++){
            matrix[i][z]+=number;
            
        } 
        
    } 
    return matrix;   
}
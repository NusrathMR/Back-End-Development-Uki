function main(){
    let StudentMarks=[
        ["Pual",75,80,85,90,95],
        ["Thanushika",70,85,65,95,100],
        ["Abigail",85,83,62,67,40],
        ["Pujithiran",85,80,75,35,69],
        ["Asthaf",99,85,88,90,100],
        ["Nusrath",100,100,88,50,60],
        ["Athham",95,85,88,72,78],
        ["Kavishanjali",88,78,79,39,64],
        ["Thaksha",20,20,18,70,24],
        ["Mathushika",80,70,90,100,95],
    ];

    // findAvarage(StudentMarks);
    // console.log(findAvarage(StudentMarks));
    FindAvg(StudentMarks);
    findlength(StudentMarks);

}
main();


// function findAvarage(StudentMarks){
//     // let avarage=0;
//     let sum=0;
//     let avg= new Array();

//     for (let i=0; i<StudentMarks.length; i++){
//         sum = StudentMarks[i][1]+StudentMarks[i][2]+StudentMarks[i][3]+StudentMarks[i][4]+StudentMarks[i][5];
//         avg[i]= sum/5;
//         // console.log(StudentMarks[i][0]+"-"+avarage);
//     }
//     return avg;

// }


function FindAvg(StudentMarks){
    let Avg=0;
    let sum=0;
    let marks=0;

    for (let i=0; i<StudentMarks.length; i++){
        for (let z=1; z<StudentMarks[i][0].length; z++){

            sum+=StudentMarks[i][z];
            Avg= sum/findlength(StudentMarks);   
        }
        console.log(Avg);
    }
}

function findlength(StudentMarks){
    let len=0;
    for (let l=0; l<StudentMarks[0].length; l++){
        len++;
    }
    len--;
    return len;

}
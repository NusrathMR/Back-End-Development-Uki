function findgroup(students,groups){
    let studentcount=students;
    let groupcount=groups;

    let pergroupestudentcount=studentcount/groupcount;
    let quotient=studentcount%groupcount;

    console.log("Number of students per group = "+pergroupestudentcount);
    console.log("Balance students = "+quotient)


}

findgroup(52,5);
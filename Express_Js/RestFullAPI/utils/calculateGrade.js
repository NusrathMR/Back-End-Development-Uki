const calculateGrade = (marks)=>{
    if (marks>=75){
        return "A"
    }
    else if (marks>=65){
        return "B"
    }
    else if (marks>=55){
        return "C"
    }
    else if (marks>=40){
        return "S"
    }
    else{
        return "F"
    }
}

export default calculateGrade;
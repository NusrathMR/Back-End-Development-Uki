function findage(person1birthyear,person2birthyear){
    let p1by=person1birthyear;
    let p2by=person2birthyear; 
    const currentyear=2026;
    let person1age=currentyear-p1by;
    let person2age=currentyear-p2by;

    if ( person1age>person2age ){
        console.log("Person 1 is a older brother")
    }
    else{
        console.log("Person 2 is yonger brother")
    }

}
findage(2005,2002);
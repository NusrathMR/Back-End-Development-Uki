function minintohour(minute){
    let hour = minute / 60;
    let min = minute % 60;
    console.log(hour+" hours "+ min + " minutes");
}

minintohour(3500);
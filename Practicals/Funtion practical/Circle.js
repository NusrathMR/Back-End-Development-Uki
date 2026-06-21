function main(){
    circle(7);
    circle(14);
}

function circle(rad){
    let radius = rad;
    const pi = 3.14;
    let area=0, cur=0;

    area = pi*radius*radius;
    cur=2*pi*radius;
    console.log("Area of the Circle is "+ area+"sqr cm");
    console.log("Curcumference of the Circle is "+cur+"cm");
}
main();
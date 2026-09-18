function main(){
    x=[0,4,0];
    y=[0,0,3];
    findLength(x,y);
    console.log(findLength(x,y));
    
}
main();

function findLength(x,y){
    let len = new Array();
    for (let i=0; i<x.length; i++){
        len[i]=getLength(x[i%3],x[(i+1)%3],y[i%3],y[(i+1)%3]);
    }
    return len;
}

function getLength(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((y2-y1),2)+Math.pow((x2-x1),2));
}
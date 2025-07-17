

var num = -9;

var x = Math.sign(num);

if(x===0){
    console.log(`${num} is zero`);
}
else if(x===-1){
    console.log(`${num} is a negative number`);
}
else if(x === 1){
    console.log(`${num} is a positive number`);
}
else{
    console.log(`${num} is not a number`);
}
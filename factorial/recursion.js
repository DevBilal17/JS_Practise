

var number = 5;
var fact = 1;


function factorial(n){
    if(n>number) return;

    fact = fact * n;
    n++;
    factorial(n);
}

factorial(1)

console.log(fact)
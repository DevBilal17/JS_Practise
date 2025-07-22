var num = 12345;

var l = num.toString().length;

var sum = 0;
var temp ;
var t = num;
for(let i=0;i<l;i++){
   temp = t % 10;
   console.log(temp)
   sum += temp;
   console.log(sum)
   t = parseInt(t /10);
   console.log(temp)
}


console.log(`Sum of integers ${num} is ${sum}`)
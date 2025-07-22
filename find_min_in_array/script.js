var arr = [1,4,-2,10,34,23,9,0,-100];


let min = arr[0];


for(let i=1;i<arr.length;i++){
    if(min > arr[i]){
       min = arr[i]
    }
}



console.log(`Minimum number in array ${arr} is ${min}`)
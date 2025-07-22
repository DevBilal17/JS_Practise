var arr = [1,4,-2,10,34,23,9,0];


let max = arr[0];


for(let i=1;i<arr.length;i++){
    if(max < arr[i]){
       max = arr[i]
    }
}



console.log(`Maximum number in array ${arr} is ${max}`)
var para = 'Hello my name is bilal. I am a mern stack developer. Currently I am pursuing my BSIT in 7th sem from GCUF';


var char = 'b';
var pSplit = para.toLowerCase().split("");
var count = 0;


for(let i=0;i<pSplit.length;i++){
    // console.log('Hello')
    if(pSplit[i] == char){
        count++;
    }
}


console.log(`${char} is coming ${count} times in ${para}`)
const words=["hello","world","javascript"];
const q5=words.reduce(function(total,word){
    return total+=word.length;
},0);
const q5arr=words.reduce((total,word)=>total+=word.length,0);
console.log(q5);
console.log(q5arr);

const q5dem=words.map(word=>word.length);
console.log(q5dem);
const marks1=[60,80,90,70];
const q9=marks1.reduce(function(total,n){
    return total+=n;
},0)/marks1.length;
const q9arr=marks1.reduce((total,n)=>total+=n,0)/marks1.length;
console.log(q9);
console.log(q9arr);
array=["Apple","Banana","Mango","Lichi","Strawberry"]


//join
//sare elements join kar degi jisse bhi join karna hai
console.log(array.join("-"));

//slice
//elements bateyga uss range ke right bound se just pehle
console.log(array.slice(1,3));

//splice
//elements batyega uss range ke right bound tak
console.log(array.splice(1,4));

array=["Apple","Banana","Mango","Lichi","Strawberry"];
//normal for loop
console.log("For Loop")
for(var i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("For of Loop")
//for of loop
for(i of array){
    console.log(i);
}
console.log("For each Loop")
//for each
array.forEach(function(i){
    console.log(i);
})

array=[1,2,3,4,5,6,7,8,9,10];
// Advanced array method
// map
// saare elements par condition apply kar dega
const double=array.map(function(x){
    return x*2;
});
const doubledemo=array.map(x=>x*2);
console.log(double);
console.log(doublrdemo);
console.log(array);

// filter
// tumhari condition karega
// joh bhi element condition pass hoga woh new array me aa jayega 
const even=array.filter(function(x){
    return x%2==0;
});

const odd=array.filter(x=>x%2!=0);
console.log(even);
console.log(odd);

// reduce
// saare elements ko ek variable me convert kar dega
const sum=array.reduce(function(sum,x){
    return sum+x;
},0);
const sum1=array.reduce(function(sum,x){
    return sum+x;
});
const sum2=array.reduce((sum,x)=>sum+x,0)
const sum3=array.reduce((sum,x)=>sum+x);
console.log(sum);
console.log((sum1));
console.log((sum2));
console.log((sum3));
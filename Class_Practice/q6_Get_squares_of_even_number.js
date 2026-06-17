const nums1=[1,2,3,4,5,6,7,8];
const q6=nums1.filter(function(num){
   return num%2==0;
}).map(function(num){
    return num*num;
})
console.log(q6);
const q6arr=nums1.filter(num=>num%2==0).map(num=>num*num);
console.log(q6arr);
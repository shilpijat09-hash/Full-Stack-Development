const ages=[{name:"A", age:16}, {name:"B", age:22}, {name:"C", age:19}];
const q4 =ages.filter (function(age){
    return age.age>18;
})
const q4arr=ages.filter(age=>age.age>18);
console.log(q4);
console.log(q4arr);
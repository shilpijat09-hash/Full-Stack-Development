const products=[{id:1,name:"Laptop"},{id:2,name:"Mouse"},{id:3,name:"Keyboard"}]
const q2=products.map(function(product){
    return product.name;
});
const q2arr=products.map(product=>product.name);
console.log(q2);
console.log(q2arr);
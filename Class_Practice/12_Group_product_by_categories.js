const products1=[
    {name:"Laptop", category:"Electronics"},
    {name:"Phone", category:"Electronics"},
    {name:"Shirt", category:"Clothing"}
];
const q13=products1.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category]=[];
    }
    group[product.category].push(product.name);
    return group;
},{});
console.log(q13);
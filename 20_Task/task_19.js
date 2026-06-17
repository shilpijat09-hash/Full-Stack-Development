let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];
for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].price - (products[i].price * 10 / 100);
}
console.log(products);
const products = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 10 }
];
const availableProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
        availableProducts.push(products[i].name);
    }
}
console.log("Available Products:", availableProducts);
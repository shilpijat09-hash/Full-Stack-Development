const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];
let prices = [];
let highestPrice = 0;
for (let product of products) {
    prices.push(product.price);
    if (product.price > highestPrice) {
        highestPrice = product.price;
    }
}
console.log("Prices:", prices);
console.log("Highest Price:", highestPrice);
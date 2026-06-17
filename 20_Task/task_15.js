let cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 500 }
];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
}
console.log("Total Cart Value:", total);
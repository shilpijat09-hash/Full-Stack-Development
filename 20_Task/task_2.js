const sales = [
    { category: "Electronics", amount: 500 },
    { category: "Books", amount: 100 },
    { category: "Electronics", amount: 300 }
];
let totalRevenue = 0;
for (let i = 0; i < sales.length; i++) {
    totalRevenue += sales[i].amount;
}
console.log("Total Revenue:", totalRevenue);
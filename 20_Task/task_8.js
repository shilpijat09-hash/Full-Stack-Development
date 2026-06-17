const customers = [
    { customer: "John", amount: 50000 },
    { customer: "Emma", amount: 20000 }
];
let totalSpending = 0;
for (let i = 0; i < customers.length; i++) {
    totalSpending += customers[i].amount;
}
console.log("Total Spending:", totalSpending);
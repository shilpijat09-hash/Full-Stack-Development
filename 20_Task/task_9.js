const transactions = [
    { type: "credit", amount: 1000 },
    { type: "debit", amount: 300 },
    { type: "credit", amount: 500 }
];
let totalCredit = 0;
for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "credit") {
        totalCredit += transactions[i].amount;
    }
}
console.log("Total Credit Amount:", totalCredit);

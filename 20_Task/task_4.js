const employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 60000 }
];
const salaries = [];
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    salaries.push(employees[i].salary);
    totalSalary += employees[i].salary;
}
console.log("Salaries:", salaries);
console.log("Total Salary Paid:", totalSalary);
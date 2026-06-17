let students = [
    { name: "John", marks: 80 },
    { name: "Emma", marks: 40 },
    { name: "Alex", marks: 70 }
];
let passedStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
        passedStudents.push(students[i].name);
    }
}
console.log(passedStudents);
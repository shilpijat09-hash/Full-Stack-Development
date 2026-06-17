let marks = [45, 80, 60, 90, 30];
let sum = 0;
let count = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        sum += marks[i];
        count++;
    }
}
let average = sum / count;
console.log(average);
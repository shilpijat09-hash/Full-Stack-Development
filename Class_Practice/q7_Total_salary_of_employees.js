const employees=[{name:"A", salary:30000},{name:"B", salary:50000},{name:"C", salary:40000}];
const q7=employees.reduce(function(total,e){
    return total+=e.salary;
},0);
const q7arr=employees.reduce((total,e)=>total+=e.salary,0);
console.log(q7);
console.log(q7arr);
// Problem:
// Given an array of employees, each employee is an object with properties: name, department, and salary (number).
// Write a function that filters this array to select employees from a specific department.
// Then, use .map() to transform the resulting array into an array of objects, each containing the name and salary of the employees.
// Finally, use .reduce() to calculate the total salary expenditure of the selected department.

const employees = [
  { name: "Alice", department: "IT", salary: 70000 },
  { name: "Bob", department: "Sales", salary: 55000 },
  { name: "Charlie", department: "IT", salary: 80000 },
  { name: "Daisy", department: "Marketing", salary: 60000 },
  { name: "Ethan", department: "Sales", salary: 65000 }
];

// Your task:
// 1. Filter the employees array to include only employees from a given department (e.g., "IT").
// 2. Map the resulting array to a new array of objects with each object containing the 'name' and 'salary' of the employee.
// 3. Use .reduce() to calculate the total salary of the selected department.
//    Return the total salary.

// Example function call:
// let totalItSalary = calculateTotalSalary(employees, "IT");
// Expected output: 150000 (total of salaries in IT department)

function calculateTotalSalary(dept) {
  return employees
    .filter(x => x.department === dept)
    .map(x => { return { name: x.name, salary: x.salary }})
    .reduce((acc, curr, index) => {
      // On the first iteration, set the accumulator to the first item's salary
      if (index === 0) {
        return curr.salary;
      } else {
        return acc + curr.salary;
      }
    }, 0); // Initial value set to 0 to handle empty arrays gracefully
}

var totalSalary = calculateTotalSalary("IT");
console.log(totalSalary);
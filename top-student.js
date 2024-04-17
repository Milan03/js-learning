// Problem:
// Given an array of students, each student is an object with properties: name, age, and grades (an array of numbers).
// Write a function that filters this array to select students who are at least 18 years old. 
// Then, use .map() to transform the resulting array into an array of objects, each containing the name and average grade of the students.
// Finally, use .reduce() to find the student with the highest average grade among those filtered.

const students = [
  { name: "Alice", age: 17, grades: [88, 90, 92] },
  { name: "Bob", age: 19, grades: [76, 85, 90] },
  { name: "Charlie", age: 18, grades: [93, 82, 88] },
  { name: "Daisy", age: 20, grades: [91, 90, 89] }
];

// Your task:
// 1. Filter the students array to include only students who are 18 or older.
// 2. Map the resulting array to a new array of objects with each object containing the 'name' and 'averageGrade' of the student.
// 3. Use .reduce() to find the student with the highest average grade among the filtered students.
//    Return an object in the format: { name: "StudentName", highestAverage: highestAvgGrade }

// Example function call:
// let topStudent = findTopStudent(students);
// Expected output: { name: "Daisy", highestAverage: 90 }

function findTopStudent(stdnts) {
  return stdnts
  .filter(x => x.age >= 18)
  .map(x => {
    let studentAverage = x.grades.reduce((acc, curr) => acc + curr, 0) / x.grades.length;
    return { name: x.name, averageGrade: studentAverage };
  })
  .reduce((acc, curr) => (acc.averageGrade > curr.averageGrade) ? acc : curr);
}

var topStudent = findTopStudent(students);
console.log(topStudent);
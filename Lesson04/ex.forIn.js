const numbers = [1, 2, 3, 4, 7, 81, -2];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// In ra key và value của object student
for (const info in student) {
    console.log(`${info}: ${student[info]}`);
}

// Tính tổng các giá trị kiểu number trong object student
let sum = 0
for (const value in student) {
    if (typeof student[value] === 'number') {
        sum+= student[value]
}
}
console.log("Tổng các giá trị kiểu number trong object student là: ", sum);

let arr01 = [];
for (const x in student) {
    arr01.push(x)
}

console.log(arr01)
// xx
// test
const numbers = [1, 2, 3, 4, 7, 81, -2];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];


for (const str_a of str) {
    console.log(str_a);
}

let re_str = []
for (const ch of str) {
    re_str.unshift(ch);
}

console.log("Chuỗi đảo ngược là: ", re_str.join(''));


// Tìm vị trí đầu và cuối của phần tử 3 trong mảng arr

const firstIndex = arr.indexOf(3); //vị trí đầu tiên
const lastIndex = arr.lastIndexOf(3) // vị trí cuối cùng

console.log("Vị trí đầu tiên của 3 là: ", firstIndex);
console.log("Vị trí cuối cùng của 3 là: ", lastIndex);




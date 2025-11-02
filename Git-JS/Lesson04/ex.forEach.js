const numbers = [1, 2, 3, 4, 7, 81, -2];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// In ra giá trị của Numbers
numbers.forEach((number, index) => 
    {console.log(`${index}: ${number}`)})

// In ra tổng mảng number
let sum = 0;
numbers.forEach((number) => {
    sum += number
})
console.log("Tổng mảng number: ", sum);

// xxx
let min = numbers[0];// Nếu ko khai báo let khi tạo biến, js sẽ gán ngầm min vào global scope, dễ gây lỗi về sau
numbers.forEach((number)=> {
    if (number < min) min = number;
    
})

console.log("Số nhỏ nhất là: ", min);

    //Cách khác để tìm Min

       // Dùng reduce
         const min2 = numbers.reduce((acc, cur) => cur < acc ? cur : acc);
            console.log("Min2-Số nhỏ nhất là: ", min2);
       // Dùng math.min
         console.log("Min 3-Số nhỏ nhất là:", Math.min(...numbers));


// Tạo mảng mới, mỗi phần tử nhân đôi

let numbers2 = [];
   numbers.forEach((number) => {;
    numbers2.push(number*2)
});
console.log("Mảng mới nhân đôi: ", numbers2)

   
         


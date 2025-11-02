//Bài 1

// Định nghĩa hàm multiply nhận 2 tham số a và b
function multiply(a, b) {
  console.log("Kết quả nhân là: ", a * b);
}

// Gọi hàm với 2 cặp giá trị khác nhau
multiply(3, 5);
multiply(7, 8);

//Bài 2
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  } else {
    min = c;
  }
  console.log("Số nhỏ nhất là: ", min);
}
//Nhận xét: Đoạn code trên có một lỗi logic. Cụ thể, trong phần else, nó gán giá trị của c cho min mà không kiểm tra xem c có thực sự nhỏ hơn min hay không.
// Điều này có thể dẫn đến việc min không phải là số nhỏ nhất trong ba số a, b, và c.

// Sửa lại như sau:

//Định nghĩa hàm với ba tham số a,b,c
function findMin(a, b, c) {
  let min = a; //giả sử min là a
  if (b < min) min = b;
  if (c < b) min = c;
  console.log("Số nhỏ nhất là: ", min);
}

findMin(3, 2, 1);
findMin(10, 125, 8);

//Cách 2 để tìm Min - dùng hàm math.min
function findMin2(a, b, c) {
  let min = Math.min(a, b, c);
  console.log("Số nhỏ nhất là: ", min);
}

findMin2(3, 2, 1);
findMin2(10, 125, 8);

//Bài 3:

//Định nghĩa hàm

function getTopstudent(students, threshold) {
  let topStudents = []; //mảng rỗng để lưu trữ tên học sinh
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push(students[i].name);
    }
  }
  console.log("Top học sinh đạt điểm cao: ", topStudents);
}

getTopstudent(
  [
    { name: "An", score: 8.5 },
    { name: "Bình", score: 9.2 },
    { name: "Chi", score: 7.8 },
    { name: "Dũng", score: 9.0 },
  ],
  8.0
);

function tinhLaiSuat(principal, rate, year) {
  total = principal + (principal * rate * year) / 100;
  // Biến total chưa khai báo bằng let hoặc const, nên sẽ trở thành biến toàn cục (global variable) → dễ gây lỗi trong chương trình lớn.
  console.log("Tổng tiền sau khi tính lãi: ", total);
}

tinhLaiSuat(10000000, 5, 3);
// sửa lại
function tinhLaiSuat2(principal, rate, year) {
  let total = principal + (principal * rate * year) / 100;
  // Biến total được khai báo với từ khóa let, nên chỉ có phạm vi trong hàm này → an toàn hơn.
  console.log("Tổng tiền sau khi tính lãi: ", total);
}

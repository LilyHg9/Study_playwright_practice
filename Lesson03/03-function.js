//Bài 1

// Định nghĩa hàm multiply nhận 2 tham số a và b
function multiply(a, b) {
  console.log("Kết quả nhân là: ", a * b);
}

// Gọi hàm với 2 cặp giá trị khác nhau
multiply(3, 5);
multiply(7, 8);

//Bài 2

//Định nghĩa hàm với ba tham số a,b,c
function findMin(a, b, c) {
  let min = a; //giả sử min là a
  if (b < min) {
    min = b;
  } else {
    min = c;
  }
  console.log("Số nhỏ nhất là: ", min);
}

findMin(3, 5, 1);
findMin(10, 125, 8);

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

function tinhLaiSuat (principal, rate, year) {
    total = principal + (principal*rate*year)/100;
    console.log("Tổng tiền sau khi tính lãi: ", total);
}

tinhLaiSuat(10000000, 5, 3);


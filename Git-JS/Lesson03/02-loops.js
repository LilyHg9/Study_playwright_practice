// Tính tổng từ 0 đến 100
//khai báo sum
let sum = 0;
//lặp i từ 1 đến 100
for (let i = 0; i <= 100; i++) {
  sum = sum + i; // mỗi vòng lặp cộng dồng i vào sum
}
console.log("tổng từ 0 đến 100 là: ", sum);

// in bảng cửu chương từ 2 đến 9

for (let j = 2; j <= 9; j++) {
  for (let k = 1; k <= 10; k++) {
    let result = j * k;
    console.log(`${j} x ${k} = ${result}`);
  }
}
// Tạo mảng các số lẻ từ 1 đến 99

let array_A = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 != 0) {
    array_A.push(i);
  }
}
console.log("các số lẻ từ 1 đến 99: ", array_A);

// In ra các email giả định theo format user1@example.com
for (let i = 0; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

mangDoanhThuNam = [
  { month: 1, total: 250 },
  { month: 2, total: 300 },
  { month: 3, total: 280 },
  { month: 4, total: 320 },
  { month: 5, total: 500 },
  { month: 6, total: 420 },
  { month: 7, total: 380 },
  { month: 8, total: 450 },
  { month: 9, total: 550 },
  { month: 10, total: 600 },
  { month: 11, total: 700 },
  { month: 12, total: 800 },
];
TongDoanhThu = 0;
for (let i = 0; i < mangDoanhThuNam.length; i++) {
    TongDoanhThu += mangDoanhThuNam[i].total
}
console.log("Tổng doanh thu năm: ", TongDoanhThu);

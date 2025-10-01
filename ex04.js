//Khai báo chiều cao
const yourHeight = 150; // (cm);

// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
let soLeCc = yourHeight % 100; // lấy số lẻ chiều cao = số dư khi chia chiều cao cho 100
let canNangLyTuong = (soLeCc * 9) / 10;
let mucCanToiDa = (soLeCc * 8) / 10;
let mucCanToiThieu = (soLeCc * 8) / 10;

console.log(
  "Cân nặng lý tưởng: " +
    canNangLyTuong +
    "," +
    " Mức cân tối đa: " +
    mucCanToiDa +
    "," +
    " Mức cân tối thiểu: " +
    mucCanToiThieu
);

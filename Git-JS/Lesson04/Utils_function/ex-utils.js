const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
// 1. Sử dụng utils function Every
// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
if (scores.every((score) => score > 70)) {
  console.log("Tất cả giá trị trong scores đều > 70");
}

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
if (ages.every((age) => age > 15)) {
  console.log("Tất cả giá trị trong ages đều > 15");
}
// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
if (words.every((words) => words.length > 3)) {
  console.log("Tất cả từ trong words đều có độ dài > 3");
}

// 2. filter
// 2.1 Lọc các giá trị trong scores > 80.
const highScore = scores.filter((score) => score > 80);
console.log("Các giá trị trong scores > 80 là: ", highScore);
// 2.2 Lọc các giá trị trong ages ≥ 18.
const adult = ages.filter((age) => age >= 18);
console.log("Các giá trị trong ages ≥ 18 là: ", adult);
// 2.3 Lọc các từ trong words có độ dài > 5.
const longWords = words.filter((word) => word.length > 5);
console.log("Các từ trong words có độ dài > 5 là: ", longWords);

// 3.find
// 3.1 Tìm giá trị đầu tiên trong scores > 80.
const firstHighscore = scores.find((score) => score > 80);
console.log("Giá trị đầu tiên trong scores > 80 là: ", firstHighscore);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
const firstAdult = ages.find((age) => age > 20);
console.log("Giá trị đầu tiên trong ages > 20 là: ", firstAdult);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
const firstLongWord = words.find((word) => word.length > 5);
console.log("Từ đầu tiên trong words có độ dài > 5 là: ", firstLongWord);

// 4. map
// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const updatedScores = scores.map((score) => {
  let newScore;

  if (score < 90) {
    newScore = score * 1.1; // tăng 10%
  } else {
    newScore = score * 0.95; // giảm 5%
  }

  // Làm tròn 2 chữ số thập phân và chuyển lại về kiểu số
  return Number(newScore.toFixed(2)); //to.fixed() trả về chuỗi, nên cần chuyển về số bằng hàm Number()
});
console.log("Mảng mới sau khi cập nhật điểm: ", updatedScores);

        // CÁCH KHÁC
        const updatedScores2 = scores.map((score) => {
        const newScore = score < 90 ? score * 1.1 : score * 0.95;
        return Number(newScore.toFixed(2));
        });
        console.log("Mảng mới sau khi cập nhật điểm: ", updatedScores2);
// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const strNumbers = numbers.map((number) => number.toString());
console.log("Mảng chuỗi từ numbers: ", strNumbers);


// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị
const doubleNumbers = numbers.map((number) => number*2);
console.log("Mảng mới nhân đôi từ numbers: ", doubleNumbers);

//5. Some
    // 5.1 Kiểm tra scores có giá trị nào > 80 không.
    if(scores.some((score) => score > 80)){
        console.log("yes");
    } 
    
    // 5.2 Kiểm tra ages có giá trị nào < 18 không
    if(ages.some((age) => age < 18)) {
        console.log("yes");
    } 
    // 5.3 Kiểm tra words có từ nào dài > 5 không.
    if(words.some((word) => word.length > 5)) {
        console.log("yes");
    }
// 6. reduce
    //6.1 Tính tổng các giá trị trong scores. 
    const totalScore = scores.reduce((acc, curr) => acc + curr,0);
    console.log("Tổng các giá trị trong scores là: ", totalScore);
    //6.2 Tính tích các giá trị trong numbers. 
    const productNumbers = numbers.reduce((acc, curr) => acc * curr,1);
    console.log("Tích các giá trị trong numbers là: ", productNumbers); 
    //6.3 Tính tổng các giá trị trong expenses. 
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr,0);
    console.log("Tổng các giá trị trong expenses là: ", totalExpenses);

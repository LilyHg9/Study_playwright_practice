/*const a = 0;
if (a > 0) {
  console.log("Giá trị bạn nhập là số dương");
}
if (a < 0) {
  console.log("Giá tri bạn nhập là số ấm");
}
if (a == 0) {
  console.log("Giá trị bạn nhập là số 0");
}*/

//better version
const a = 102;

if (a > 0) {
  console.log("Giá trị bạn nhập là số dương");
} else if (a < 0) {
  console.log("Giá trị bạn nhập là số âm");
} else if (a === 0) {
  console.log("Giá trị bạn nhập là số 0");
}

//takeaways:
// You can chain with else if so only one condition runs instead of checking all ifs.

// For example: nếu a = 12, chỉ cần kiểm tra a > 0, không cần tiếp tục check a < 0 và a === 0.

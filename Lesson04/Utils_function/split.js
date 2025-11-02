const name = "Nguyễn Văn A"; 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
const date = "2024-05-19";


// dùng split
// 1. Chia name thành mảng các từ (dùng khoảng trắng). 
const nameArray = name.split(" ")
console.log(nameArray)

// 2. Chia emails thành mảng các email (dùng dấu phẩy)
const emailArray = emails.split(",")
console.log(emailArray)
// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang). 
const dateArray = date.split("-");
console.log(dateArray)
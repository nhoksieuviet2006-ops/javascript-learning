//biểu thức = toán tử + toán hạng

var s = a + b * c;
//biểu thức trên có 3 toán hạng: a, b, c
//biểu thức trên có 2 toán tử: +, *

//1. Toán tử số học (Arithmetic Operators)
/**
+, -, *, /, %, ++, -- 
*/
// var a = 10;
// var b = 0;
// var c = a / b; //Infinity
// console.log(c);

var count = 1;
var total = count++ + ++count + count++;
console.log(total); // 1 + 3 + 3 = 7
console.log(count); // 4

//2. Toán tử gán (Assignment Operators)
/**
=, +=, -=, *=, /=, %=, **= 
*/
var x = 5;
x += 3; // x = x + 3
console.log(x); // 8

//3. Toán tử so sánh (Comparison Operators)
/**
==, ===, !=, !==, >, <, >=, <=

=> Luon so sánh trả về giá trị boolean (true/false)

=> Luu y: == so sánh giá trị, === so sánh giá trị và kiểu dữ liệu
*/
var a = 5;
var b = 10;
var c = a === b; // false
console.log(c);

//4. Toán tử logic (Logical Operators)
/**
&& --> nếu tất cả các toán hạng đều đúng thì trả về true, nếu có 1 toán hạng sai thì trả về false

|| --> nếu có ít nhất 1 toán hạng đúng thì trả về true, nếu tất cả các toán hạng sai thì trả về false

! --> phủ định giá trị boolean
*/

//5. Toán tử 3 ngôi (Ternary Operator)
/**
Biểu thức ? giá trị 1 : giá trị 2
*/
var age = 16;
var result = age >= 18 ? "Bạn đủ tuổi" : "Bạn chưa đủ tuổi";
console.log(result); // Bạn chưa đủ tuổi

// var number = 10;
// var total = 5 + 10 + number >= 10 ? 10 : 5 + 2;
// console.log(total); // 10

//6. Toán tử nullish coalescing (Nullish Coalescing Operator)
/**
?? --> nếu toán hạng bên trái là null hoặc undefined thì trả về toán hạng bên phải, ngược lại trả về toán hạng bên trái 

Cú pháp: biến ?? giá trị mặc định
*/
// var a = null;
// var b = a ?? 10;
// console.log(b); // 10

//viết lại toán tử nullish coalescing bằng toán tử 3 ngôi
var a = null;
var b = a !== null && a !== undefined ? a : 10;
console.log(b); // 10

// Khai báo 3 biến: accountName = "Trading A", initialBalance = 5000, currentBalance = 5000. Chọn let hoặc const phù hợp và in cả 3 giá trị.
// const accountName = "Trading A";
// let initialBalance = 5000;
// let currentBalance = 5000;
// console.log(accountName, initialBalance, currentBalance);

// Ban đầu balance = 2000. Giao dịch thứ nhất lãi 300, giao dịch thứ hai lỗ 120. Cập nhật balance sau từng giao dịch và in kết quả.
// let balance = 2000;

// balance += 300;
// console.log(balance);

// balance -= 120;
// console.log(balance);

// const balance = 1000;
// balance += 500;
// console.log(balance);

// Có 3 tài khoản với số vốn lần lượt 1000, 2500, 1500 USD. Khai báo biến, tính tổng vốn và in kết quả.

// let account1 = 1000;
// let account2 = 2500;
// let account3 = 1500;

// let total = account1 + account2 + account3;
// console.log(total); // 5000

// Tạo file script.js cho Trading Account Summary. Khai báo tên tài khoản, vốn ban đầu, hai khoản P/L (+200 và -75), cập nhật số dư và in báo cáo có nhãn rõ ràng.

// const accountName = "Đỗ Ngọc Sơn";
// let initialBalance = 5000;
// let profitTaken = 200;
// let lossTaken = 75;

// let currentBalance = initialBalance + profitTaken - lossTaken;
// console.log("Trading Account Summary");
// console.log("Account Name:", accountName);
// console.log("Initial Balance:", initialBalance);
// console.log("Profit Taken:", profitTaken);
// console.log("Loss Taken:", lossTaken);
// console.log("Current Balance:", currentBalance);

//alert() – Hiển thị thông báo.
//confirm() – Hiển thị hộp thoại xác nhận.
//setTimeout() – Thực hiện công việc sau một khoảng thời gian.
//setInterval() – Lặp lại công việc sau mỗi khoảng thời gian.

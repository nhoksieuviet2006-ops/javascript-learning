//bien duoc luu o ram
//khai bao bien (dat ten theo quy tac camelCase)
var user; //undefined
var customer;
var userId, username, userEmail;
var course = "Fullstack offline 2026";
var age = 18;

//luu y: neu 1 bien duoc khai bao nhung khong gan gia tri thi no se co gia tri la undefined
console.log(user); //undefined
console.log(course); //Fullstack offline 2026

//hien thi noi dung len trinh duyet
// document.body.innerHTML =
//   "Xin chao cac ban den voi khoa hoc: " + course + "<br>";

//Luu y: noi dung hien thi len trinh duyet co the la the html
document.write("<h2>Xin chao cac ban den voi khoa hoc: " + course + "</h2>");

// var welcome = "Day la:" + course + " va tuoi cua ban la: " + age;
// document.write("<p>" + welcome + "</p>");

//backtick:``
var welcomeBacktick = `<h2>Khoa hoc ${course}</h2>
<h3>Đỗ Ngọc Sơn</h3>
`;
document.write(`<p>${welcomeBacktick}</p>`);

//Lưu ý: biến trong js có 2 cách khai báo khác: let và const

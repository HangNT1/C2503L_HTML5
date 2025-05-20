/**
 * Cách khai báo biến trong JS:
 * C: kiểu dữ liệu tên Biên;
 * JS: phạm vi tên biên;
 * var number;
 * ES6: var khong duoc dung nua => let/const
 * Các kiểu dữ liệu trong JS:
 *    + Nguyên thuỷ: primitive => Giống C
 *        + Số: number (1, 1.5)
 *        + String: chuỗi ký tự: "Hello"
 *        + Boolean: true/false
 *        + Null: Giá trị rỗng, không tồn tại
 *        + Underfine: Giá trị duy nhất
 *        ....
 *    + Kiểu phức hợp (non - primitive)
 *        + Object: là tập hợp của key - value => {}
 *        + Array: Là 1 dạng Object đặc biệt: [1,2,3] => []
 *        + Function => 2 cach: function/ => (arrow function) => ()
 */

// Number
let num = 42;
console.log(typeof num);
console.log(num);

// String
let str = "Xin chao met qua roi ";
console.log(typeof str);
console.log(str);

// Boolean
let isActive = true;
console.log(typeof isActive);
console.log(isActive);

// Object: key - value
// https://viblo.asia/p/oop-trong-javascript-gDVK2joAKLj
// C1: Khai bao Object: {}
let sinhVien = {
  // key - value: OOP - Lap trinh huong doi
  // Thuoc tinh - gia tri
  mssv: "HE130461",
  ten: "Nguyen Van A",
  tuoi: 10,
  kyHoc: 1,
  nganhHoc: "Phat trien phan mem",
};
let mayTinh = {
  ma: "XL2411P",
  ten: "BenQ",
  gia: 3000000,
  hang: "Benq",
  mauSac: "den",
  namBaoHanh: 2027,
};
console.log(mayTinh);

// Khai bao Object MayTinh : ma, ten, gia, hang, mauSac, namBaoHanh va ham inThongTin()

let mayTinh1 = {
  ma: "XL2411P",
  ten: "BenQ",
  gia: 3000000,
  hang: "Benq",
  mauSac: "den",
  namBaoHanh: 2027,
  inThongTin: function () {
    // liet ke cac thong tin cua doi tuong
    // Viet noi dung cua ham
    console.log(this.ma);
    console.log(this.ten);
  },
};

// Goi ham cua 1 Object
console.log(mayTinh1.inThongTin());
// C2: Khai bao Object bang new
const giangVien = new Object();
giangVien.ma = "HangNT169";
giangVien.ten = "Nguyen Thuy Hang";
// => C1
const gv1 = {
  ma: "HangNT169",
  ten: "Nguyen Thuy Hang",
};

// Array:[]
const listString = ["Ten 1", " Ten 2", "Ten 3", "Ten 5", "ten 6"];
// 01234
// Liet ke cac phan tu trong mang
// C1: For loop
for (let index = 0; index < listString.length; index++) {
  const element = listString[index];
  console.log(element);
}
// C2: For in
console.log("For in");
// In ra vi tri
for (const a in listString) {
  console.log(a);
}
// C3: For of
console.log("For of");
// In ra gia tri
for (const b of listString) {
  console.log(b);
}
// Liet ke cac phan tu o vi tri le trong mang
console.log("bai them");

for (let index = 0; index < listString.length; index++) {
  const element = listString[index];
  if (index % 2 !== 0) {
    console.log(element);
  }
}
// Tao ra 1 mang doi tuong sinh vien gom cac thuoc tinh sau: mssv - String, ten - String
const listSinhVien = [
  {
    mssv: "He130461",
    ten: "Nguyen Van",
    tuoi: 10,
  },
  {
    mssv: "He130462",
    ten: "Nguyen Van B",
    tuoi: 11,
  },
  {
    mssv: "He130463",
    ten: "Nguyen Van C",
    tuoi: 11,
  },
];

/**
 *  Json: 1 dinh dang du lieu van ban
 * Muc dich: Truyen du lieu tu client side(React JS/ VueJS..) & server-side (Xu ly logic: Java, C#, PHP...)
 * XML & JSON : Rest API
 * => Pho bien (nhe)
 * Json co 2 kieu cau truc:
 *      1. Object: {}
 *      2. Array: []
 * JSon trong Javascript: Duoc dung de chuyen doi giua chuoi Json va Object
 *      1. Json => Object : Json.parse(String)
 *      2. Object => Json: Json.stringify(Object)
 */

const obj = {
  name: "A",
  age: 10,
};
// chuyen sang Json
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Nguoc lai
// Bang: == / ===
// SS long leo va SS chat che
// ==: SS chi quan tam toi gia tri khong quan tam toi kieu du lieu
console.log(3 == "3"); // true
// ===: SS gia tri va kieu du lieu
console.log(3 === "3"); // false.
console.log(3 === 3);

/**
 * null & underfine
 * null:
 *  - Kieu du lieu dac biet trong JS
 *  - Dai dien cho 1 gia tri trong JS
 *  - Thuong se chu dong gan vao bien
 *  - Khi dung typeof null => Object
 * underfine
 *  - La gia tri mac dinh trong JS
 *  - Khi 1 bien co gia tri la underfine => bien nay chua duoc gan gia tri
 *  - typeof => underfine
 */
const abc = null;
console.log(abc);
console.log(typeof abc); // Object
let bcd;
console.log(bcd);
console.log(typeof bcd);

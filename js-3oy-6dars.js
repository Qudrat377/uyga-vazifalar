// -----------------------------------------1 masala

// arrayga includes metodini yangi versiyasi

// Array.prototype.bormi = function (velue) {
//   let sum = [];
//   for (let i = 0; i < this.length; i++) {
//     if (typeof velue === "number") {
//       if (velue === this[i]) {
//         return true;
//       }
//     }
//     if (typeof velue === typeof this) {
//       let sum = [];
//       for (let k = 0; k < this.length; k++) {
//         for (let j = 0; j < velue.length; j++) {
//           if (this[k] === velue[j]) {
//             sum.push(velue[j]);
//           }
//         }
//       }
//       return sum;
//     }
//   }
//   return false;
// };

// let sum = [77, 43, 55, 21, 96];

// let summa = [77, 43, 85, 926];

// console.log(sum.bormi(summa));
// console.log(sum.bormi(5));

// ------------------------------------------2 masala

// string uchun revers metodini prototypi

// String.prototype.strTeskari = function () {
//     let sum = ""
//     for (let i = this.length -1; i >= 0; i--) {
//        sum += this[i]
//     }
//     return sum
// }

// let str = "Hello world"

// console.log(str.strTeskari());

// --------------------------------------------3 masala

// kanstruktorga funksiyaga prototype orqali yangi metod qo'shish

// function Qulaylik (name, age, birthYear, nomer, adress, prophetion) {
//     this.name = name
//     this.age = age
//     this.birthYear = birthYear
//     this.nomer = nomer
//     this.adress = adress
//     this.prophetion = prophetion
// }

// Qulaylik.prototype.ism = function () {
//    return this.name
// }
// Qulaylik.prototype.yosh = function () {
//    return this.age
// }
// Qulaylik.prototype.yil = function () {
//    return this.birthYear
// }
// Qulaylik.prototype.raqam = function () {
//    return this.nomer
// }
// Qulaylik.prototype.manzil = function () {
//    return this.adress
// }
// Qulaylik.prototype.kasb = function () {
//    return this.prophetion
// }

// let sum = new Qulaylik("qudrat", 23, 2002, 887900677, "Oqsaroy 42", "IT dasturchi")

// console.log(sum.kasb());

// -----------------------------------------------------4 dars

// bir nechta obyektlar uchun prototype metodini chaqirish
// shunga unchalik tushunmadim va jptdan oldim

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.sayHi = function() {
//   console.log(`Salom, mening ismim ${this.name}`);
// };

// Person.prototype.isAdult = function() {
//   return this.age >= 18;
// };
//  const person1 = new Person("Ali", 25);
// const person2 = new Person("Madina", 17);
// const person3 = new Person("Otabek", 30);

// person1.sayHi(); // Salom, mening ismim Ali
// person2.sayHi(); // Salom, mening ismim Madina
// person3.sayHi(); // Salom, mening ismim Otabek

// console.log(person1.isAdult()); // true
// console.log(person2.isAdult()); // false
// console.log(person3.isAdult()); // true

// const people = [person1, person2, person3];

// people.forEach(p => {
//   p.sayHi();
//   console.log(`Kattami? : ${p.isAdult()}`);
// });

// ---------------------------------------------------5 masala

// arrayga concat metodini qaytadan yasadik jpt bilan

// Array.prototype.myCancat = function (...element) {
//   let result = [...this];
//   for (const value of element) {
//     if (typeof value === "object") {
//       result.push(...value);
//     } else {
//       result.push(value);
//     }
//   }

//   return result;
// };

// let sum = [12, 21, 45];

// let shu = [23, 90, "salom"];

// let from = sum.myCancat(25);
// let dan = sum.myCancat(shu)

// console.log(from);
// console.log(dan);

// -----------------------------------------6 masala

// Object.prototype.Keys = function () {

//    let sum = []
//    for (const key in this) {
//       if (this.hasOwnProperty(key)) {
//     sum.push(key)
//       }
//    }
//    return sum
// }

// let sum = {name: "ali",
//    age: 23
// }

// console.log(sum.Keys());

// -----------------------------------------7 masala

// function Car(brend) {
//    this.brend = brend
// }

// Car.prototype.drive = function() {
//    return `${this.brend} haydamoqda`
// }
// const mashina = new Car("malibu")

// // delete Car.prototype.drive

// console.log(mashina.drive());

// ------------------------------------------8 masala

// stringdagi so'zlarni uzunligini topish

// String.prototype.sozlarniUzunligi = function () {
//    let sum = []
//    let soz = ""
//    for (let i = 0; i < this.length; i++) {
//      if (this[i] !== " ") {
//      soz += this[i]
//      }else if (this[i] === " ") {
//       sum.push(soz.length)
//       soz = ""
//      }
//    }
//    sum.push(soz.length)

//    return sum
// }

// let sum = "nima gap qalay"

// console.log(sum.sozlarniUzunligi());

// ------------------------------------------------9 masala

// sonlarni sortlash uchun metod

// Array.prototype.Tartblash = function() {
//    let sum = this
//    for (let i = 0; i < sum.length; i++) {
//       for (let j = 0; j < sum.length; j++) {
//        if (sum[j] > sum[j + 1]) {
//          let temp = sum[j]
//          sum[j] = sum[j + 1]
//          sum[j + 1] = temp
//        }
//       }
//    }
//    return sum
// }

// let result = [12, 33, 11, 5, 2, 7]

// console.log(result.Tartblash())

// ------------------------------------------10 masala

// objekt prototypega yangi metod qo'shish

// Object.prototype.qiymati = function () {
//   let res = [];
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       res.push(this[key]);
//     }
//   }
//   return res;
// };

// let sum = { ali: 63, kamol: "vaz" };

// console.log(sum.qiymati());



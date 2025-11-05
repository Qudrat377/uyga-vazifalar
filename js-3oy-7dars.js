// ---------------------------------1 masala

// ism kiritilsa ismga qo'shib salom deb chiqadi

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `${this.name} salom`;
//   }
// }

// let newsum = new Person("Qudrat");

// console.log(newsum.greet());

// -----------------------------------2 masala

// BankAccount boshqarish

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }
//   deposit(depo) {
//     if (depo > 0 && this.balance !== undefined) {
//       return (this.balance += depo);
//     } else if (this.balance === undefined) {
//       return (this.balance = depo);
//     }
//   }
//   withdraw(sinyat) {
//     if (this.balance >= sinyat) {
//       return (this.balance -= sinyat);
//     } else {
//       console.log("hisobingizda mablag' yetarli emas");
//     }
//   }
// }

// let sum = new BankAccount(2);

// sum.deposit(3);

// sum.withdraw(1);

// console.log(sum.balance);

// -----------------------------------------3 masala

// class Rectangle {
//   constructor(width, height) {
//     this.width = width
//     this.height = height
//   }
//   parametr () {
//     let sum = (this.width + this.height) * 2
//     return sum
//   }
// }

// let qiymat = new Rectangle(5, 3)

// console.log(qiymat.parametr());

// --------------------------------------------4 masala

// class student {
//   constructor(name, id, grades = []) {
//     this.name = name;
//     this.id = id;
//     this.grades = grades;
//   }
//   calculateAverage() {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }

//     let qiymat = sum / this.grades.length;
//     return qiymat;
//   }
// }

// let summa = new student("Qudrat", "38635", [2, 5, 3]);

// console.log(summa.calculateAverage());

// ---------------------------------5 masala

// jptdan oldim

// class Clock {
//   displayTime() {
//     const now = new Date(); 
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     console.log(`Hozirgi vaqt: ${hours}:${minutes}:${seconds}`);
//   }
// }

// let clock = new Clock();
// clock.displayTime();

// -------------------------------------6 masala

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   giveRaise(persentage) {
//     let dan = (this.salary += persentage);
//     return dan;
//   }
// }

// let sum = new Employee("Qudrat", "obivkachi", 150);

// console.log(sum.giveRaise(50));

// ------------------------------------------7 masala

// jptdan oldim

// class Order {
//   constructor() {
//     this.items = {};
//   }

//   addItem(item, quantity) {
//     if (this.items[item]) {
//       this.items[item] += quantity;
//     } else {
//       this.items[item] = quantity;
//     }
//   }

//   removeItem(item) {
//     if (this.items[item]) {
//       delete this.items[item];
//     }
//   }

//   calculateTotal(prices) {
//     let total = 0;
//     for (let item in this.items) {
//       total += (prices[item] || 0) * this.items[item];
//     }
//     return total;
//   }
// }

// let order1 = new Order();
// order1.addItem("non", 2);
// order1.addItem("sut", 1);
// order1.removeItem("non");

// let prices = { "non": 5000, "sut": 8000 };

// console.log("Jami summa:", order1.calculateTotal(prices));

// ---------------------------------------------8 masala

// class Calculate {
//   static add(a, b) {
//     return a + b;
//   }

//   static minus(a, b) {
//     return a - b;
//   }

//   static multiply(a, b) {
//     return a * b;
//   }

//   static divide(a, b) {
//     return a / b;
//   }
// }

// console.log(Calculate.add(6, 2));

// --------------------------------------------9 masala

// jptdan oldim

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   mypush(value) {
//     this.items[this.items.length] = value;
//     return this.items; 
//   }

//   mypop() {
//     if (this.items.length === 0) {
//       return "Stack bo‘sh!";
//     }
//     let res = this.items[this.items.length - 1];
//     this.items.length = this.items.length - 1;
//     return res; 
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// let s = new Stack();

// let sum = [12, 5];

// for (let i = 0; i < sum.length; i++) {
//   s.mypush(sum[i]);
// }

// console.log("Stackdagi elementlar:", s.items); // [12, 5]
// console.log("Oxirgi element pop qilindi:", s.mypop()); // 5
// console.log("Hozirgi stack:", s.items); // [12]
// console.log("Stack bo‘shmi?", s.isEmpty()); // false

// ---------------------------------------10 masala

// class Vehicle {
//   constructor(speed) {
//     this.speed = speed;
//   }
// }

// class Car extends Vehicle {
//   constructor(speed, fuel) {
//     super(speed);  
//     this.fuel = fuel;
//   }
// }

// let car1 = new Car(180, "Benzin");

// console.log("Tezlik:", car1.speed);
// console.log("Yoqilg'i turi:", car1.fuel);


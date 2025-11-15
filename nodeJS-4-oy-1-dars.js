//-------------------------------- 1 masala

// oldin promislarni tushunish uchun jptdan olgan masalalarim asosida ishladim

// function non() {
//   return new Promise((resolve) => {
//     console.log("Non tayyorlanmoqda");
//     setTimeout(() => {
//       resolve("Non Tayyor");
//     }, 2000);
//   });
// }

// function choy() {
//   return new Promise((resolve) => {
//     console.log("Choy qaynatish b0shlandi");
//     setTimeout(() => {
//       resolve("Choy tayyor");
//     }, 1000);
//   });
// }

// function dasturxon() {
//   return new Promise((resolve) => {
//     console.log("Dasturxon tayyorlanmoqda");
//     setTimeout(() => {
//       resolve("Dasturxon tayyor");
//     }, 500);
//   });
// }

// async function kutish() {
//     console.log("ishlar parallel boshlandi");
//     let [non1, choy1, dasturxon1] = await Promise.all([
//         non(),
//         choy(),
// dasturxon()
//     ])
//     console.log(non1, choy1, dasturxon1);
    
// }

// kutish()

// -------------------------------------2 masala

// class Animal {
//   constructor(name, kg) {
//     this.name = name;
//     this.kg = kg;
//   }
// }

// class Dog extends Animal {
//   constructor(name, kg, ovozi) {
//     super(name, kg);
//     this.ovozi = ovozi;
//   }
// }

// let newDog = new Dog("Markus", 3, "hov hov");

// class Cat extends Animal {
//   constructor(name, kg, ovozi) {
//     super(name, kg);
//     this.ovozi = ovozi;
//   }
// }

// let newCat = new Dog("Markus", 3, "miyov");

// class Wolk extends Animal {
//   constructor(name, kg, ovozi) {
//     super(name, kg);
//     this.ovozi = ovozi;
//   }
// }

// let newWolk = new Dog("Markus", 3, "ouuu-uu");

// console.log(newDog);
// console.log(newCat);
// console.log(newWolk);

// --------------------------------------------- 3 masala

// class MyMath {
//   static add(a) {
//     let summa = 0;
//     for (let i = 0; i <= a; i++) {
//       summa += i;
//     }
//     return summa;
//   }
//   static juft(a) {
//     if (a % 2 === 0) {
//       return "Juft";
//     } else {
//       return "Toq";
//     }
//   }
//   static yigindi(...summa) {
//     let sonlar = summa;
//     let natija = 0;
//     for (let i = 0; i < sonlar.length; i++) {
//       natija += sonlar[i];
//     }
//     return natija;
//   }
// }

// let add_UCHUN = MyMath.add(2, 3);
// let juft_UCHUN = MyMath.juft(22);
// let yigindi_UCHUN = MyMath.yigindi(12, 56, 32);

// console.log(add_UCHUN);
// console.log(juft_UCHUN);
// console.log(yigindi_UCHUN);

// -------------------------------------------------4 masala

// class BankAccaunt {
//   #balans = 100;
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }
//   getBalans() {
//     return this.#balans;
//   }
//   setBalans(summa) {
//     return (this.#balans += summa);
//   }
// }
// let sum = new BankAccaunt("Qudrat", 23, 42);

// console.log(sum);

// console.log(sum.getBalans());

// sum.setBalans(25);

// console.log(sum.getBalans());

// -----------------------------------------1 masala

// arraydagi takroriy elementni topish sonini sanash

// function bbc(arr) {
//   let obj = {};
//   let natija = {
//     element: 0,
//     count: 0,
//   };
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   let katta = Object.entries(obj);
//   let son = 0;
//   for (let i = 0; i < katta.length; i++) {
//     console.log(katta[i][1], son);

//     if (son < katta[i][1]) {
//       son = katta[i][1];
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] === son) {
//       natija.element = +key;
//       natija.count = obj[key];
//     }
//   }

//   return natija;
// }

// console.log(bbc([3, 7, 3, 2, 3, 7, 7, 8, 7]));

// ----------------------------------------------------2 masala

// arrayfagi juft sonlarni sanash

// function bbc(arr) {

// let count = 0
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 == 0) {
//     count ++
//    }
// }
// return count
// }

// console.log(bbc([2, 1, 2, 3, 4]));

// ----------------------------------------------------3 masala

// Arrayda faqat bir marta uchraganini toping

// function bbc(arr) {
//   let sum = {};
//   for (let i = 0; i < arr.length; i++) {
//     sum[arr[i]] = (sum[arr[i]] || 0) + 1;
//   }
//   let newArr = [];
//   for (const key in sum) {
//     if (sum[key] === 1) {
//       newArr.push(+key);
//     }
//   }

//   return newArr;
// }

// console.log(bbc([1, 2, 2, 3, 4, 4, 5]));

// -------------------------------------------------4 masala

// sitring ichidagi so'zlarni tartibini teskari qilib qaytaring

// function bbc(str) {
//   let sum = str.split(" ");
//   let soz = ""
//   for (let i = sum.length - 1; i >= 0; i--) {
//     soz += sum[i];
//     if (i < sum.length) {
//       soz += " ";
//     }
//   }

//   return soz
// }

// console.log(bbc("Men JavaScriot o'rganmoqdaman"));

// -------------------------------------------------5 masala

// string faqat raqam bo'lsa true aks holda false

// function bbc(str) {
//   let sum = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       sum.push(str[i]);
//     }
//   }

//   return sum.length === str.length;
// }

// console.log(bbc("12456"));

// -------------------------------------------------6 masala

// Array ichidagi so'zlardan faqat "e" harfi ikki martadan ko'p uchraganini solish

// function bbc(arr) {
//   let sum = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === "e") {
//         obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//       }
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] > 1) {
//       sum.push(key);
//     }
//   }
//   return sum;
// }

// console.log(bbc(["elephant", "apple", "tree", "cheese", "banana"]));

// ---------------------------------------------------7 masala

// array ichidagi so'zlarni faqat alfbo tartibida o'sganini qaytarish

// function bbc(arr) {
//   let harf = "abcdefghijklmnopqrstuvwxyz";
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (harf.includes(arr[i])) {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }

// console.log(bbc(["abc", "dog", "xyz", "apple"]));

// ---------------------------------------------------8 masala

// sonni arrayga solish

// function bbc(arr) {
//   let sum = [];
//   let num = "";
//   if (typeof arr === "number") {
//     let son = arr.toString();
//     for (let i = 0; i < son.length; i++) {
//       sum[sum.length] = son[i];
//     }
//     return sum;
//   } else if (typeof arr === "object") {
//     for (let i = 0; i < arr.length; i++) {
//       num += arr[i];
//     }
//   }
//   return +num;
// }

// console.log(bbc(235));

// // ---------------------------------------------------9 masala

// // ichma ich arrayni hisoblash kerak edi ishlolmadim va jptdan ko'chirdim

// function bbc(arr) {
//   let count = 0;

//   function ichigaKirish(a) {
//     if (Array.isArray(a)) {
//       count++;
//       ichigaKirish(a[0])
//     }
//   }

//   ichigaKirish(arr);
//   return count;
// }

// console.log(bbc([[[]]]));

// // ---------------------------------------------------10 masala

// berilgan butun sonni raqamlarga ajratib yig'indisini hisoblang

// function bbc(num) {
//   let bir = num.toString();
//   let sum = `${bir[0]}`;
//   let count = +`${bir[0]}`;
//   for (let index = 1; index < bir.length; index++) {
//     sum += ` + ${bir[index]}`;
//     count += +bir[index];
//   }

//   return `${sum} = ${count}`;
// }

// console.log(bbc(4567));

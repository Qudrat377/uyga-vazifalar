// ---------------------------------1 masala

// function bbc(str) {
//   let sum = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     sum += str[i];
//   }
//   if (sum === str) {
//     return true;
//   }
//   return false;
// }

// console.log(bbc("level"));
// console.log(bbc("apple"));
// console.log(bbc("kiyik"));

// ----------------------------------------2 masala

// o'nlikdan ikkilikga o'tkazish nima ekanligini bilmas ekanman jptdan oldim

// function bbc(num) {

// let sum = 0

// let i = 1
// let dan = ""
// while (num > 0) {

// let qoldiq = num % 2
// console.log(qoldiq);

// dan = qoldiq + dan
// num = Math.floor(num / 2)
// }
// return dan
// }

// console.log(bbc(10));

// ----------------------------------------------3 masala

// arrdagi sonlarni kiritilgan index bo'yicha almashtirish

// function bbc(arr, bir, ikki) {

// let hozircha = arr[bir]
// arr[bir] = arr[ikki]
// arr[ikki] = hozircha

// return arr
// }

// console.log(bbc([1, 22, 13, 4], 1, 2));

// ------------------------------------------------4 masala

// strdagi harflarning necha marta takrorlanganligini topish

// function bbc(str) {

//     let sum = {}
//     for (let i = 0; i < str.length; i++) {
//       sum[str[i]] = (sum[str[i]] || 0) +1
//     }
//     return sum
// }

// console.log(bbc("javascript"));

// -------------------------------------------------5 masala

// anagramlarni tekshirish

// function bbc(str, matn) {

//   let sum = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < matn.length; j++) {
//       if (str[i] === matn[j]) {

//           sum += str[i];
//       }
//     }
//   }
//   if (sum === str) {

//     return true;
//   }
//   return false;
// }

// console.log(bbc("listen", "silent"));

// ---------------------------------------------------6 masala

// substringni topish o'zim ishlab ko'rdim o'shamadi bioz murakkablik qildi
//  jtdan oldim tushunishga harakat qildim lekin juda chalkashdek ko'rindi
// baki darsda o'zingiz biroz tushuntirib berarsiz

// function bbc(str) {
//   let sum = "";
//   for (let i = 0; i < str.length; i++) {
//     let string = "";
//     for (let j = i; j < str.length; j++) {

//       let harf = str[j];

//       let takror = false;

//       for (let k = 0; k < string.length; k++) {
//           console.log(k);
//         if (string[k] === harf) {

//           takror = true;
//           break;
//         }
//       }
//       if (takror) {
//         break;
//       } else {
//         string += harf;
//       }
//     }
//     if (string.length > sum.length) {
//       sum = string;
//     }
//   }
//   return sum;
// }

// console.log(bbc("abcabcbb"));

// --------------------------------------------------7 masala

// // kadine algaritmi

// function bbc(arr) {
//   let sum = [];
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i] + arr[i + 1], "son" + arr[i], "keyingi" + arr[i + 1]);

//     if (arr[i] + arr[i + 1] >= 0) {
//       sum.push(arr[i + 1]);
//     } else {
//       if (sum.length > 0) {
//         res.push(sum);
//         sum = [];
//       }
//     }
//   }
//   let total = {};
//   let yigindi = 0;
//   for (let j = 0; j < res.length; j++) {
//     let item = res[j];
//     yigindi = 0;
//     for (let i = 0; i < item.length; i++) {
//       yigindi = yigindi += item[i];
//       total[j] = yigindi;
//       console.log(item[i]);
//     }
//   }
//   let objArr = Object.values(total);
//   let katta = 0;
//   for (let i = 0; i < objArr.length; i++) {
//     if (katta < objArr[i]) {
//       katta = objArr[i];
//     }
//   }
//   let objtotal = {};

//   for (const key in total) {
//     if (total[key] === katta) {
//       objtotal[key] = total[key];
//     }
//   }
//   let natija = [];
//   for (const key in objtotal) {
//     natija.push(key);
//   }

//   return res[natija];
// }

// console.log(bbc([-2, 1, -3, 4, -1, 2, 1, -5, 4, 3, -2]));

// ------------------------------------------------------8 masala

// array ichida kiritilgan yig'indiga teng bo'lgan ikkita elementni topish

// function bbc(arr, yigindi) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === yigindi) {
//         sum.push(arr[i], arr[j]);
//       }
//     }
//   }

//   return sum;
// }

// console.log(bbc([2, 7, 11, 15], 22));

// -------------------------------------------------9 masala

// array ichidagi sonlarni ketma ketligini topish

// function bbc(arr) {
//   let sum = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       sum.push(arr[i]);
//     } else {
//         sum.push(arr[i]);
//       result.push(sum);
//       sum = [];
//     }
//   }
//   let total = 0
//   for (let i = 0; i < result.length; i++) {
//    if (total < result[i].length) {
//     total = result[i].length
//    }
//   }
//   for (let i = 0; i < result.length; i++) {
//    if (result[i].length === total) {
//     result = result[i]
//    }
//   }
//   return result
// }

// console.log(bbc([1, 4, 200, 6, 7, 5, 4]));

// ---------------------------------------------------10 masala

// arraydagi musbat va manfiy bsonlarni alohida yiging va objektda qaytaring

// function bbc(arr) {
//   let total = {
//     positiveSum: 0,
//     negativeSum: 0,
//   };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total.positiveSum += arr[i];
//     } else {
//       total.negativeSum += arr[i];
//     }
//   }

//   return total;
// }

// console.log(bbc([1, -2, 3, -4, 5]));

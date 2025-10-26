// console.log("Hello from Qudrat");

// ---------------------------------------------------1 masala

// Arraydagi sonlarni faqat musbat bilan almashtirib
// juftlarni kvadratga ko'tarib yig'indisini topisk

// function bbc(arr) {
//   let sum = [];

//   arr.forEach((item) => {
//     if (item < 0) {
//       sum[sum.length] = item = -item;
//     } else {
//       sum[sum.length] = item;
//     }
//   });
//   let result = [];
//   for (let i = 0; i < sum.length; i++) {
//     if (sum[i] % 2 === 0) {
//       result[result.length] = sum[i] * sum[i];
//     }
//   }
//   let summa = 0;
//   for (let j = 0; j < result.length; j++) {
//     summa += result[j];
//   }
//   return summa;
// }

// console.log(bbc([-2, 3, -4, -5, -6]));

//--------------------------------------------------------------- 2 masala

// ikki arraydagi qiymatlat birontasi bir xil bo'lsa false qaytarsin
//  aks holda true

// function bbc(array, arr) {
//     let sanash = 0
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (array[i] === arr[j]) {
//         sanash++
//       } 
      
//     }
//   }
//   return sanash === 0 ? true : false;
// }

// console.log(bbc([1, 2, 3, 4], [0, 6]));

// --------------------------------------------------------3 masala

// sortlash teskari qilish va Array uzunligich nodejsni chiqarish

// function bbc(arr, array, str) {
//   let sum = [];
//   arr.push(...array);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         sum = arr[j];
//         arr[j] = arr[j + 1]
//         arr[j + 1] = sum
//       }
//     }
//   }
//   let form = []
//   for (let i = arr.length -1; i >= 0; i--) {
//     form[form.length] = arr[i]
//   }

//   let forJS = []
//   for (let j = 0; j < arr.length; j++) {
//    forJS[forJS.length] = str
//   }
//   return [[arr], [form], [forJS]]
// }

// console.log(bbc([1, 10], [2, 3, 4], "nodejs"));

//--------------------------------------------------------------------- 4 masala

// ikkiga bo'lib sonlarni chiqaring

// function bbc(son) {
//     let sum = son / 2
//     let num = son / 2

//     return [Math.floor(sum), Math.ceil(num)]
// }

// console.log(bbc(-9));

//--------------------------------------------------------- 5  masala

// stringni sortlash  // jptidan oldim

// function bbc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {

//     for (let j = 0; j < arr.length - i - 1; j++) {

//       if (arr[j].length > arr[j + 1].length) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }

// bbc(["a", "ccc", "dddd", "bb"]);

//------------------------------------------------------------- 6 masala

// har bir Element ikki barobar oshirish va juftlarini sortlash

// function bbc(arr) {
//   let sum = [];
//   let toq = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum[sum.length] = arr[i] * arr[i];

//       for (let j = 0; j < sum.length; j++) {
//         for (let k = 0; k < sum.length; k++) {
//           if (sum[k] > sum[k + 1]) {
//             let item = sum[k];
//             sum[k] = sum[k + 1];
//             sum[k + 1] = item;
//           }
//         }
//       }
//     }
//     else {toq.push(arr[i] * arr[i]);}
//   }
//   return [...sum, ...toq]
// }

// console.log(bbc([9, 6, 1, 4, 5, 8, 3, 2, 7]));

// ------------------------------------------------------7 masala

// ikki barobar oshirish va juftlarni kvga ko'tarish

// function bbc(arr) {
//   let sum = [];
//   let kv = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum[sum.length] = arr[i] * 2 * arr[i] * 2;
//     } else {
//       sum[sum.length] = arr[i] * 2;
//     }
//   }

//   return sum;
// }

// console.log(bbc([9, 6, 1, 4, 5, 8, 3, 2, 7]));

//------------------------------------------------------------- 8 masala

// teskari aylantirish qiymatlari bilan
// teskari aylantira oldim-u arrayga sololmadim va jptdan so'radim

// function bbc(arr) {
//   let sum = [];

//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       sum[sum.length] = arr[i][j];
//     }
//     result[result.length] = sum;
//     sum = [];
//   }
//   return result;
// }

// console.log(
//   bbc([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// --------------------------------------------------9 masala

// sonni stringa aylantirish

// function bbc(bir, ikki) {
//   let sum = [];

//   let obj = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     0: "zero",
//   };

//   if (bir < ikki) {
//     for (let i = bir; i <= ikki; i++) {
//       sum[sum.length] = i;
//     }
//   } else {
//     for (let i = ikki; i <= bir; i++) {
//       sum[sum.length] = i;
//     }
//   }
//   return sum.map((item) => obj[item]);
// }

// console.log(bbc(1, 5));

// -------------------------------------------------10 masala

// arrayni 3 xonadan bo'lish nechi xonali bo'lsa ham kambinatsiya qilingan

// function bbc(arr) {
//   let sum = [];
//   let result = [];
//   let bir = [];
//   let ikki = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr.length % 3 === 1 && bir.length === 0) {
//       bir[bir.length] = arr[arr.length - 1];
//     } else if (arr.length % 3 === 2 && ikki.length === 0) {
//       (ikki[ikki.length] = arr[arr.length - 2]),
//         (ikki[ikki.length] = arr[arr.length - 1]);
//     }
//     if (sum.length < 3) {
//       sum[sum.length] = arr[i];
//     } else {
//       result[result.length] = sum;
//       sum = [];
//       i--;
//     }
//   }

//   result[result.length] = arr.length % 3 === 2 ? ikki : bir;

//   let total = [];
//   if (arr.length % 3 === 0) {
//     function mmm(sms) {
//       for (let i = 0; i < sms.length - 1; i++) {
//         total[total.length] = sms[i];
//       }
//     }
//     mmm(result);
//   }
//   let tamomlovchi = arr.length % 3 === 0 ? total : result;
//   return tamomlovchi;
// }

// console.log(bbc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

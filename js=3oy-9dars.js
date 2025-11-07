// // ----------------------------------------1 masala

// arraydagi sonlarni yig'indisi keyingi argumetdagi qiymatga eng yaqinini topish

// function bbc(arr, yaqin) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum.push([[i, j], [arr[i], arr[j]], [arr[i] + arr[j]]]);
//       //   console.log([[i, j], [arr[i], arr[j]], [arr[i] + arr[j]]]);
//     }
//   }
//   let taqqoslash = [];
//   for (const element of sum) {
//     element[2] = element[2] - yaqin;
//     taqqoslash.push(element);
//   }
//   //   console.log(taqqoslash);

//   let kichik = sum[0][2];
//   let minus = [];

//   for (let i = 0; i < sum.length; i++) {
//     if (kichik >= 0 && sum[i][2] >= 0) {
//       if (kichik >= sum[i][2]) {
//         kichik = sum[i][2];
//       }
//     } else {
//       minus.push(sum[i]);
//     }
//   }
//   let little = minus;
//   for (let i = 0; i < minus.length; i++) {
//     if (little[0][2] < minus[i][2]) {
//       little = minus[i];
//     }
//   }
//   let p = little[0][2];

//     // console.log(little);

//   let plus = (p = -p);

//   let result = [];
//   for (const element of sum) {
//     if (element[2] === kichik) {

//         // console.log(little);
//         // console.log(element);

//       if (plus === 0) {
//         result[result.length] = little[1];
//       } else if (element[2] === 0) {
//         result[result.length] = element[1];
//       } else if (plus <= element[2]) {

//         result[result.length] = little[0][1];
//       } else {
//         result[result.length] = element[1];
//       }
//     }
//   }

//   return result.flat(1);
// }

// console.log(bbc([21, 43, 11, 45, 4, 32, 54], 35));

// ----------------------------------------2 masala

// arraydagi birinchi uchragan juft songa ortirib boruvchi dastur tuzing

// function bbc(arr) {
//     let sum = 0
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//     sum = arr[i]
//     break
//    }
// }
// let yangiArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         yangiArr.push(arr[i] += sum)
//     } else {
//         yangiArr.push(arr[i])
//     }
// }
// return yangiArr
// }

// console.log(bbc([1, 4, 5, 2, 33, 1, 8, 22]));

// ----------------------------------------3 masala

// arraydagi har bir toq sonni arrayning oxiridagi toq songa orttiruvchi dastur tuzing

// function bbc(arr) {
//   let sum = [];
//   let res = [];
//   let toq = arr[arr.length - 1];
//   if (toq % 2 !== 0) {
//     for (let i = 0; i < arr.length; i++) {
//       let belgi = arr[i];
//       if (belgi % 2 !== 0) {
//         sum.push((belgi += toq));
//       }
//     }
//   }else {sum.push(arr)}
//   return sum;
// }

// console.log(bbc([2, 55, 2, 21, 44, 2, 1]));

// --------------------------------------------------------4 masala

// arraydagi eng katta va eng kichik sonlarni o'rnini almashtirish

// function bbc(arr) {
//   let katta = 0;
//   let kichik = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let belgi = arr[i];
//     if (katta < belgi) {
//       katta = belgi;
//     }
//     if (kichik > belgi) {
//       kichik = belgi;
//     }
//   }
//   let yangi = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === katta) {
//       yangi.push(kichik);
//     } else if (arr[i] === kichik) {
//       yangi.push(katta);
//     } else {
//       yangi.push(arr[i]);
//     }
//   }

//   return yangi;
// }

// console.log(bbc([23, 43, 12, 56, 64]));

// --------------------------------------------------------5 masala

// arraydagi eng katta va eng kichik elementlarni orasini 0 ga tenglang

// function bbc(arr) {
//   let katta = 0;
//   let kichik = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let belgi = arr[i];
//     if (katta < belgi) {
//       katta = belgi;
//     }
//     if (kichik > belgi) {
//       kichik = belgi;
//     }
//   }

//   let minIndex = arr.indexOf(kichik);
//   let maxIndex = arr.indexOf(katta);

//   let kichikIndex = minIndex < maxIndex ? minIndex : maxIndex;
//   let kattaIndex = minIndex > maxIndex ? minIndex : maxIndex;
//   console.log(kichikIndex);

//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (i > kichikIndex && i < kattaIndex) {
//       obj[i] = 0;
//       // console.log(obj[i]);
//     } else {
//       obj[i] = arr[i];
//       // console.log(obj[i]);
//     }
//   }
  
//   let result = Object.values(obj);

//   return result;
// }

// console.log(bbc([2, 54, 4, 11, 1, 34, 11]));

// ----------------------------------------------------6 masala

// arraydagi eng katta va eng kichik elementlarni orasini teskari tartibda chiqarish

// function bbc(arr) {
//   let katta = 0;
//   let kichik = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let belgi = arr[i];
//     if (katta < belgi) {
//       katta = belgi;
//     }
//     if (kichik > belgi) {
//       kichik = belgi;
//     }
//   }

//   let minIndex = arr.indexOf(kichik);
//   let maxIndex = arr.indexOf(katta);

//   let kichikIndex = minIndex < maxIndex ? minIndex : maxIndex;
//   let kattaIndex = minIndex > maxIndex ? minIndex : maxIndex;

//   let sum = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > kichikIndex && i < kattaIndex) {
//       sum.unshift(arr[i]);
//     } else if (i === kattaIndex) {
//       sum.push(arr[i]);
//       result.push(sum);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   let array = result.flat(Infinity);
//   return array;
// }

// console.log(bbc([2, 54, 4, 11, 1, 34, 11]));

// ------------------------------------------------------7 masala

// ikkinchi argumetdagi index bo'yicha arraydan ibtta element o'chirish

// function bbc(arr, ochirish) {

//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== ochirish) {
//             sum.push(arr[i])
//         }
//     }
// return sum
// }

// console.log(bbc([54, 23, 65, 12], 1));

// ----------------------------------------------------8 masala

// array elementlari orasidagi bir xil qo'shni elamentlarni o'chirish

// function bbc(arr) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       i++;
//     } else {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }

// console.log(bbc([12, 43, 43, 23, 23, 54, 12, 23]));

// -------------------------------------------------------9 masala

// arrayda elementlar 3 martadan kam uchraganini o'chiruvchi dastur yozing

// function bbc(arr) {
//   let sanash = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   for (const key in obj) {
//     if (obj[key] === 3) {
//       sanash.push(+key);
//     }
//   }
//   return sanash;
// }

// console.log(bbc([12, 12, 44, 54, 44, 44, 2, 22, 2, 2]));

// ----------------------------------------------------------10 masala

// // arraydagi juft elementlarni indexni bir biriga qo'shing

// function bbc(arr) {
//   let summa = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }
//   for (const key in obj) {
//     if (obj[key] % 2 === 0) {
//       summa.push(+key);
//     }
//   }
//   let sum = "";
//   for (let i = 0; i < summa.length; i++) {
//     if (sum === "") {
//       sum = `${summa[i]} `;
//     } else {
//       sum += `+ ${summa[i]} `;
//     }
//   }
//   return sum;
// }

// console.log(bbc([2, 43, 53, 23, 22, 53, 88, 10]));

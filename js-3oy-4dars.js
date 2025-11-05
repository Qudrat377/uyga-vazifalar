//----------------------------------------- 1 masala

// palindromlarning uzunini topish

// function bbc(str) {
//   let strin = [];
//   let hozircha = "";
//   let ikki = [];
//   for (let i = 0; i < str.length; i++) {
//     hozircha += str[i];
//     strin[strin.length] = hozircha;  //[ 'b', 'ba', 'bab', 'baba', 'babad' ]
//   }

//   for (const element of strin) {
//     let bir = "";
//     for (let j = element.length - 1; j >= 0; j--) {
//       bir += element[j];
//     }
//     ikki[ikki.length] = bir;  //[ 'b', 'ab', 'bab', 'abab', 'dabab' ]
//   }
//   let sum = "";
//   for (let i = 0; i < strin.length; i++) {
//     for (let j = 0; j < ikki.length; j++) {
//       if (strin[i] === ikki[j])
//         if (sum.length < ikki[j].length) {
//           sum = ikki[j];
//         }
//     }
//   }

//   return sum
//   ;
// }

// console.log(bbc("babad"));

// ------------------------------------------------2 masala

// ikkinchi argumetchalik qirqib birinchi argumetni ortidan qo'shib qo'yish

// function bbc(arr, qirqish) {
//   let sum = [];
//   let hozircha = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > qirqish) {
//       sum.push(arr[i]);
//     } else {
//       hozircha[hozircha.length] = arr[i];
//     }
//   }
//   let result = [...sum, ...hozircha];

//   return result;
// }

// console.log(bbc([1, 2, 3, 4, 5], 2));

// -------------------------------------------3 masala

// ikkinchi argumetdagi sonni hosil qilgan elementlarni indexni toping

// function bbc(arr, ikki) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === ikki) {
//         // sum[sum.length] = arr[i], sum[sum.length] = arr[j]
//         sum.push(i), sum.push(j);
//       }
//     }
//   }
//   return sum;
// }

// console.log(bbc([2, 7, 11, 15], 9));

// ------------------------------------------------4 masala

// birinchidagi sonlar yi'ingisi ikkinchi argumetdagiga teng bo;lsa true qaytarsin

// function bbc(arr, ikki) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum += arr[i];
//   }
//   if (sum === ikki) {
//     return true;
//   }

//   return false;
// }

// console.log(bbc([2, 4, 1], 7));

// ---------------------------------------------5 masala

// ikki arrayni bir biriga solishtiring
// o'zim ishladim lekin nimaga to'g'ri ishlayotganiga tushunmadim (:

// function bbc(arr, array) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (arr[i] !== array[j]) {
//           i++;
//           sum.push(arr[i]);
//           sum.push(array[j]);
//       }
//     }
//   }
//   return sum;
// }

// console.log(bbc([2, 4, 1], [2, 3, 8]));

// ------------------------------------------------6 masala

// array Elementlidan eng ko'p uchraganini topish

// function bbc(arr) {

//     let sum = {}
//     let sanash = 0

// for (const element of arr) {
//     sum[element] = (sum[element] || 0) + 1  // bu yerda valueni qiymatini oshiryapmiz
// }
// let kattaQiymat = 0
// let shuSondan = null

// for (const key in sum) {
//   let son = sum[key]
//   if (son > kattaQiymat) {
//     kattaQiymat = son
//     shuSondan = key
//   }

// }

// return +shuSondan
// }

// console.log(bbc([1, 3, 1, 3, 2, 1]));

// ------------------------------------------------7 masala

// strindagi sonlarga 1 ni qo'shing

// function bbc(str) {
// let sum = []
// let harf = ""
// for (let i = 0; i < str.length; i++) {
//    if (str[i] > 0) {
//     sum.push(+str[i] + 1)
//    }else{
//     harf += str[i]
//    }
// }
// for (let i = 0; i < sum.length; i++) {
//  harf +=  sum[i]
// }
// return harf
// }

// console.log(bbc("abc123"));

// ------------------------------------------------8 masala

// eng uzun ortib boruvchi bo'limni topish

// function bbc(arr) {
//   let sum = 0;
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       sum++;
//     } else {
//       array.push((sum += 1));
//       sum = 0;
//     }
//   }
//   let result = 0
// for (let i = 0; i < array.length; i++) {
//    if (array[0] <= array[i])
//     result = array[i]
// }

//   return result;
// }

// console.log(bbc([10, 20, 30, 10, 40, 50, 52, 55, 6]));

// ------------------------------------------------9 masala

// arraydagi takroriy elementlar soni

// function bbc(arr) {

//     let sum = {}
//     for (const element of arr) {
//         sum[element] = (sum[element] || 0) + 1
//     }
// return sum
// }

// console.log(bbc([1, 2, 2, 3, 4, 4, 4, 5]));

// ------------------------------------------------10 masala

// // ichma ich arraylarni yig'indisini topish

// function bbc(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }

//   return sum;
// }

// console.log(
//   bbc([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

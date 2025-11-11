//----------------------------------- 1 masala

function bbc(arr) {
  let sum = [];
  let katta = 0;
  let kichik = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
    
    }
  }
  return sum;
}

console.log(bbc([3, 1, 4, 1, 5, 9, 2]));



// function sumarr(arr) {
//     let sum = arr[0]
//     let res =[]
//     for (let i = 0; i < arr.length; i++) {
//         if (sum<arr[i]+1) {
//             res.push(arr[i])
            
//         }if (sum>arr[i]+1) {
//             res.push(arr[i])
//         }
//     }return res.reverse()
// }
// console.log(sumarr([3,1,4,1,9,2]));

// -------------------------------------2 masala

// stringdagi so'zlarni uniq qilish

// function bbc(str) {
//   let sum = [];
//   let soz = str.split(" ");
//   for (let i = 0; i < soz.length; i++) {
//     if (!sum.includes(soz[i])) {
//       sum.push(soz[i]);
//     }
//   }

//   return sum;
// }

// console.log(bbc("apple banana apple orange banana orange grape"));

//-------------------------------------------------- 3 masala

// arrayda ichidagi eng uzun so'zni topish

// function bbc(arr) {
//   let sum = {};
//   let kattasi = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum[arr[i]] = arr[i].length;
//   }
//   for (const key in sum) {
//     if (kattasi < sum[key]) {
//       kattasi = sum[key];
//     }
//   }
//   for (const key in sum) {
//     if (kattasi === sum[key]) {
//       arr = key;
//     }
//   }

//   return arr;
// }

// console.log(bbc(["apple", "banana", "gradefruit", "kiwi"]));

//------------------------------------------- 4 masala

// birinchi argumetda berilgan stringni ikkinchi argumet chalik ko'paytirish

// function bbc(str, marta) {
//   let sum = "";
//   for (let i = 0; i < marta; i++) {
//     sum += str;
//   }
//   return sum;
// }

// console.log(bbc("salom", 3));

//--------------------------------------------- 5 masala

// ikki array orasidagi umumiy elementlarni toping

// function bbc(arr, arr1) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr[i] === arr1[j]) {
//         sum.push(arr[i]);
//       }
//     }
//   }
//   return sum;
// }

// console.log(bbc([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

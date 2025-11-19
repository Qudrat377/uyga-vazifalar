// -------------------------------1 masala

// const path = require("path")

// let arrPath = path.join("/home", "user", "documents")

// let arrPathh = path.join("notes.txt")

// let arr = path.join(arrPath, arrPathh)

// console.log(arr);

// -----------------------------------2 masala

// const path = require("path")

// const files = ["document.pdf", "photo.jpeg", "archive.zip"]

// let sum = ""
// for (const file of files) {
//     sum = path.extname(file)
//     console.log(sum);
// }

// --------------------------------------3 masala

// const path = require("path")

// const orginalPath = "D:/movie/harror/movie.mkv"

// let sum = path.resolve(orginalPath)

// let str = sum.replace("D", "E")

// console.log(str);

// ------------------------------------------4 masala

// qay birisini olishni bilmadim shunga ikkalasini ham yozdim

// const path = require("path")

// const orginalPath = "D:/movie/harror/movie.mkv"

// let sum = path.parse(orginalPath)

// console.log(sum.dir);

// const os = require("os")

// console.log(os.homedir());

// ---------------------------------------------5 masala

// const os = require("os");

// let sum = os.networkInterfaces();

// function bbc(sum) {

//     let obj = {ip : null,
//         mac: null
//     }
//     for (const key in sum) {
//       for (const belgi of sum[key]) {
//         for (const key in belgi) {
//                 obj.ip = belgi.address
//                 obj.mac = belgi.mac
//         }
//       }
//     }
//     return console.log(obj);
    
// }

// bbc(sum)


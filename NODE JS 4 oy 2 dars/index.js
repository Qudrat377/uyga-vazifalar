//-------------------------------------------- 1 masala

// const {qoshish, minus} = require("./home")

// console.log(qoshish(1, 2, 3, 4));

// console.log(minus(11, 2));

// -----------------------------------------------2 masala

// // // 1 shart

// // fayl yaratish va ichiga malumot yozish

// const fs = require("fs")

// fs.writeFileSync("info.html", "Assalomu alaykum")

// // // 2 shart

// // fayldagi malumotlarni o'qish

// const fileSistem = require("fs")

// const soz = fileSistem.readFileSync("info.html", "utf-8")

// console.log(soz);

// -------------------------------------------------------3 masala

// const fs = require("fs");

// function bbc() {
//   let sum = [];
//   for (let i = 0; i < 10; i++) {
//     sum.push(Math.floor(Math.random() * 10));
//   }

//   fs.appendFileSync("sonlar.js", `[${sum}]`);
// }

// bbc();

// const soz = fs.readFileSync("sonlar.js", "utf-8");

// console.log(soz);

// ---------------------------------------4 masala

// const fs = require("fs")

// fs.mkdirSync("html")

// fs.appendFileSync("html/index.html", "Assalomu alaykum")

// fs.mkdirSync("static")

// fs.appendFileSync("static/script.js", "Assalomu alaykum")

// fs.appendFileSync("static/script.ts", "Assalomu alaukum")

// fs.appendFileSync("static/style.css", "body {margin: auto}")

// fs.appendFileSync("static/go.mod", "Hello world")

// fs.appendFileSync("static/go.sum", "Salom dunyo")

// fs.appendFileSync("static/goalang-todo-app", "applecation")

// fs.appendFileSync("static/main.go", "Assalomu alaykum")

// fs.appendFileSync("static/README.md", "go to git hub")

// fs.appendFileSync("static/tsconfig.json", "// Typescript")
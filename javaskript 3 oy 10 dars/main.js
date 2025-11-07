//----------------------------------------- 1 masala

// -------------------------------------------posts

// const elBox = document.querySelector(".box");

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     data.forEach((item) => {
//       const html = `
//         <article>
//           <h4>ID: ${item.id}</h4>
//           <h4>Title: ${item.title}</h4>
//           <h4>Body: ${item.body}</h4>
//       </article>
//     `;
//       elBox.insertAdjacentHTML("beforeend", html);
//     });
//   })
//   .catch((err) => console.log("xatolik", err));

//   ---------------------------------------------------2 masala

// ------------------------------------------comments

// const elBox = document.querySelector(".box");

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//       const donasi = data[i];

//       const ekranga = `
//             <article>
//           <h4>ID: ${donasi.id}</h4>
//           <h4>Name: ${donasi.name}</h4>
//           <h4>Email: ${donasi.email}</h4>
//           <h4>Body: ${donasi.body}</h4>
//       </article>
//         `;
//       elBox.insertAdjacentHTML("beforeend", ekranga);
//     }

//   })
//   .catch((err) => console.log(err));

// ------------------------------------------------------------3 masala

// const elBox = document.querySelector(".box")

// fetch(`https://jsonplaceholder.typicode.com/albums`)
// .then((res) => res.json())
// .then((baza) => {
//     console.log(baza);
//     for (const shtuk of baza) {
//         const ekranga = `
//             <article>
//           <h4>ID: ${shtuk.id}</h4>
//           <h4>Title: ${shtuk.title}</h4>
//       </article>
//         `
//         elBox.insertAdjacentHTML("beforeend", ekranga)
//     }
// })
// .catch((err) => console.log(err))

// ----------------------------------------------4 masala

// -------------------------------------Photos

// const elBox = document.querySelector(".box")

// fetch(`https://jsonplaceholder.typicode.com/photos`)
// .then((res) => res.json())
// .then((fotos) => {
//     fotos.map((item) => {
//         console.log(item);

//         const ekranga = `
//                     <article>
//           <h4>ID: ${item.id}</h4>
//           <h4>Title: ${item.title}</h4>
//           <a href= ${item.url}> URL </a>
//           <br><br>
//           <a href= ${item.thumbnailUrl}> ThumbnailUrl </a>
//       </article>
//         `
//         elBox.insertAdjacentHTML("beforeend", ekranga)
//     })
// })
// .catch((err) => console.log("Photos xatoligi", err))

// ------------------------------------------5 masala

// ----------------------------------------Todos

// const elBox = document.querySelector(".box");

// fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((res) => res.json())
//   .then((basa) => {
//     console.log(basa);

//     for (let i = 0; i < basa.length; i++) {
//       const harBiri = basa[i];
//       const ekranga = `
//                   <article>
//                   <h4>ID: ${harBiri.id}</h4>
//                   <h4>Title: ${harBiri.title}</h4>
//                   <h4>completed: ${harBiri.completed}</h4>
//       </article>
//       `
//       elBox.insertAdjacentHTML("beforeend", ekranga)
//     }
//   })
//   .catch((err) => log("Todos xatoligi", err));

// -----------------------------------------------------6 masala

// ----------------------------------------------Users

// const elBox = document.querySelector(".box");

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((result) => result.json())
//   .then((users) => {
//     console.log(users);

//     for (let i = 0; i < users.length; i++) {
//       const sum = users[i];

//       const monitor = `
//                         <article>
//                   <h4>ID: ${sum.id}</h4>
//                   <h4>Name: ${sum.name}</h4>
//                   <h4>Username: ${sum.username}</h4>
//                   <h4>Email: ${sum.email}</h4>
//                   <h4>City: ${sum.address.city}</h4>
//                   <h4>Lat: ${sum.address.geo.lat}</h4>
//                   <h4>Lng: ${sum.address.geo.lng}</h4>
//                   <h4>Street: ${sum.address.street}</h4>
//                   <h4>Suite: ${sum.address.suite}</h4>
//                   <h4>Zipcode: ${sum.address.zipcode}</h4>
//                   <h4>Phone: ${sum.phone}</h4>
//                   <h4>Website: ${sum.website}</h4>
//                   <h4>Company: ${sum.company.name}</h4>
//                   <h4>CatchPhrase: ${sum.company.catchPhrase}</h4>
//                   <h4>bs: ${sum.company.bs}</h4>
//       </article>
//       `
//       elBox.insertAdjacentHTML("beforeend", monitor)
//     }
//   })
//   .catch((error) => console.log(error.message))

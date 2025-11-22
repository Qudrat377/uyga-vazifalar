const http = require("http");

const { read_file, write_file } = require("./file-manager/file-manager");

const app = http.createServer((req, res) => {
  // cars
  if (req.url === "/get_all_cars" && req.method === "GET") {
    const fileData = read_file("cars.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_cars" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("cars.json");

      fileData.push(data);
      write_file("cars.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new cars",
        })
      );
    });
  }

  // animal
  if (req.url === "/get_all_animal" && req.method === "GET") {
    const fileData = read_file("animal.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }

  // post
  if (req.url === "/add_animal" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("animal.json");

      fileData.push(data);
      write_file("animal.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new animal",
        })
      );
    });
  }

//     // fruit
  if (req.url === "/get_all_fruit" && req.method === "GET") {
    const fileData = read_file("fruit.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_fruit" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("fruit.json");

      fileData.push(data);
      write_file("fruit.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new fruit",
        })
      );
    });
  }

//     // phone
  if (req.url === "/get_all_phone" && req.method === "GET") {
    const fileData = read_file("phone.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_phone" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("phone.json");

      fileData.push(data);
      write_file("phone.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new phone",
        })
      );
    });
  }

    // notebook
  if (req.url === "/get_all_notebook" && req.method === "GET") {
    const fileData = read_file("notebook.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_notebook" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("notebook.json");

      fileData.push(data);
      write_file("notebook.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new notebook",
        })
      );
    });
  }

      // flovers
  if (req.url === "/get_all_flovers" && req.method === "GET") {
    const fileData = read_file("flovers.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_flovers" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("flovers.json");

      fileData.push(data);
      write_file("flovers.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new flovers",
        })
      );
    });
  }

      // city
  if (req.url === "/get_all_city" && req.method === "GET") {
    const fileData = read_file("city.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  // post
  if (req.url === "/add_city" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("city.json");

      fileData.push(data);
      write_file("city.json", fileData);

      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Added new city",
        })
      );
    });
}

});

app.listen(3434, () => {
  console.log("server is ranning at: 3000");
});

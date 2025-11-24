const http = require("http");
const {
  malumot_oqish,
  malumot_yozish,
} = require(`./file-manager/file-manager`);
const uuid = require("uuid");

const options = {
  "content-type": "application/json",
  "Access-Control_Allow_Origin": "*",
};

const app = http.createServer((req, res) => {
  const kelganMalumotning_oxirgisini_idsi =
    req.url.split("/")[req.url.split("/").length - 1];

  // GET

  if (req.method === "GET" && req.url === "/get_malumot") {
    try {
      console.log("salom");
      const oqib_olingan_malumot = malumot_oqish("malumotlar.json");

      res.writeHead(200, options);
      res.end(JSON.stringify(oqib_olingan_malumot));
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  //   GETONE

  if (
    req.method === "GET" &&
    req.url === `/get_one_malumot/${kelganMalumotning_oxirgisini_idsi}`
  ) {
    try {
      const oqib_olingan_malumot = malumot_oqish("malumotlar.json");
      console.log(oqib_olingan_malumot);
      const topilgan_malumot = oqib_olingan_malumot.find(
        (bolak) => bolak.id === kelganMalumotning_oxirgisini_idsi
      );

      if (!topilgan_malumot) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            message: "Malumot topilmadi",
          })
        );
      }

      res.writeHead(200, options);
      res.end(JSON.stringify(topilgan_malumot));
    } catch (error) {
      res.writeHead(500, options);
      return res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // POST

  if (req.method === "POST" && req.url === "/add_malumot") {
    try {
      req.on("data", (bolak) => {
        const POSTmalumoti = JSON.parse(bolak);
        const oqib_olingan_malumot = malumot_oqish("malumotlar.json");
        const { name, from } = POSTmalumoti;

        oqib_olingan_malumot.push({ id: uuid.v4(), name, from });
        malumot_yozish("malumotlar.json", oqib_olingan_malumot);

        res.writeHead(201, options);
        res.end(
          JSON.stringify({
            message: "Yangi malumot qo'shildi",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, options);
      return res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // PUT

  if (
    req.method === "PUT" &&
    req.url === "/malumotni_Yangilash/" + kelganMalumotning_oxirgisini_idsi
  ) {
    try {
      req.on("data", (bolak) => {
        const PUTga_olingan_malumot = JSON.parse(bolak);
        const { name, from } = PUTga_olingan_malumot;

        const oqib_olingan_malumot = malumot_oqish("malumotlar.json");

        const topilgan_malumot = oqib_olingan_malumot.find(
          (item) => item.id === kelganMalumotning_oxirgisini_idsi
        );

        if (!topilgan_malumot) {
          res.writeHead(404, options);
          return res.end(
            JSON.stringify({
              message: "Malumot topilmadi",
            })
          );
        }

        oqib_olingan_malumot.forEach((item) => {
          if (item.id === kelganMalumotning_oxirgisini_idsi) {
            item.name = name ? name : item.name;
            item.from = from ? from : item.from;
          }
        });

        malumot_yozish("malumotlar.json", oqib_olingan_malumot);
        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            message: "Malumot qayta yangilandi",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // DELET

  if (
    req.method === "DELETE" &&
    req.url === "/malumotni_ochirish/" + kelganMalumotning_oxirgisini_idsi
  ) {
    try {
      const oqib_olingan_malumot = malumot_oqish("malumotlar.json");

      const topilgan_malumot = oqib_olingan_malumot.find(
        (bolak) => bolak.id === kelganMalumotning_oxirgisini_idsi
      );

      if (!topilgan_malumot) {
        res.writeHead(404, options);
       return res.end(
          JSON.stringify({
            message: "Mslumot topilmadi",
          })
        );
      }

      oqib_olingan_malumot.forEach((item, index) => {
        if (item.id === kelganMalumotning_oxirgisini_idsi) {
          oqib_olingan_malumot.splice(index, 1);
        }
      });

      malumot_yozish("malumotlar.json", oqib_olingan_malumot);
      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          message: "Malumot o'chirildi",
        })
      );
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }
});

app.listen(3434, () => {
  console.log("Server ishlab turibdi");
});

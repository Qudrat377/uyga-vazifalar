const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {
  malumot_Oqish,
  malumot_Yozish,
} = require("./malumot_sozlamalari/malumot_sozlamalari");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3007;

// ------------------------------------------animals uchun

// get

app.get("/get_all_animals", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("animals.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_animals/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("animals.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_animal", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yeguligi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("animals.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      yeguligi,
    });
    malumot_Yozish("animals.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_animal/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yeguligi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("animals.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.yeguligi = yeguligi ? yeguligi : qism.yeguligi;
      }
    });

    malumot_Yozish("animals.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_animal/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("animals.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("animals.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------brids uchun

// get

app.get("/get_all_brids", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("brids.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_brid/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("brids.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_brid", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("brids.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      rangi,
    });
    malumot_Yozish("brids.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_brid/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("brids.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.rangi = rangi ? rangi : qism.rangi;
      }
    });

    malumot_Yozish("brids.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_brid/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("brids.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("brids.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------cars uchun

// get

app.get("/get_all_cars", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("cars.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_car/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("cars.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_car", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("cars.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      rangi,
    });
    malumot_Yozish("cars.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_car/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("cars.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.rangi = rangi ? rangi : qism.rangi;
      }
    });

    malumot_Yozish("cars.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_car/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("cars.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("cars.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------citys uchun

// get

app.get("/get_all_citys", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("citys.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_city/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("citys.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_city", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, center } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("citys.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      center,
    });
    malumot_Yozish("citys.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_city/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, center } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("citys.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.center = center ? center : qism.center;
      }
    });

    malumot_Yozish("citys.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_city/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("citys.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("citys.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------dasturlash_tillari uchun

// get

app.get("/get_all_dasturlash_tillari", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("dasturlash_tillari.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_dasturlash_tili/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("dasturlash_tillari.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_dasturlash_tili", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, tezligi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("dasturlash_tillari.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      tezligi,
    });
    malumot_Yozish("dasturlash_tillari.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_dasturlash_tili/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, tezligi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("dasturlash_tillari.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.tezligi = tezligi ? tezligi : qism.tezligi;
      }
    });

    malumot_Yozish("dasturlash_tillari.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_dasturlash_tili/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("dasturlash_tillari.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("dasturlash_tillari.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------drinks uchun

// get

app.get("/get_all_drinks", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("drinks.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_drink/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("drinks.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_drink", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, litri } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("drinks.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      litri,
    });
    malumot_Yozish("drinks.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_drink/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, litri } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("drinks.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.litri = litri ? litri : qism.litri;
      }
    });

    malumot_Yozish("drinks.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_drink/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("drinks.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("drinks.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------fanlar uchun

// get

app.get("/get_all_fanlar", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("fanlar.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_fan/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("fanlar.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_fan", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, oqituvchi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("fanlar.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      oqituvchi,
    });
    malumot_Yozish("fanlar.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_fan/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, oqituvchi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fanlar.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.oqituvchi = oqituvchi ? oqituvchi : qism.oqituvchi;
      }
    });

    malumot_Yozish("fanlar.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_fan/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fanlar.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("fanlar.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------fish uchun

// get

app.get("/get_all_fish", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("fish.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_fish/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("fish.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_fish", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, kg } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("fish.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      kg,
    });
    malumot_Yozish("fish.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_fish/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, kg } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fish.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.kg = kg ? kg : qism.kg;
      }
    });

    malumot_Yozish("fish.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_fish/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fish.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("fish.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------flovers uchun

// get

app.get("/get_all_flovers", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("flovers.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_flover/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("flovers.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }
    console.log(topilgan_malumot);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_flover", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("flovers.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      rangi,
    });
    malumot_Yozish("flovers.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_flover/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("flovers.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.rangi = rangi ? rangi : qism.rangi;
      }
    });

    malumot_Yozish("flovers.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_flover/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("flovers.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("flovers.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------fruits uchun

// get

app.get("/get_all_fruits", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("fruits.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_fruit/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("fruits.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_fruit", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("fruits.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      rangi,
    });
    malumot_Yozish("fruits.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_fruit/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, rangi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fruits.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.rangi = rangi ? rangi : qism.rangi;
      }
    });

    malumot_Yozish("fruits.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_fruit/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("fruits.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("fruits.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------furniturs uchun

// get

app.get("/get_all_furniturs", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("furniturs.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_furniture/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("furniturs.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_furniture", (kelayotgan, chiqayotgan) => {
  try {
    const { moljallangan, narx } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("furniturs.json");
    postga_kelgan_malumot.push({
      id: v4(),
      moljallangan,
      narx,
    });
    malumot_Yozish("furniturs.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_furniture/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { moljallangan, narx } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("furniturs.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.moljallangan = moljallangan ? moljallangan : qism.moljallangan;
        qism.narx = narx ? narx : qism.narx;
      }
    });

    malumot_Yozish("furniturs.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_furniture/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("furniturs.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("furniturs.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------lands uchun

// get

app.get("/get_all_lands", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("lands.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_land/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("lands.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_land", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, poytaxti } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("lands.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      poytaxti,
    });
    malumot_Yozish("lands.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_land/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, poytaxti } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("lands.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.poytaxti = poytaxti ? poytaxti : qism.poytaxti;
      }
    });

    malumot_Yozish("lands.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_land/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("lands.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("lands.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------languags uchun

// get

app.get("/get_all_languags", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("languags.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_language/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("languags.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_language", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, aktivligi } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("languags.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      aktivligi,
    });
    malumot_Yozish("languags.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_language/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, aktivligi } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("languags.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.aktivligi = aktivligi ? aktivligi : qism.aktivligi;
      }
    });

    malumot_Yozish("languags.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_language/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("languags.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("languags.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------notebooks uchun

// get

app.get("/get_all_notebooks", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("notebooks.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_notebook/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("notebooks.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_notebook", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, prosesor } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("notebooks.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      prosesor,
    });
    malumot_Yozish("notebooks.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_notebook/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, prosesor } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("notebooks.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.prosesor = prosesor ? prosesor : qism.prosesor;
      }
    });

    malumot_Yozish("notebooks.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_notebook/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("notebooks.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("notebooks.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------okeans uchun

// get

app.get("/get_all_okeans", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("okeans.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_okean/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("okeans.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_okean", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, kattaligi_boyicha_orni } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("okeans.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      kattaligi_boyicha_orni,
    });
    malumot_Yozish("okeans.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_okean/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, kattaligi_boyicha_orni } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("okeans.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.kattaligi_boyicha_orni = kattaligi_boyicha_orni
          ? kattaligi_boyicha_orni
          : qism.kattaligi_boyicha_orni;
      }
    });

    malumot_Yozish("okeans.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_okean/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("okeans.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("okeans.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------phone uchun

// get

app.get("/get_all_phone", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("phone.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_phone/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("phone.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_phone", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, batareyka } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("phone.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      batareyka,
    });
    malumot_Yozish("phone.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_phone/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, batareyka } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("phone.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.batareyka = batareyka ? batareyka : qism.batareyka;
      }
    });

    malumot_Yozish("phone.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_phone/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("phone.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("phone.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------planetes uchun

// get

app.get("/get_all_planets", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("planets.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_planete/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("planets.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_planete", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, nechanchi_sayyora } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("planets.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      nechanchi_sayyora,
    });
    malumot_Yozish("planets.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_planete/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, nechanchi_sayyora } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("planets.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.nechanchi_sayyora = nechanchi_sayyora
          ? nechanchi_sayyora
          : qism.nechanchi_sayyora;
      }
    });

    malumot_Yozish("planets.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_planete/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("planets.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("planets.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------stars uchun

// get

app.get("/get_all_stars", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("stars.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_star/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("stars.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_star", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yoruglik } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("stars.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      yoruglik,
    });
    malumot_Yozish("stars.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_star/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yoruglik } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("stars.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.yoruglik = yoruglik ? yoruglik : qism.yoruglik;
      }
    });

    malumot_Yozish("stars.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_star/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("stars.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("stars.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------televizor uchun

// get

app.get("/get_all_televizor", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("televizor.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_televizor/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("televizor.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_televizor", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yili } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("televizor.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      yili,
    });
    malumot_Yozish("televizor.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_televizor/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, yili } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("televizor.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.yili = yili ? yili : qism.yili;
      }
    });

    malumot_Yozish("televizor.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_televizor/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("televizor.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("televizor.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// -----------------------------------------------------------texnika uchun

// get

app.get("/get_all_texnika", (kelayotgan, chiqayotgan) => {
  try {
    const getdagi_malumot = malumot_Oqish("texnika.json");
    chiqayotgan.status(200).json(getdagi_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// get one

app.get("/get_one_texnika/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const get_onedagi_malumot = malumot_Oqish("texnika.json");

    let topilgan_malumot = null;

    for (let i = 0; i < get_onedagi_malumot.length; i++) {
      let malumot = get_onedagi_malumot[i];
      if (malumot.id === id) {
        topilgan_malumot = malumot;
      }
    }

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiqayotgan.status(200).json(topilgan_malumot);
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// post

app.post("/add_texnika", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, nima_texnika } = kelayotgan.body;

    const postga_kelgan_malumot = malumot_Oqish("texnika.json");
    postga_kelgan_malumot.push({
      id: v4(),
      nomi,
      nima_texnika,
    });
    malumot_Yozish("texnika.json", postga_kelgan_malumot);
    chiqayotgan.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// update

app.put("/update_texnika/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { nomi, nima_texnika } = kelayotgan.body;
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("texnika.json");
    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        qism.nomi = nomi ? nomi : qism.nomi;
        qism.nima_texnika = nima_texnika ? nima_texnika : qism.nima_texnika;
      }
    });

    malumot_Yozish("texnika.json", malumot);
    chiqayotgan.status(200).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});

// delete

app.delete("/delete_texnika/:id", (kelayotgan, chiqayotgan) => {
  try {
    const { id } = kelayotgan.params;

    const malumot = malumot_Oqish("texnika.json");
    const topilgan_malumot = malumot.find((qism) => qism.id === id);

    if (!topilgan_malumot) {
      return chiqayotgan.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    for (let i = 0; i < malumot.length; i++) {
      let data = malumot[i];
      if (data.id === id) {
        malumot.splice(i, 1);
      }
    }

    malumot_Yozish("texnika.json", malumot);
    chiqayotgan.status(200).json({
      message: "O'chirildi",
    });
  } catch (error) {
    chiqayotgan.status(500).json({
      message: error.message,
    });
  }
});


// app.listen(PORT, () => {
//   console.log("Server is running at:", PORT);
// });

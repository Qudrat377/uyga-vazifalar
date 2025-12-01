const { v4 } = require("uuid");
const { malumotni_oqish, malumotni_yozish } = require("../fs/file-sistem");

// get products

const getAllProduct = async (keluvchi, chiquvchi) => {
  try {
    const malumot = malumotni_oqish("product.json");
    chiquvchi.status(200).json(malumot);
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// get one product

const getOneProduct = async (keluvchi, chiquvchi) => {
  try {
    const { id } = keluvchi.params;
    const malumot = malumotni_oqish("product.json");

    const topilgan_malumot = malumot.find((item) => item.id === id);

    if (!topilgan_malumot) {
      return chiquvchi.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    chiquvchi.status(200).json(topilgan_malumot);
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// post

const postProduct = async (keluvchi, chiquvchi) => {
  try {
    const { nomi, standart_miqdori, narxi, skidka, skidka_muddati } =
      keluvchi.body;

    const malumot = malumotni_oqish("product.json");

    malumot.push({
      id: v4(),
      nomi,
      standart_miqdori,
      narxi,
      skidka,
      skidka_muddati,
    });

    malumotni_yozish("product.json", malumot);
    chiquvchi.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// update

const updateProduct = (keluvchi, chiquvchi) => {
  try {
    const { id } = keluvchi.params;
    const { nomi, standart_miqdori, narxi, skidka, skidka_muddati } =
      keluvchi.body;
    const malumot = malumotni_oqish("product.json");

    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiquvchi.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((qism) => {
      if (qism.id === id) {
        (qism.nomi = nomi ? nomi : qism.nomi),
          (qism.standart_miqdori = standart_miqdori
            ? standart_miqdori
            : qism.standart_miqdori);
        (qism.narxi = narxi ? narxi : qism.narxi),
          (qism.skidka = skidka ? skidka : qism.skidka),
          (qism.skidka_muddati = skidka_muddati
            ? skidka_muddati
            : qism.skidka_muddati);
      }
    });

    malumotni_yozish("product.json", malumot);
    chiquvchi.status(201).json({
      message: "Malumot qayta yangilandi",
    });
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// delete

const deleteProduct = async (keluvchi, chiquvchi) => {
  try {
    const { id } = keluvchi.params;
    const malumot = malumotni_oqish("product.json");

    const topilgan_malumot = malumot.find((bolak) => bolak.id === id);

    if (!topilgan_malumot) {
      return chiquvchi.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    
    function bbc(arr, ochir) {
        let sum = [];

        for (let i = 0; i < arr.length; i++) {
            let belgi = arr[i];
            
            if (belgi.id !== ochir) {
                sum.push(belgi);
            }
        }
        return sum
    }
    
   const ochirish_funksiyasi =  bbc(malumot, id)

malumotni_yozish("product.json", ochirish_funksiyasi)
chiquvchi.status(200).json({
    message: "Malumot o'chirildi"
})

  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllProduct,
  getOneProduct,
  postProduct,
  updateProduct,
  deleteProduct
};

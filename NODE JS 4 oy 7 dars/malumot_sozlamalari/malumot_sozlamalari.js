const fs = require("fs")

const malumot_Oqish = (malumot_nomi) => {
    return JSON.parse(fs.readFileSync(`./data/${malumot_nomi}`, "utf-8"))
}

const malumot_Yozish = (malumot_nomi, malumot) => {
    return fs.writeFileSync(`./data/${malumot_nomi}`, JSON.stringify(malumot, null, 4))
}

module.exports = {
    malumot_Oqish,
    malumot_Yozish
}
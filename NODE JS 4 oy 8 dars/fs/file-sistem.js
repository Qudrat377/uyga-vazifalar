const fs = require("fs")

const malumotni_oqish = (malumot_nomi) => {
    return JSON.parse(fs.readFileSync(`./data/${malumot_nomi}`, "utf-8"))
}

const malumotni_yozish = (malumot_nomi, malumot) => {
    return fs.writeFileSync(`./data/${malumot_nomi}`, JSON.stringify(malumot, null, 4))
}

module.exports = {
    malumotni_oqish,
    malumotni_yozish
}
const fs = require("fs")

const malumot_oqish = (malumot_nomi) => {
return JSON.parse(fs.readFileSync( `./malumotlar/${malumot_nomi}`, "utf-8"))
}

const malumot_yozish = (malumot_nomi, malumot) => {
    return fs.writeFileSync(`./malumotlar/${malumot_nomi}`, JSON.stringify(malumot, null, 4))
}

module.exports = {
malumot_oqish,
malumot_yozish
}
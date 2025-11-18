// // --------------------------------1 masala

function qoshish(...a) {

let sum = a
let natija = 0
for (let i = 0; i < sum.length; i++) {
  natija += sum[i]
  
}
return natija
}

function minus(a, b) {
    return a - b
}

module.exports = {
    qoshish,
    minus,
}

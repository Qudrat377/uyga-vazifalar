const nodemailer = require("nodemailer")


const xabar_yuborish = async (email, code) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "Assomad377@gmail.com",
            pass: "gdna qmql apjf ejrc"
        }
    })
    await transporter.sendMail({
        from: "Assomad377@gmail.com",
        to: email,
        subject: "Lesson verification code",
        text: "bu kod tasdiqlash uchun",
        html: `<b style="font-size: 24px;"><b style="color: blue;">${code}</b></b>` 
    })
    .catch((error) => console.log(error))
}

module.exports = {
    xabar_yuborish
}
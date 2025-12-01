const jwt = require("jsonwebtoken");

const tekshiruvchi = (keluvchi, chiquvchi, keyingi) => {
  try {
    const bearerToken = keluvchi.headers.authorization;

    if (!bearerToken) {
      return chiquvchi.status(401).json({
        message: "Bearer token topilmadi",
      });
    }

    const token = bearerToken.split(" ");
    if (token[0] !== "Bearer") {
      return chiquvchi.status(401).json({
        message: "Bearer token talab qilinadi",
      });
    }

    if (!token[1]) {
      return chiquvchi.status(401).json({
        message: "Token topilmadi",
      });
    }

    const decode = jwt.verify(token[1], process.env.SECRET_KEY);
 
    if (decode.role !== "superadmin" && decode.role !== "admin") {
      return chiquvchi.status(403).json({
        message: "Sen admin emassan",
      });
    }

    keyingi();
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// -----------------------------------superadminligini tekshiruvchi


const superadmintekshiruvchi = (keluvchi, chiquvchi, keyingi) => {
  try {
    const bearerToken = keluvchi.headers.authorization;

    if (!bearerToken) {
      return chiquvchi.status(401).json({
        message: "Bearer token topilmadi",
      });
    }

    const token = bearerToken.split(" ");
    if (token[0] !== "Bearer") {
      return chiquvchi.status(401).json({
        message: "Bearer token talab qilinadi",
      });
    }

    if (!token[1]) {
      return chiquvchi.status(401).json({
        message: "Token topilmadi",
      });
    }

    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    if (decode.role !== "superadmin") {
      return chiquvchi.status(403).json({
        message: "Sen Superadmin emassan",
      });
    }

    keyingi();
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  tekshiruvchi,
  superadmintekshiruvchi
};

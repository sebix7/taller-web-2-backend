const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("imagen");

module.exports = { upload };

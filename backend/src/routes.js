const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post("/uploads", multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file);
  
  return res.json({ hello: "World" });
});

module.exports = routes;
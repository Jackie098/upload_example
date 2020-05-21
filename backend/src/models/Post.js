const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String, //Nome original da imagem
  size: Number,   
  key: String,    //Nome original + hash da imagem
  url: String, //Ficará a url que a imagem está contida
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
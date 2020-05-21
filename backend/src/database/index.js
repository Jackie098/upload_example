const mongoose = require('mongoose');

function mongo() {
  mongoose.connect(
    "mongodb://localhost:27017/upload",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}


module.exports = mongo();
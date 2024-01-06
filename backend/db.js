const mongoose = require("mongoose");

const mongoURI =
  "mongodb://Foody:foody123@ac-yyc1lmm-shard-00-00.3zkgdab.mongodb.net:27017,ac-yyc1lmm-shard-00-01.3zkgdab.mongodb.net:27017,ac-yyc1lmm-shard-00-02.3zkgdab.mongodb.net:27017/foody?ssl=true&replicaSet=atlas-50soql-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) {
      console.log("Error connecting to MongoDB");
    } else {
      console.log("Connected to MongoDB");
    }
  });
};

module.exports = mongoDB;

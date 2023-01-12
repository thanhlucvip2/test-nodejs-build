const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://thanhlucvip:Thanhluc123456789@thanhlucvip.toq0zfs.mongodb.net/?retryWrites=true&w=majority"
);

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "User",
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

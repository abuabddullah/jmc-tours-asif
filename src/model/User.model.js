const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: [true, "Profile Avatar is required"],
    default: "https://i.ibb.co/bNj02BN/proavatar.png",
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;

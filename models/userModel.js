import { timeStamp } from "console";

const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const Schema = mongoose.Schema();

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    email: { type: String, trim: true, require: true, maxlength: 32 },
    hashed_password: { type: String, require: true, maxlength: 32 },
    date: { type: Date, default: new Date.now.toString() },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      lastLogin: date,
      purchase: {
        id: Number,
        date: Date,
        products: {
          productID: Number,
          qunatity: Number,
          price: Number,
          address: String,
        },
      },
    },
    userCart: {
      productID: Number,
      qunatity: Number,
      price: Number,
    },
    purchaseHistory: {
      type: Array,
      default: [],
    },
  },
  { timeStamp: true }
);

// virtual fields
userScheme
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });


// model methods  
userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (e) {
      return e;
    }
  },
};
module.exports = mongoose.model("USER", userSchema);

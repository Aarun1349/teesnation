const User = require("../models/userModel");


exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: err,
      });
    }
    res.json({
      user: user,
    });
  });
};

exports.sayHi = (req, res) => {
  res.send("Hi there");
};

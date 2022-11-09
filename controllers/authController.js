const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signUp = async (req, res) => {
  try {
    const user = new User();

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.password = req.body.password;

    const userData = await user.save();

    return res.status(200).json({
      success: true,
      message: "User Successfully Added",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Not Added",
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).json({
        success: false,
        message: "Invalid Email",
      });
    }
    if (user.password !== password) {
      return res.status(422).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({
      email: user.email,
    },process.env.SECRET_KEY,{expiresIn : '24h'});

    return res.status(200).json({
      success: true,
      message: "User Successfull Login",
      data: token
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
};

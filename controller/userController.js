// const User = require('./../schema/User');
const User = require("./../schema/User");

const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = new User({
      name,
      email,
    });
    await newUser.save();

    res.json({ name, email });
  } catch (err) {
    console.log("Error");
  }
};

module.exports = { registerUser };

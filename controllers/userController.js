const { response } = require("express");
const User = require("../models/user");

const getUsers = async (request,response,auth) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return response.json({
        msg: "No User Found",
        error: false,
        users: [],
      });
    }

    return response.json({
      msg: "User Fetched",
      users,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};
const getCurrentUserDetails = async (request,response) => {
  try {
    const userid = request.user._id
    const users = await User.findById(userid);

    if (users.length === 0) {
      return response.json({
        msg: "No User Found",
        error: false,
        users: [],
      });
    }

    return response.json({
      msg: "User Fetched",
      users,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

const addUser = async (req,auth, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    return res.json({
      msg: "User Added Successfully",
      error: false,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId  = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.json({
        msg: "User Not Found",
        error: true,
      });
    }

    return res.json({
      msg: "User Updated Successfully",
      error: false,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.json({
        msg: "User Not Found",
        error: true,
      });
    }

    return res.json({
      msg: "User Deleted Successfully",
      error: false,
      user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser , getCurrentUserDetails};

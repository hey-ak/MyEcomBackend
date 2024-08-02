const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const auth = async (request, response, next) => {
  console.log("print");
  const { authorization } = request.headers;
  const decodedToken = jwt.decode(authorization, process.env.JWT_SECRET);
  if (!decodedToken) {
    return response
      .json({
        msg: "Invalid Token",
        error: true,
      })
      .status(401);
  }

  request.user = decodedToken.user;
  next();
};

module.exports = auth;

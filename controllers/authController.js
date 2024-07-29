const User = require("../models/user");


const login = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
        return response.json({
            msg:"User Not Found",
            error:true
    
        });
    }
    if (user.password !== password) {
      return response.json({
        msg:"Invalid Password",
        error:true
      });
    }

    return response.json({
        msg:"Login Successfull",
        error:false

    });
  } catch (error) {
    return response.json({
        msg:"Something Went Wrong",
        error:true

    });
  }
};

const register = async (request, response) => {
  const { email, password , firstname, lastname } = request.body;

  try {
    const existingUser = await User.findOne({
      email,
    });
    console.log(existingUser,email);

    if (existingUser) {
        return response.json({
            msg:"User Already exist",
            error:true
    
        });
    }

    const user = new User({ email, password ,firstname , lastname });
    await user.save();

    return response.json({
        msg:"New Account Created",
        error:false

    });
  } catch (error) {
    console.log(error);
    return response.json({
        msg:"Something Went Wrong",
        error:true

    });
  }
};

module.exports = { login, register };

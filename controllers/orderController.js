const Order = require("../models/order");

const getOrders = async (request, response) => {
  try {
    const orders = await Order.find({});

    if (orders.length === 0) {
      return response.json({
        msg: "No Products Found",
        error: false,
        orders: [],
      });
    }

    return response.json({
      orders,
      msg: "Fetched Products",
      error: false,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something went Wrong",
      error: true,
    });
  }
};

const addOrder = async (request, response) => {
  try {
    const {
      quantity,
      address,
      mobileNo,
      pincode,
      paymentMethod,
      country,
      userId,
      productId,
    } = request.body;

    const newOrder = new Order({
      quantity,
      address,
      mobileNo,
      pincode,
      paymentMethod,
      country,
      userId,
      productId,
    });

    await newOrder.save();

    return response.json({
      msg: "Order Placed Successfully",
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

const updateOrder = async (request, response) => {
  const { id } = request.params;
  const { status } = request.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return response.json({
        msg: "Order Not Found",
        error: false,
      });
    }
    return response.json({
      msg: "Status Changed",
      error: false,
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

module.exports = { getOrders, addOrder , updateOrder };

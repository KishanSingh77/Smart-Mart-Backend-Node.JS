const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
  ],
  quantity: [{ type: Number, default: 1 }],
  totalCost: Number,
  orderDate: {
    type: String,
    required: true,
    default:
      new Date().getMonth() +
      1 +
      "-" +
      new Date().getDate() +
      "-" +
      new Date().getFullYear()
  }
});

module.exports = mongoose.model("Order", orderSchema);

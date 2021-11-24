const mongoose = require("mongoose");

const priceDataSchema = mongoose.Schema({
  currency: { type: mongoose.Schema.Types.ObjectId },

  date: { type: String },

  price: { type: Number },
});

const PriceData = mongoose.model("priceData", priceDataSchema);

module.exports = PriceData;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("product", productSchema);
// mongoose.model('collection-products', Schema)
// export default Product;
module.exports = Product;

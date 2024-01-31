// import React from 'react'
const {products} = require("./constants/data.js");
const Product = require("./model/product-schema.js");
// import products from "./constants/data.js"


const DefaultData = async () => {
  try{
    await Product.deleteMany({});
    await Product.insertMany(products);
    //insertMany() returns promise. so here use - await
    console.log("data aaya successfully")
  }catch(error){
    console.log('Error while inserting default data', error.message);
  }
}

// export default DefaultData;
module.exports = DefaultData;

// import Product from '../model/productSchema.js';
const Product = require('../model/product-schema.js');


const getProducts = async (request, response) => {
    try{
        const products = await Product.find({});
        response.status(200).json(products);

    }catch(error){
        response.status(500).json({ message: error.message });
    }
}



//check header in network tab, that tells the body coming in backend & request url. request url mei id ko params bolte hain
const getProductById = async (request, response) => {

    try{
        const id = request.params.id;
        const product = await Product.findOne({'id': id});
        response.status(200).json(product)

    }catch(error){
        response.status(500).json({message: error.message})
    }
}





module.exports = {getProducts, getProductById}

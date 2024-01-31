const express = require('express');

const router = express.Router();
// const userSignup = require('../controller/user-controller.js');
// const userLogin = require('../controller/user-controller.js');
const { userLogin, userSignUp } = require('../controller/user-controller.js');
// import { getProductById, getProducts } from '../controller/product-controller.js';
const { getProducts, getProductById } = require('../controller/product-controller.js')
//yaha par kaun se api par (POST) aur kon se end point par (/signup)

//signup ko hit karne k baad kya karna hai ye call back a ander
router.post('/signup', userSignUp)
router.post('/login', userLogin)

router.get('/products', getProducts);

router.get('/product/:id', getProductById);


//userSignup ek callback fn hai

// export default router;
module.exports = router;



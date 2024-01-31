// import mongoose from "mongoose";
const mongoose = require('mongoose');

export const Connection = async ()=> {
    const URL="mongodb+srv://Vikram:eUvqKR0dMysZ9H3u@cluster0.yiq7c1y.mongodb.net/";
    // mongodb+srv://Vikram:eUvqKR0dMysZ9H3u@cluster0.yiq7c1y.mongodb.net/?retryWrites=true&w=majority
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("db connected successfully");
    }catch{
        console.log('Error while connecting with the db', error.message);
    }
}

export default Connection;
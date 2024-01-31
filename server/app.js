const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DefaultData = require("./default.js");
const Router = require('./routes/route.js');
const cors = require('cors');
const bodyParser = require('body-parser');



// import Connection from './database/db.js';
// const Connection = require('.//database/db.js');

const app = express();
// const PORT = 5000;

// require('./models/user')

// app.use(express.json())
// app.use(require('./routes/auth'));



// const PORT = process.env.PORT || 8000;
// const customMiddleware = (req, res, next)=>{
//   console.log("middleware executed!")
//   next()
// }

// app.use(customMiddleware);

// app.get('/', (req, res)=>{
//   console.log("home")
//   res.send("hello world")
// })

// app.get('/about', customMiddleware, (req, res)=>{
//   console.log("about")
//   res.send("about page")
// })

//express ka server bnega using listen()


dotenv.config()

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);

const PORT = 8000;

// Connection()
// mongoose
//   .connect("mongodb://localhost:27017/flipkart-clone", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log(err));



const Connection = async (username, password)=> {
  const URL=`mongodb+srv://Vikram:yB86bDzCS43L6UtR@cluster0.yiq7c1y.mongodb.net/?retryWrites=true&w=majority
  `;
  // mongodb+srv://Vikram:eUvqKR0dMysZ9H3u@cluster0.yiq7c1y.mongodb.net/?retryWrites=true&w=majority
  try{
      await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
      mongoose.set('strictQuery', false);

    // console.log("db connected successfully");
      console.log("db connected successfully");
  }catch(error){
      console.log('Error while connecting with the db', error.message);
  }
}

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`server is successfully running on PORT ${PORT}`)
);

DefaultData();

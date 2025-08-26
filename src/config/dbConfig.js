//Connecting it with the mongodb database
require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB__CONNECTION_URL = process.env.MONGO_URL;

//Establishing Connection
 mongoose.connect(MONGODB__CONNECTION_URL);

 



 
//getting connection state
const db = mongoose.connection;


//Checking the response based on the state
db.on("connected", () =>{
  console.log("Db Connection Successfull!!" );
});
db.on("error", () =>{
  console.log("Db Connection Failed!!");
});

db.on("disconnected",( ) => {
  
  console.log("MongoDB disconnected ");
  


  
});
 

module.exports = db;
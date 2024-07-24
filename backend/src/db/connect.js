const mongoose = require("mongoose");
require("dotenv").config()

const MONGODB_CONN_STRING = process.env.MONGODB_URI;

mongoose.connect("mongodb+srv://adityaakhil2324:aditya1234@cluster0.b6wkspd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MONGODB is connected successfully!")
})

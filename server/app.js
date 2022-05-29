// importing modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//app
const app=express();

//database

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED")).catch(err => console.log("DB CONNECTION ERROR",err))

//middleware
app.use(morgan("dev"));
app.use(cors({origin:true,credentials:true}));


//port
const PORT = process.env.PORT ||4000;

//listener
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); 



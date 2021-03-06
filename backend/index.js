const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("server started"))

//setup mondodb

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },
        (err)=>{
            if(err) throw err;
            console.log("Mongodb connected")
        }
    )
//router setup
app.use("/users", require("./routes/userRoutes"));

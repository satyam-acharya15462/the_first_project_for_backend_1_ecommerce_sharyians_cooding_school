import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/scatch").then(()=>{
    console.log("the database is running just fine")
}).catch((err)=>{
    console.log(`the database has some error while starting ${err}`)
})
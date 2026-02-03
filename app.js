import express from "express"
import path from "path"

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from "cookie-parser";


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname , "public")))
app.set("view engine" , "ejs")
app.use(cookieParser())

app.get("/" , (req , res)=>{
 res.send("this is a meassage")
})

app.listen(3000 , ()=>{
    console.log("the server is running as expected")
})
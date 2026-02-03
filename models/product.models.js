import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
     Name : {
        required : true, 
        type : String
    },
   
    discount  : { 
        type : Number,
        default : 0
    },

    BgColor : String,

    PanelColor : String,


    Price : Number,

    TextColor : String,

    Image : String
})

export const ProductModel = mongoose.Schema('product' , ProductSchema)
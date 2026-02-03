import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    FullName : {
        required : true, 
        type : String
    },

    Email: {
        type:String,
        required:true,
        unique : true
    },
    
    Password : {
        type : String,
        required : true,
    },

    Cart : [],

    IsAdmin : Boolean,

    Orders : {
        type : [] ,
        default: []
    },

    Contact : Number,

    picture : String
})

export const UserModel = mongoose.model("user" , UserSchema)
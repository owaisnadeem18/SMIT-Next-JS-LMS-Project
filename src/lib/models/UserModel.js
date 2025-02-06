import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    provider: String,
    profileImg: String,
    password: { type:String , 
        required: function() {
            return !this.provider
        }
    } ,
    role: {
        type: String , 
        enum: ["user" , "admin"],
        default: "user"
    }, 
    gender: String , 
    address: String
} , {timestamps: true})

export const UserModel = mongoose.models.User || mongoose.model("User" , userSchema )
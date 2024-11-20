// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     fullName: String,
//     email: { type: String, required: true },
//     provider: { type: String },
//     profileImg: { type: String },
//     password: { type: String },
//     role: { type: String, default: "user" },
//     gender: String,
//     address: String,
//   },
//   { timestamps: true }
// );

// export const userModal =
//   mongoose.models.Users || mongoose.model("Users", userSchema);


import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    fullName: String , 
    provider: {type: String } ,
    email: { type:String , required: true } ,
    profileImg: {type:String} ,
    password: {type:String} , 
    role: {type: String , default: "user"} ,
    gender: String , 
    address: String
} , {timestamps: true}

)

export const userModal = mongoose?.models?.Users || mongoose.model("Users " , userSchema)  


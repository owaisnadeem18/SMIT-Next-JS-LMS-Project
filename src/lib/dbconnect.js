// First Understand the key points: (How we need to connect the database in this file of dbConnect.js and the function of DBConnect())

// 1. Sab say pehlay aik function banay ga DBConnect() ka , us k andar mongoose.connect hoga , or chun k meray pass mongoose aik async function hay jabhi data base connect krtay huay 2 baatain bht achay say dhyan may rehni chahiyein: 
    // - You must have to use async await in your connect database function.
    // - Secondly, you are required to use "try" and "catch" in your data base connection function.

import mongoose from "mongoose";

export async function DBConnect() {

    try {
        // console.log("connection?connection => " , connection?.connection)
        console.log("Connected to dataBase ! ")
        let connection = await mongoose.connect(process.env.MONGODB_URL)
        if (connection?.connection?.readyState != 1) {
            console.log("Connection?connection => " , connection)
        }
    }
    catch(err) {
        console.log("error => " , err)
    }
}
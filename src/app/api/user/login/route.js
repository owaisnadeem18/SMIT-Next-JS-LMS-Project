import { DBConnect } from "@/lib/dbconnect";
import { UserModel } from "@/lib/models/UserModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request) {
    await DBConnect()
    const obj = await request.json()
    console.log("obj => " , obj )

    const user = await UserModel.findOne({email: obj.email})

    if (!user) {
        return Response.json({error:true , msg: "User not found ! "} , {status:400})
    }
    
    const isPasswordMatch = await bcrypt.compare((obj.password) , user.password)
    
    console.log("is password match => " , isPasswordMatch)

    if (!isPasswordMatch) {
        return Response.json({error:true , msg: "Paasword is invalid ! "} , {status:400})
    }

    // Now , let's create a token for this login API

    
    let LoginToken = jwt.sign({
        id: user._id , role: user.role
    } , process.env.JWT_TOKEN)
    
    return Response.json({
        error: false , 
        msg: "User Logged in ! " ,
        user , 
        LoginToken
    })
    
}
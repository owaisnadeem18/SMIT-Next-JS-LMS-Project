import { DBConnect } from "@/lib/dbconnect"
import { UserModel } from "@/lib/models/UserModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request) {
    await DBConnect()
    const obj = await request.json()

    const saltRounds = 10 
    const hashPassword = await bcrypt.hash(obj.password , saltRounds)

    // console.log("User Password : ", obj.password)
    // console.log("Hashed Password : ", hashPassword)

    obj.password = hashPassword

    console.log("hashed password =>" , obj.password )
    
    const user = await UserModel.findOne({email: obj.email})
    
    if (user) {
        return Response.json({error: 403 , message: "User already exists" })
    }
    
    // Now, It's time to save the user in the database:
    
    let newUser = new UserModel({...obj})
    
    newUser = await newUser.save()
    
    console.log( "User => " , user)
    console.log("obj => " , obj)

    // Now , let's create a json web token for it: 

    let token = jwt.sign({
        id: newUser._id , role: newUser.role
    } , process.env.JWT_TOKEN)

    return Response.json({
        error: false , 
        msg: "User added !" , 
        user: newUser, 
        token 
    })
}

export async function GET() {
   return Response.json("User get request ! ")
}
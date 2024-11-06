import { createDB } from "@/lib/dbconnect";
import { userModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req) {
    await createDB();
    const obj = await req.json();
    console.log("log-in object => ", obj);

    const user = await userModal.findOne({ email: obj.email })

    if (!user) {
        return Response.json({error: true , msg: "User Not Found" } , { status:404 } )
    } 

    console.log(user)

    const isPasswordMatch = await bcrypt.compare(obj.password , user.password)

    if (!isPasswordMatch)  {
        return Response.json({error: true , msg: "Password is incorrect , pls enter the corect one" } , { status:400 })
    } 

    console.log("Is password matches ? -> " , isPasswordMatch)

    
  const token = jwt.sign({ id : user._id , role: user.role } , process.env.JWT_Token );



    return Response.json({
        error: false , 
        msg: "User Logged in successfuly",
        user,
        token 
    } , {status:200})
}
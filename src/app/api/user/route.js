import { createDB } from "@/lib/dbconnect";
import { userModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req) {
  await createDB();
  const obj = await req.json();
  console.log("object =>", obj);

  // Write a logic here to check that either the user is already registered with that specific email or not

  const userEmail = await userModal.findOne({ email: obj.email });

  // If user is already registered then simply give an error

  if (userEmail) return Response.json({ error: true, message: "User is already registered"} , {status:403}) ;

  // Now we have to encrypt the code of our user

  // ------------------- Stay more focused from this point

  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(obj.password , saltRounds)

  obj.password = hashedPassword 

  // Now here we have to add a new user now: 

  let newUser = new userModal({...obj})

  newUser = await newUser.save();

  const token = jwt.sign({ id : newUser._id , role: newUser.role } , process.env.JWT_Token );

  console.log(`User Password: ${obj.password}`)

  // -------------------
  
  

  // -------------------

  // Now , here I have to add a new user:

  return Response.json({
    error: false , 
    msg: 'User Added successfully', 
    user: newUser,
    token
  });
}

export async function GET() {
  return Response.json("User Get Request");
}

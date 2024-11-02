import { createDB } from "@/lib/dbconnect";
import { userModal } from "@/lib/modals/UserModal";

export async function POST(req) {
  await createDB();
  const obj = await req.json();
  console.log("object => ", obj);

  // Write a logic here to check that either the user is already registered with that specific email or not

  const userEmail = await userModal.findOne({ email: obj.email });

  // If user is already registered then simply give an error

  if (userEmail) return { error: true, message: "User is already registered" };

  // Now we have to encrypt the code of our user

  // const saltRounds = 10;
  // const hashedPassword = await bcrypt.hash(obj.password, saltRounds);

  // console.log("my text password: ", obj.password);
  // console.log("my hashed password: ", hashedPassword);

  console.log("my password: ", obj.password);

  // ------------------------

  // Now , here I have to add a new user:

  console.log("User Available ? ", userEmail);

  return Response.json("User Post Request ");
}

export async function GET() {
  return Response.json("User Get Request");
}

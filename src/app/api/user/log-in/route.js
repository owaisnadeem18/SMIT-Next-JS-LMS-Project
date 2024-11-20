import { connectDB } from "@/lib/dbconnect";
import { userModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    await connectDB();
    const obj = await req.json();
    console.log("log-in object => ", obj);

    const user = await userModal.findOne({ email: obj.email });

    if (!user) {
        return new Response(JSON.stringify({ error: true, msg: "User Not Found" }), { status: 404 });
    }

    console.log(user);

    const isPasswordMatch = await bcrypt.compare(obj.password, user.password);

    if (!isPasswordMatch) {
        return new Response(JSON.stringify({ error: true, msg: "Password is incorrect, please enter the correct one" }), { status: 400 });
    }

    console.log("Is password matches? -> ", isPasswordMatch);

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_Token || 'defaultSecretKey');

    return new Response(JSON.stringify({
        error: false,
        msg: "User Logged in successfully",
        user,
        token
    }), { status: 200 });
}

import { DBConnect } from "@/lib/dbconnect";
import { UserModel } from "@/lib/models/UserModel";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleUserLogin = async (profile) => {
  try {
    await DBConnect();
    const user = await UserModel.findOne({ email: profile.email });

    if (user) {
      return user;
    } else {
      const obj = {
        fullName: profile.name,
        email: profile.email,
        provider: "google", // Explicitly setting provider
        profileImg: profile.picture,
        role: "user" // Ensure role is explicitly set
      };

      const newUser = await UserModel.create(obj);
      return newUser;
    }
  } catch (err) {
    console.error("Error =>", err);
    throw new Error("User login failed");
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("Account =>", account);
      console.log("Profile =>", profile);

      const user = await handleUserLogin(profile);

      return { ...profile, role: user?.role || "user" };
    },
  },
});

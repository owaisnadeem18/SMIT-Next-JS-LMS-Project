import { createDB } from "@/lib/dbconnect";
import { userModal } from "@/lib/modals/UserModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"

const isUserLogin = async (profile) => {
  await createDB() 
  const user = await userModal.findOne({email: profile.email})
  if (user) return user
  else {
    // If user is not already logged in and is not present in the database then we simply required to add user into the database
    const obj = {
      fullName: profile.fullname,
      email: profile.email,
      profileImg: profile.picture
    }
    // adding data to mongo database
    let newUser = await new userModal(obj) 
    newUser = await newUser.save()
    return newUser  
  }

}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google ,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        console.log("credentials => " , credentials)
 
        // return user object with their profile data
        return user
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {

      console.log("Account => " ,account)
      console.log("Profile => " ,profile)

      if (account.provider == "google") {

        
        const user = await isUserLogin(profile)
        
        return {...profile , role: user.role} // Do different verification for other providers that don't have `email_verified`
      }
    },
    async jwt({ token }) {
      console.log("token dikhao mjhy => " , token)
      // if (user) { // User is available during sign-in
      //   token.id = user.id
      // }

      token.test = "testing the token"
      const user = await isUserLogin(token)
      console.log("user in jwt = " , user)

      // token.role = user.role
      // token._id = user._id

      token._id = user._id
      token.role = user.role

      return token
    },
    session({ session, token }) {
      session.user._id = token._id
      session.user.role = token.role
      return session
    },
  },
});

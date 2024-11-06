import { signIn, auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  console.log("session => ", session);

  if (session) redirect('/');
  
  
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center ">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="border border-b-gray-800 bg-slate-800 p-3 rounded-md text-white"
          type="submit"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}

// import { redirect } from "next/navigation";
// import { signIn, auth } from "../../../auth";

// export default async function SignIn() {
//   const session = await auth();
//   console.log("session => ", session);

//   if (session) redirect('/');

//   return (
//     <div className="container mx-auto min-h-screen flex items-center justify-center flex-col gap-4">

// {/* <form
//       action={async (formData) => {
//         "use server"
//         await signIn("credentials", formData)
//       }}
//       > */}
//       <form
//         className="flex flex-col gap-3 shadow p-3"
//         action={async (formData) => {
//           "use server";
//           await signIn("credentials", formData, { redirect: false });
//         }}
//       >
//         <div className="flex flex-col gap-3 border p-5" >

//         <input type="text" required className="p-3 border" placeholder="Enter user name" />
//         <input type="text" required className="p-3 border" placeholder="Enter password" />
//         <button
//           className="border border-b-gray-800 bg-slate-800 p-3 rounded-md text-white"
//           type="submit"
//           >
//           Login to continue
//         </button>
//           </div>
//       </form>
//    <div>

//       <form
//         action={async () => {
//           "use server";
//           await signIn("google");
//         }}
//       >
//         <button
//           className="border border-b-gray-800 bg-slate-800 p-3 rounded-md text-white block"
//           type="submit"
//           >
//           Continue with Google
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }

// ==============================

// Reunderstanding each and everything:

import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth";

export default async function SignIn() {
  const session = await auth();

  if (session) redirect("/");

  console.log("Session => ", session);

  return (
    <div className="container mx-auto min-h-screen flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col gap-3 border p-5">
        <form
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData, { redirect: false });
          }}
        >
          <input
            type="text"
            required
            name="email"
            className="p-3 my-5 border block"
            placeholder="Enter user name"
          />
          <input
            type="text"
            required
            name="password"
            className="p-3 border block"
            placeholder="Enter password"
          />
          <button
            className="border border-b-gray-800 my-5 mx-auto bg-slate-800 p-3 block rounded-md text-white"
            type="submit"
          >
            Login to continue
          </button>
        </form>
      </div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="bg-slate-700 text-white rounded-lg p-4"
          type="submit"
        >
          Continue With Google
        </button>
      </form>
    </div>
  );
}

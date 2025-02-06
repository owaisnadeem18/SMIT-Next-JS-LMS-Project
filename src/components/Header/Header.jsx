
import React from "react";
// import { auth, signOut } from "../../../auth";
import Link from "next/link";

export default async function Header() {
  // const session = await auth();

  // console.log("session in header => " , session)

  return (
    <div className="bg-slate-800 text-white p-4">
      <div className="flex container py-2 mx-auto justify-between items-center">
        <h1 className="font-semibold text-xl">Saylani Mass IT  LMS </h1>

        
          <div className="flex gap-4 items-center">
            <h1 className="text-xl"></h1>
            <form
              // action={async () => {
              //   "use server";
              //   await signOut();
              // }}
            >
              <button className="text-xl border p-2 rounded-md" type="submit">
                Signout
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}
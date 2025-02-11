import React from 'react'
import { auth, signOut } from '../../../auth'
import Image from 'next/image'
import Link from 'next/link'

const Header = async () => {

  const session = await auth()

  console.log("Session in header component => " , session)

  return (
    <nav className='flex py-6 items-center justify-between bg-gray-800 text-white px-6'>
      <div className="left-side ">
        <h1 className='text-2xl' >
         Batch-11-LMS
        </h1>
      </div>
      <div className="right-side">
        {session ? 
        <div className='flex gap-5' > 
          <h2 className='text-green-500 text-2xl bg-white p-2 rounded-lg' >
            {session.user.name}
          </h2>

                <form 
                  action={async () => {
                      "use server"
                      await signOut()
                  }}
                  >
                  <button className="bg-slate-700 text-white rounded-lg p-4" type="submit">Sign Out</button>
                </form>
        </div> :
          <Link href={"/sign-in"} className='text-2xl' >
            Sign In
          </Link>
        
         }
      </div>
    </nav>
  )
}

export default Header

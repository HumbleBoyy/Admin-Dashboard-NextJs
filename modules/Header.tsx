import React from 'react'
import MainLogo from "./../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex justify-between items-center bg-primary py-2 px-5 dark:bg-slate-800'>
       <div className='flex items-center gap-[5px]'>
           <Image className='w-[50px] h-[50px]' src={MainLogo} alt='Dashboard' width={50} height={50} priority/>
           <Link href={"/"}><h1 className='font-bold text-white text-[30px]'>Dashboard</h1></Link>
       </div>
       <div>
         Dark Mode
         Avatar
       </div>
    </div>
  )
}

export default Header
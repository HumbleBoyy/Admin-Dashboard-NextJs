import React from 'react'
import MainLogo from "./../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Header = () => {
  return (
    <div className='flex justify-between items-center bg-primary py-2 px-5 dark:bg-slate-800'>
       <div className='flex items-center gap-[5px]'>
           <Image className='w-[50px] h-[50px]' src={MainLogo} alt='Dashboard' width={50} height={50} priority/>
           <Link href={"/"} className='font-bold text-white text-[30px]'>Dashboard</Link>
       </div>
       <div className='flex items-center'>
       <DropdownMenu>
       <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
       </div>
    </div>
  )
}

export default Header
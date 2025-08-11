import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/favicon.ico";
import IconText from "@/assets/logo-text.png"
import MenuDropDown from "./menu";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Header () {
  // const {isAuthenticated} = getKindeServerSession();
  // const isUserAuthenticated = await isAuthenticated();
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
    <div className=" bg-linear-to-bl from-stone-600 to-stone-400 dark:to-stone-950 px-[5px] bg-no-repeat bg-cover border-green-500 border-b-1 border-b h-[50px] flex items-center justify-between px-5">
        <div className="flex min-w-[150px]">
            <Link href="/"  >
                <Image
                src={Icon}
                alt="Logo"
                width={40}
                height={40}
                priority
                />
            </Link>
            <Link href="/"  >
                <Image
                src={IconText}
                alt="Logo"
                height={40}
                priority
                />
            </Link>
       </div>

        <div className="flex gap-2   text-green-300">
         {!user ?
       
          <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer text-nowrap  flex items-center justify-center text-black dark:text-white text-md"> Login or Create Account</DropdownMenuTrigger>
              <DropdownMenuContent className="items-right ">
                <DropdownMenuItem className="justify-between">
                <LoginLink>Login</LoginLink>
          
                </DropdownMenuItem>
 	              <DropdownMenuItem className="justify-between">
                 <RegisterLink>Create Account</RegisterLink>
                </DropdownMenuItem>    
              </DropdownMenuContent>
          </DropdownMenu>
          :
          <h1 className="text-nowrap  flex items-center justify-center text-black dark:text-white text-md"> Hello {user?.given_name} </h1>}
            
            <Link className=" text-nowrap  flex items-center justify-center font-bold text-md"href="/browse">Explore Sets</Link>
            
            <Tooltip>
                <TooltipTrigger asChild>
                </TooltipTrigger>
                    <TooltipContent>
                    <p>Add to library</p>
                    </TooltipContent>
            </Tooltip>
            <MenuDropDown/>
        </div>


    </div>
  );
}

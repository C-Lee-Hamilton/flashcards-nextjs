import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/favicon.ico";
import IconText from "@/assets/logo-text.png"
import MenuDropDown from "./menu";
import {LoginMenu} from "./login";

import {Plus} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Header() {
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
          <LoginMenu/>
            {/* <Link className=" text-nowrap  flex items-center justify-center font-bold text-md"href="/">Login</Link> */}
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

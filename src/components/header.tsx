import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/favicon.ico";
import IconText from "@/assets/logo-text.png"
import Burger from "./menu";
export default function Header() {
  return (
    <div className=" bg-linear-to-bl from-stone-600 to-stone-950 px-[5px] bg-no-repeat bg-cover border-green-300 border-b-1 border-b h-[50px] flex items-center justify-between px-5">
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
            <Link className="border-green-500 text-nowrap h-[30px] flex items-center justify-center border-l-2 text-md rounded-lg border-r-2 px-2"href="/browse-public">View Public</Link>
            <Link className="border-green-500 text-nowrap h-[30px] flex items-center justify-center border-l-2 text-md rounded-lg border-r-2 px-2" href="/user-created">View Created</Link>
            <Link className="border-green-500 text-nowrap h-[30px] flex items-center justify-center border-l-2 text-md rounded-lg border-r-2 px-2" href="/create-new">Create New</Link>
            
        </div>


    </div>
  );
}

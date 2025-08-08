// import Link from "next/link";
import ModeBtn from "@/components/mode-toggle";
import { AlignJustify,Plus, CircleQuestionMark,House} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function MenuDropDown() {
  return (
    <div>
        <DropdownMenu >
        <DropdownMenuTrigger className="cursor-pointer items-center justify-center flex rounded-md dark:bg-transparent bg-stone-700 h-[30px] w-[30px] border-1 border-green-500 dark:border-green-400"><AlignJustify className="h-[1.2rem] w-[1.2rem] " /></DropdownMenuTrigger>
        <DropdownMenuContent className="items-right ">
            <DropdownMenuLabel className="text-center" >Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-between">
                <Link className="flex items-center w-full justify-between" href="/create-new">
                   Create
                <Plus/></Link>
            </DropdownMenuItem>      
           
                <ModeBtn/>
           
             <DropdownMenuItem className="justify-between">About <CircleQuestionMark/></DropdownMenuItem>
             <DropdownMenuItem className="justify-between">
                <Link className="flex items-center w-full justify-between" href="/dashboard">
                   Home
                <House/></Link>
            </DropdownMenuItem>    
             <DropdownMenuSeparator className="bg-black h-[1px] dark:bg-white"/>
            <DropdownMenuItem><Link href="/"className="mx-auto">Logout/In</Link></DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
 </div>
  );
}
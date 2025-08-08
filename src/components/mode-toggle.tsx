"use client";
import { useTheme } from "next-themes"

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function ModeBtn(){


  const { setTheme, resolvedTheme, } = useTheme();


 
    const toggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  

    return (
  
              <DropdownMenuItem className="justify-between cursor-pointer " onClick = {toggle}>
                <span>Mode </span>
              
              {resolvedTheme === "light" ? (
                <Sun className="" />)
              :(<Moon className=" " />)}
              
              
          
     
        </DropdownMenuItem>
        
    )
}
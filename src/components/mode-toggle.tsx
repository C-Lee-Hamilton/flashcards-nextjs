"use client";
import { useTheme } from "next-themes"

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"

export default function ModeBtn(){


  const { setTheme, resolvedTheme } = useTheme();


 
    const toggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  

    return (
        <div className="" >
              <Button onClick = {toggle} variant="outline" className="cursor-pointer dark:bg-transparent bg-stone-700 h-[30px] w-[30px] border-1 border-green-500 dark:border-green-400">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          
        </Button>
        
        </div>
    )
}
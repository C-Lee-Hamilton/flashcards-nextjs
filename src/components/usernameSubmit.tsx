"use client";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";



export default function UsernameSubmit(){

const [changeDisabled,setChangeDisabled]=useState<boolean>(true);
const activateChange=()=>setChangeDisabled(false);

const [name,setName]=useState<string>("");
const submit=()=>{console.log("hello" + name + "button clicked"); setChangeDisabled(true); setName(""); };

return (
  
    <div>
        <Separator className="w-[2px] mb-[10px] mt-[5px] bg-red-500"/>
        {changeDisabled ?
        (<Button onClick={activateChange} className="w-full" variant="outline">Create Username</Button>)
        : 
        (<><Input value={name}  onChange={(e)=>setName(e.target.value)} className="mb-[10px]" />
        <Button onClick={submit} className="w-full" variant="outline">Submit</Button></>)
        }
    </div>
        
    )


}
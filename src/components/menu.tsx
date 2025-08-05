"use client";
import "@/assets/hamburger.png"
export default function Burger(){
    return (

        <button className="bg-[url(@/assets/hamburger.png)] cursor-pointer h-[35px] w-[35px] bg-cover bg-no-repeat"onClick={()=>{console.log("stuff")}}/>
    )
}
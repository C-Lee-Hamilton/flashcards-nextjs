import FlipCard from "@/components/flipcard/flipcard";
import Icon from "@/assets/logo.png"
import Image from "next/image";
export default function Home() {
  const front="Welcome to Flash Cards! Click to flip over and learn more.";
   const back="Browse and search, , community created, fully interactive flash card sets. Register and login to create custom sets and start learning! ";
  return (
    <div className="text-center flex-1 flex justify-center items-center overflow-hidden ">
       <Image
                src={Icon}
                alt="Logo"
                width={100}
                height={100}
                 className="opacity-[.2] relative "
                priority
                />
      <div className="scale-[1.5] z-5 font-bold mx-[20%] ">
        <FlipCard front={front} back={back}/>
      </div>
        
           <Image
                src={Icon}
                alt="Logo"
                width={100}
                height={100}
                className="opacity-[.2] relative"
                priority
                />
      
    
    </div>
  );
}





//hamburger button, with selection dropdown, not drawer
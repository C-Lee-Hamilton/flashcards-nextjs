"use client"
import "./style.css";

import { useState } from "react";

type Props={
  front:React.ReactNode;
  back:React.ReactNode;
}
export default function FlipCard({front,back}:Props) {

  const [flipping, setFlipping] = useState<boolean>(false);
  const [flipped, setFlipped] = useState<boolean>(false);
  const textClass = ["text", "text-flip"];
  const cardClass = ["card", "card-flip"];
  const [activeColor,setActiveColor]=useState<boolean>(false);


  function wait(ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const flipper = async () => {
    setFlipping(true);
    await wait(750);
    setFlipped((prevState) => !prevState);
    setActiveColor((prevState)=>!prevState);
    await wait(750);
    setFlipping(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          style={{backgroundColor: activeColor ? "#6e02daff" : "#009dffff"}}
          disabled={flipping}
          onClick={flipper}
          className={flipping?cardClass[1]:cardClass[0]}
        >
          <div style={{fontSize: flipped ? "16px" : "22px"}} className={flipping ? textClass[1] : textClass[0]}>
            {flipped ? back : front}
          </div>
        </button>
        
      </div>
    </div>
  );
}

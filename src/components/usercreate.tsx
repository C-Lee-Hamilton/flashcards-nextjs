"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props={ 
email:string | undefined | null;
}

export default function UserCreate({email}:Props) {
  const router=useRouter();
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!email) throw new Error("No email, no account");
  
 const handleSubmit = async () => {
  const res = await fetch("/api/create-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username }),
  });
  const data = await res.json();

  if (!res.ok) {console.log(data.error); setErrorMessage("Username Already Exists...");}
  else router.push("/dashboard");
};


return (
    <div className="">
      <h2>create user field</h2>
      <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>

      //hello, right here is my issue
      <Button onClick={handleSubmit}>Submit</Button>
      {errorMessage}
  
    </div>
  );
}


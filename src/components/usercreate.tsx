"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import clientPromise from "@/lib/mongodb";

import {redirect} from "next/navigation";

type Props={ 
email:string | undefined | null;
}

export default function UserCreate(email:Props) {

  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!email) throw new Error("No email, no account");
  
  //check if username is taken, if not, create user account on mongo

  const createUser = async(name:string)=> {
    const client = await clientPromise;
    const db = client.db("flash-cards");
    const users = db.collection("users");

    let userCheck = await users.findOne({
    username: new RegExp(`^${name}$`, 'i') // case-insensitive
    });

    if (userCheck) {
         setErrorMessage("Username Already Exists");
        throw new Error("Username already taken");
     
    }

    else{
        await users.insertOne({
            email,
            username: name,
            pinnedSets: [],
            lastViewed: "",
            });

        redirect("/dashboard");
    }
    }


return (
    <div className="">
      <h2>create user field</h2>
      <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>

      //hello, right here is my issue
      <Button onClick={createUser(username)}>Submit</Button>
      {errorMessage}
  
    </div>
  );
}


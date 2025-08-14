import { Button } from "@/components/ui/button";
import DashOptions from "@/components/dashboard";
import clientPromise from "@/lib/mongodb";
import { UserProvider, useUser, User } from "@/app/UserContext";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Dash() {
    const {isAuthenticated,getUser} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");}

  const userData = await getUser();
  const email = userData?.email;

  if (!email) throw new Error("No email, no account");  

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("flash-cards");
  const users = db.collection("users");

  // Check if user exists
  let dbUser = await users.findOne({ email }) as unknown as User | null;

  if (!dbUser) {
    // Create new user if not found
   await users.insertOne({
      email,
      username: "",
      pinnedSets: [],
      lastViewed: "",
    });

    dbUser = {
      email,
      username: "",
      pinnedSets: [],
      lastViewed: "",
    };
  }


return (
    <div className="text-center flex-1  pt-12">
      <DashOptions/>
      <br/>
      <br/>
      dashboard | Hello Username | My Sets/Edit Sets | Create New Set | View Last Reviewed Set | Pinned Sets
      <div className="flex-col gap-2 flex">
        <h1 className="mt-[50px]">Test Buttons</h1>
        <div className="flex-row">
          <Button className="w-[10%] mx-[2px]"> get username</Button> 
          <Button className="w-[10%] mx-[2px]">get sets</Button>
        </div>
        <div className="flex-row"> 
          <Button className="w-[10%] mx-[2px]">get last viewed</Button >
          <Button className="w-[10%] mx-[2px]">get pinned</Button>
        </div>
      </div>
    </div>
  );
}


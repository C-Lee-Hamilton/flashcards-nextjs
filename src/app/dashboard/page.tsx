import { Button } from "@/components/ui/button";

import clientPromise from "@/lib/mongodb";
import { UserProvider, useUser, User } from "@/app/UserContext";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Page() {
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
   redirect("/new-user");
  }

//original logic, doesnt force to create username
  // if (!dbUser) {
  //   // Create new user if not found
  //  await users.insertOne({
  //     email,
  //     username: "",
  //     pinnedSets: [],
  //     lastViewed: "",
  //   });

  //   dbUser = {
  //     email,
  //     username: "",
  //     pinnedSets: [],
  //     lastViewed: "",
  //   };
  // }
// 

return (
    <div className="text-center flex-1  pt-12">
      {/* <DashOptions email={email}/> */}
      <h1>dashboard</h1>
   
    </div>
  );
}


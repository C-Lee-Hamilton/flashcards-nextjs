import { Button } from "@/components/ui/button";
import DashOptions from "@/components/usercreate";
import clientPromise from "@/lib/mongodb";
import { UserProvider, useUser, User } from "@/app/UserContext";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Page() {
  const {isAuthenticated,getUser} = getKindeServerSession();

  //protect route, if no user, redirect
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");}

  const userData = await getUser();
  const email = userData?.email;

  if (!email) throw new Error("No email, no account");  

  //if account created, but no database entry, redirect
  const client = await clientPromise;
  const db = client.db("flash-cards");
  const users = db.collection("users");
  let dbUser = await users.findOne({ email }) as unknown as User | null;

  if (!dbUser) {
   redirect("/new-user");
  }
 
return (
    <div className="text-center flex-1  pt-12">
      
      dashboard | Hello Username | My Sets/Edit Sets | Create New Set | View Last Reviewed Set | Pinned Sets
     
    </div>
  );
}


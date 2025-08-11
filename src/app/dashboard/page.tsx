import { Button } from "@/components/ui/button";
import DashOptions from "@/components/dashboard";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function Dash() {
    const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");}
  
return (
    <div className="text-center flex-1  pt-12">
      <DashOptions/>

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


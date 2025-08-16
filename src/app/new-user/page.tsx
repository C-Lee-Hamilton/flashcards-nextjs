import UserCreate from "@/components/usercreate";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
  //get login email
  const {getUser} = getKindeServerSession();
  const userData = await getUser();
  const email = userData?.email;

return (
    <div className="text-center flex-1  pt-12">
      <h1>Create Username to Continue...</h1>  
      <UserCreate email={email}/>
    </div>
  );
}


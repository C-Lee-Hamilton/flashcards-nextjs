import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import UsernameSubmit from "./usernameSubmit";


export default async function DashOptions(){

const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();


if (isUserAuthenticated){
    return (
  
            <div className="float-left border-2 p-[5px] rounded-md border-green-500 w-[200px]">
                      <h1>Dashboard </h1>
                      <UsernameSubmit/>  
            </div>
        
    )
}
else{return(<div>log in to continue</div>)}

}
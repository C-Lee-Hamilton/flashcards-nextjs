
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";






export default async function DashOptions(){

const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();


const {getUser} = getKindeServerSession();
const user = await getUser(); 


if (isUserAuthenticated){
    return (
  
            <div>
                      <h1>Welcome, {user?.given_name} </h1>
            </div>
        
    )
}
else{return(<div>log in to continue</div>)}

}
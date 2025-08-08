import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreateAccountMenu } from "./create-account"
export function LoginMenu() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button  className="border-[0px] p-0 cursor-pointer bg-transparent font-bold text-green-300">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-green-500">
          <DialogHeader>
            <DialogTitle className="text-center"><p className="mb-[10px]">Login</p> or <CreateAccountMenu/></DialogTitle>
           
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Email</Label>
              <Input id="name-1" name="name" placeholder="Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password-1">Password</Label>
              <Input id="password-1" name="password" type="password" placeholder="Password"  />
            </div>
          </div>
          
            
            <Button type="submit">Login</Button>
            <Button>Login With Google</Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
        </DialogContent>
      </form>
    </Dialog>
  )
}
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

export function CreateAccountMenu() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button  className="border-[0px] p-[0px] cursor-pointer mt-[0px]  bg-transparent font-bold text-green-300">Create Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-green-500">
          <DialogHeader>
            <DialogTitle className="text-center">Create Account</DialogTitle>
           
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Email</Label>
              <Input id="name-1" name="name" placeholder="Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password-1">Password</Label>
              <Input id="password-1" name="password" type="password" placeholder="Password" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password-2">Confirm Password</Label>
              <Input id="password-2" name="password-2" type="password" placeholder="Confirm Password"  />
            </div>
          </div>
          
            
            <Button type="submit">Create Account</Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
        </DialogContent>
      </form>
    </Dialog>
  )
}
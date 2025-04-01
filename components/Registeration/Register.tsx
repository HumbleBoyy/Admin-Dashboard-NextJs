import { Input } from "../ui/input"
import { Label } from "../ui/label"


const Register = () => {
  return (
    <>
       <div className="space-y-1">
          <Label htmlFor="Name">Name</Label>
          <Input id="name" type="text" placeholder="Name"/>
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Username" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password"/>
        </div>
        <div className="space-y-1">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <Input id="confirmpassword" type="password" placeholder="Confirm Password"/>
        </div>    
    </>
  )
}

export default Register
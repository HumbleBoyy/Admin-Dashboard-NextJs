import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignIn = () => {
  return (
   <>
    <div className="space-y-1">
        <Label htmlFor="name">Username</Label>
        <Input id="name" placeholder="Username" />
    </div>
    <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="Password" type="password" />
    </div>
   </>
  )
}

export default SignIn
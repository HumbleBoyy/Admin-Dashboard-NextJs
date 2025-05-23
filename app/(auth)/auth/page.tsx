import SignIn from "@/components/Registeration/Login"
import Register from "@/components/Registeration/Register"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 function Auth() {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Sign In to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignIn/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
               Create a new account or just sign in if you have already an account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Register/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
export default Auth
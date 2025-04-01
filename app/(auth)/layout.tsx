import { Toaster } from "sonner"
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
        {children}
        <Toaster position="top-right"/>
    </div>
  )
}

export default AuthLayout
import CustomSideBar from "@/modules/CustomSideBar"
import Header from "@/modules/Header"
import { Toaster } from "sonner"

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
      <>
        <Header/>
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <CustomSideBar/>
          </div>
          <div className="w-full p-5 md:max-w-[1140px] h-[100vh] overflow-y-scroll">         
          {children}
            <Toaster position="top-right"/>
          </div>
        </div>
      </>
    )
  }
  
  export default MainLayout
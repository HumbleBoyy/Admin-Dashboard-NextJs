import DashBoardCard from "@/components/dashboard/DashBoardCard"
import { Newspaper } from "lucide-react"


const MainPage = () => {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
         <DashBoardCard title="Posts" icon={<Newspaper className="text-slate-500" size={72}/>} count={100}/>

       </div>
    </>
  )
}

export default MainPage
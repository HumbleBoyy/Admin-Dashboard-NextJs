import DashBoardCard from "@/components/dashboard/DashBoardCard"
import PostsTable from "@/components/posts/PostsTable"
import { Folder, MessageCircle, Newspaper, User } from "lucide-react"


const MainPage = () => {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
         <DashBoardCard title="Posts" icon={<Newspaper className="text-slate-500" size={72}/>} count={200}/>
         <DashBoardCard title="Categories" icon={<Folder className="text-slate-500" size={72}/>} count={10}/>
         <DashBoardCard title="Users" icon={<User className="text-slate-500" size={72}/>} count={500}/>
         <DashBoardCard title="Comments" icon={<MessageCircle className="text-slate-500" size={72}/>} count={300}/>
       </div>
       <PostsTable/>
    </>
  )
}

export default MainPage
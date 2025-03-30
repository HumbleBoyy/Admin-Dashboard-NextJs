import DashBoardCard from "@/components/dashboard/DashBoardCard"


const MainPage = () => {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
         <DashBoardCard/>
       </div>
    </>
  )
}

export default MainPage
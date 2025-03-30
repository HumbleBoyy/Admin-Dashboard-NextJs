import * as React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { DashBoardCardType } from "@/types/DashboardCardType"

 const DashBoardCard:React.FC<DashBoardCardType> = ({icon, title, count}) => {
  return (
    <Card className="w-[300px] bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">{title}</h3>
        <div className="flex gap-5 justify-center items-center">
           {icon}
           <strong className="text-5xl font-semibold text-slate-500 dark:text-slate-200">{count}</strong>
        </div>
      </CardContent>
    </Card>
  )
}


export default DashBoardCard
"use client"
import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BackButtonType {
    text:string
}

const BackButton = ({text}: BackButtonType) => {
    const router = useRouter()
  return (
    <button onClick={()=> router.back()} className="text-gray-500 cursor-pointer hover:underline flex items-center gap-1 font-bold mb-5">
      <ArrowLeftCircle/> {text}
    </button>
  )
}

export default BackButton
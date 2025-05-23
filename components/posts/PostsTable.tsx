import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import posts from "@/data/posts"
import { PostType } from "@/types/PostType"
import { Edit } from "lucide-react"
import Link from "next/link"

  interface PostsTableType {
    limit?:number
    title?:string
  }

const PostsTable = ({limit, title}: PostsTableType) => {
    // Sort posts in descendant order based on date
    const sortedPostToTime:PostType[] = [...posts].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())

    // Filter posts to limit
    const filteredPostToLimit = limit ? sortedPostToTime.slice(0, limit) : sortedPostToTime;
  return (
    <div className="flex flex-col gap-3">
        <h2 className="text-[20px] font-bold text-slate-500">{title}</h2>
        <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Post Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                <TableHead className="text-center">More</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {filteredPostToLimit.map((item:PostType)=>(
                <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell className="hidden md:table-cell">{item.author}</TableCell>
                <TableCell className="hidden md:table-cell text-right">{item.date}</TableCell>
                <TableCell className="text-center"><Link className="bg-blue-600 py-2 text-white font-semibold rounded-[5px] flex items-center justify-center text-[15px] gap-[2px]" href={`/posts/edit/${item.id}`}>Edit<Edit size={15}/></Link></TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default PostsTable
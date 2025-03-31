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

  interface PostsTableType {
    limit?:number
    title?:string
  }

const PostsTable = ({limit, title}: PostsTableType) => {
  return (
    <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                <TableHead className="hidden md:table-cell text-right">More</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {posts.map((item:PostType)=>(
                <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell className="hidden md:table-cell">{item.author}</TableCell>
                <TableCell className="hidden md:table-cell text-right">{item.date}</TableCell>
                <TableCell className="hidden md:table-cell text-right">{item.date}</TableCell>
            </TableRow>
            ))}
        </TableBody>
</Table>
  )
}

export default PostsTable
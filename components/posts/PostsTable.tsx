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
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="text-right hidden md:table-cell">Date</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {posts.map((item:PostType)=>(
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
            </TableRow>
            ))}
        </TableBody>
</Table>
  )
}

export default PostsTable
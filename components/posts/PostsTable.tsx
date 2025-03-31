import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

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
                <TableHead>Method</TableHead>
                <TableHead className="text-right hidden md:table-cell">Date</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
        </TableBody>
</Table>
  )
}

export default PostsTable
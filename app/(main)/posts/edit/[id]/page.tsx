"use client"
import BackButton from '@/components/backbutton/BackButton'
import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import posts from '@/data/posts'
import { PostType } from '@/types/PostType'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'



const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  body: z.string().min(2, {
    message: "Body must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "Date must be at least 2 characters.",
  }),
})

interface PostEditPageType{
  params:{
    id:string
  }
}
const SinglePage = ({params}:PostEditPageType) => {
  const router = useRouter()
  const post = posts.find((item:PostType)=> item.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title,
      body:post?.body,
      author:post?.author,
      date:post?.date
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success(`Post By ${data.author} updated successfully`)
    setTimeout(()=> {
       router.back()
    },1500)
  }
  return (
    <>
      <BackButton text='Go Back'/>
      <h3 className='text-[25px] font-bold text-slate-600'>Edit Post</h3>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
              <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Title</FormLabel>
              <FormControl>
                <Input className='bg-slate-200 border-0 focus-visible:ring-0 dark:bg-slate-500 focus-visible:ring-offset-0 text-black dark:text-white' placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
           control={form.control}
           name="body"
           render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Post Body</FormLabel>
              <FormControl>
                <Textarea className='bg-slate-200 border-0 focus-visible:ring-0 dark:bg-slate-500 focus-visible:ring-offset-0 text-black dark:text-white resize-none h-[150px]' placeholder="Post Body" {...field} />
              </FormControl>
              <FormMessage />
          </FormItem>
          )}
        />
         <FormField
           control={form.control}
           name="author"
           render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Author</FormLabel>
              <FormControl>
                <Input className='bg-slate-200 border-0 focus-visible:ring-0 dark:bg-slate-500 focus-visible:ring-offset-0 text-black dark:text-white resize-none' placeholder="Author" {...field} />
              </FormControl>
              <FormMessage />
          </FormItem>
          )}
        />
          <FormField
           control={form.control}
           name="date"
           render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Date</FormLabel>
              <FormControl>
                <Input className='bg-slate-200 border-0 focus-visible:ring-0 dark:bg-slate-500 focus-visible:ring-offset-0 text-black dark:text-white resize-none' placeholder="Date" {...field} />
              </FormControl>
              <FormMessage />
          </FormItem>
          )}
        />
        <Button type="submit" className='w-full dark:bg-slate-800 dark:text-white cursor-pointer'>Update post</Button>
      </form>
      </Form>
    </>
  )
}
 

export default SinglePage
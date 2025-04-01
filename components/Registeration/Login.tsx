"use client"
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const formSchema = z.object({
    username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})




const SignIn = () => {
 const router = useRouter()

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username:"",
      password:""
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
        toast.success("Signed In Successfully")
        setTimeout(()=> {
           router.push("/")
        },1500)
      }
   
  return (
   <>
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
       <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
              <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Username</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
              <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button type="submit">Sign In</Button>
       </form>
    </Form>
   </>
  )
}

export default SignIn
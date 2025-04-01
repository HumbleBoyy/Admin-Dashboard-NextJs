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
   name: z.string().min(2, {
    message: "Name must be at least 3 characters.",
    }),
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmpassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})




const Register = () => {

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      username:"",
      password:"",
      confirmpassword:""
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
        toast.success(`${data.username} Registered Successfully`)
        setTimeout(()=> {
          location.reload()
        },2000)
      }
   
  return (
   <>
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
       <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
              <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button type="submit">Register</Button>
       </form>
    </Form>
   </>
  )
}

export default Register
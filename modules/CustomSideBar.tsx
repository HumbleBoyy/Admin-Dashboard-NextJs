import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import {
    CreditCard,
    Settings,
    User,
    LayoutDashboard,
    Newspaper,
    Folders,
  } from "lucide-react"
import Link from "next/link"
const CustomSideBar = () => {
  return (
    <Command className="rounded-none border shadow-md md:min-w-full bg-secondary">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="h-4 w-4"/>
            <Link href={"/"}>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="h-4 w-4"/>
            <Link href={"/posts"}>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="h-4 w-4"/>
            <Link href={"#"}>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default CustomSideBar
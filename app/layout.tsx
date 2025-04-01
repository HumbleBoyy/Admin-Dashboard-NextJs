import Header from "@/modules/Header";
import "./globals.css";
import CustomSideBar from "@/modules/CustomSideBar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Dashboard</title>
      <link rel="icon" href="./logo.png" />
      <body>
        <Header/>
        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
        > 
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <CustomSideBar/>
          </div>
          <div className="w-full p-5 md:max-w-[1140px] h-[100vh] overflow-y-scroll">
         
          {children}
            <Toaster position="top-right"/>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

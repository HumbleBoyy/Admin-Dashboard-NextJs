import Header from "@/modules/Header";
import "./globals.css";
import { Sidebar } from "lucide-react";



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
        <div className="flex">
          <div className="hidden md:block h-[100vh]">
            <Sidebar/>
          </div>
          <div className="w-full p-5 md:max-w-[1140px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

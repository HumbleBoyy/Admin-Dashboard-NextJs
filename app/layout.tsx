import Header from "@/modules/Header";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
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
        <ThemeProvider
           attribute="class"
           defaultTheme="light"
           enableSystem
           storageKey="dashboard-theme"
           disableTransitionOnChange
        > 
         {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

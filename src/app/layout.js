import "./globals.css";
import { ThemeProvider } from 'next-themes'
// import Header from "@/components/organisms/Header";
import HybridHeader from "@/components/organisms/HybridHeader";
import { Yantramanav } from "next/font/google";
const yan = Yantramanav({ weight: '400', subsets: ["latin"] });



export const metadata = {
  title: "Proyecta empresarial",
  description: "Certificación para los profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <body className={yan.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <Header></Header> */}
          <HybridHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { ThemeProvider } from 'next-themes';
import HybridHeader from "@/components/organisms/HybridHeader";

// Google Fonts
import { Yantramanav } from "next/font/google";
const yan = Yantramanav({ 
  weight: '400',
  subsets: ["latin"],
  });

  // Metadata
export const metadata = {
  title: "Proyecta empresarial",
  description: "Certificación para los profesionales",
  // openGraph: {
  //   image: "",
  //   url: "",
  // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning={true}>
      <body className={`${yan.className} pt-20`} suppressHydrationWarning={true}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <HybridHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

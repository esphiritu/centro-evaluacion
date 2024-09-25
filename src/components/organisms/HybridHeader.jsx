import DesktopNavigation from "@/components/molecules/DesktopNavigation";
import MobileMenuToggle from "@/components/atoms/MobileMenuToggle";
import Link from "next/link";

// getServerSideProps for data fetching
export default function HybridHeader () {
  const navigation = [
    {
      text: "Certificaciones",
      href: "/certificaciones",
      title:
        "Important content and expects a response.",
      alt: "Some alternative text for  accesibility",
    },
    {
      text: "Soluciones empresariales",
      href: "/soluciones",
      title:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      alt: "Some alternative text for  accesibility",
    },
    {
      text: "Cursos",
      href: "/explora",
      title:
        "Features in the medical sector",
      alt: "For sighted users to preview content available behind a link.",
    },
    {
      text: "Eventos",
      href: "/eventos",
      title:
        "Typically displayed as a progress bar.",
      alt: "Some alternative text for  accesibility",
    },
    {
      text: "Blog",
      href: "/blog",
      title:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      alt: "Some alternative text for  accesibility",
    },
  ];
  return (
    <header className="
      fixed 
      top-0 
      flex 
      justify-between
      md:justify-around 
      bg-white/80 
      dark:bg-slate-900 
      content-center 
      w-full 
      py-4 
      z-50 
      shadow-md">
      <span className="flex justify-start">
        <Link href={"/"} className="mr-5 text-pretty text-2xl underline">Proyecta Empresarial</Link>
        {/* Render desktop navigation using server-side data */}
        <DesktopNavigation links={navigation} />
      </span>
      <div className="flex justify-between">  
        {/* Render: (1) Dark mode toggle and (2) Mobile menu toggle, as a client component */}
        <MobileMenuToggle links={navigation} />
      </div>
    </header>
  );
}

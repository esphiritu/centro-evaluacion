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
      text: "Alineaciones y talleres",
      href: "/explora",
      title:
        "Features in the medical sector",
      alt: "For sighted users to preview content available behind a link.",
    },
    {
      text: "Soluciones empresariales",
      href: "/soluciones",
      title:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      alt: "Some alternative text for  accesibility",
    },
    {
      text: "Socios",
      href: "/socios",
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
    <header className="fixed top-0 flex justify-between md:justify-around bg-white/80 dark:bg-slate-900 content-center w-full py-4 z-50">
      <span className="flex justify-start">
        <Link href={"/"} className="mr-5">Proyecta empresarial</Link>
        {/* Render desktop navigation using server-side data */}
        <DesktopNavigation links={navigation} />
      </span>
      <div className="flex justify-between">  
        {/* Mobile menu toggle wrapped with client component */}
        <MobileMenuToggle links={navigation} />
      </div>
    </header>
  );
}

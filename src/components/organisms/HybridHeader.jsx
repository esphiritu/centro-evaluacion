import DesktopNavigation from "@/components/molecules/DesktopNavigation";
import MobileMenuToggle from "@/components/atoms/MobileMenuToggle";



// getServerSideProps for data fetching
export default function HybridHeader () {
  const navigation = [
    {
      text: "Certificaciones",
      href: "/certificaciones",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      text: "Formación",
      href: "/explora",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      text: "Soluciones empresariales",
      href: "/soluciones",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      text: "Socios",
      href: "/socios",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      text: "Blog",
      href: "/blog",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ]
  return (
    <header className="flex justify-between">
       {/* Render desktop navigation using server-side data */}
       <DesktopNavigation links={navigation} className="hidden md:flex"/>

      {/* Mobile menu toggle wrapped with client component */}
      <MobileMenuToggle links={navigation} className="flex md:hidden" />
    </header>
  );
}

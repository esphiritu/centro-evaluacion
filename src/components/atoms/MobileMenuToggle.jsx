'use client'
import {useState} from "react"
import Link from "next/link"
import { ModeToggle } from "@/utilities/dark-light-functionality/ModeToggle";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";


// Minimal client component for mobile menu state
export default function MobileMenuToggle({links}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <ModeToggle className="npm"><span className="sr-only">dark mode</span></ModeToggle>
      <Button 
        onClick={toggleMenu} 
        className="flex md:hidden mx-2 z-40"
        variant="outline" 
        size="icon"
        >
          {isOpen ? 
                  <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-100"></X>
                  : <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100"></MenuIcon>
                } 
          <span className="sr-only">mobile menu</span>
      </Button>
      {isOpen && <MobileMenu navigation={links} />}
     </>
  );
}

// Mobile menu component (conditionally rendered based on state)
export function MobileMenu({navigation}) {
  return (
    <ul className="mobile-menu absolute z-20 w-full min-h-screen bg-slate-200  dark:bg-slate-600 p-6">
      {/* Render mobile navigation links */}
      {navigation.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-2xl font-semibold block hover:bg-slate-900 py-6 px-3">{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}

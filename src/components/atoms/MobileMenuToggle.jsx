'use client'
import React, { useState, useEffect,useContext, createContext } from "react"
import Link from "next/link"
import { ModeToggle } from "@/utilities/dark-light-functionality/ModeToggle";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@/utilities/media-query/use-media-query";

const mobileMenuContext = React.createContext();

// Minimal client component for mobile menu state
export default function MobileMenuToggle({links}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const value = {toggleMenu, isOpen, setIsOpen}
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
      {isOpen && <mobileMenuContext.Provider value={value}>
        <MobileMenu navigation={links} />
      </mobileMenuContext.Provider>}
    </>
  );
}


// Mobile menu component (conditionally rendered based on state)
export function MobileMenu({navigation}) {
  const {toggleMenu, isOpen} = React.useContext(mobileMenuContext);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Call toggleMenu if both conditions are met on component mount or state change
  useEffect(() => {
    if (isDesktop && isOpen) {
      toggleMenu();
    }
  }, [isDesktop, isOpen]);

  return (
    <ul className={isDesktop ? "hidden" : "mobile-menu absolute z-20 top-0 w-full min-h-screen bg-slate-200  dark:bg-slate-600 p-10"}>
      {/* Render mobile navigation links */}
      {navigation.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={toggleMenu} className="text-2xl font-semibold block py-6 mt-5 px-8 rounded-md transition-colors duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}

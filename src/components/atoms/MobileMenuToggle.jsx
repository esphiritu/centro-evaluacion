'use client'
import React, { useState, useEffect,useContext, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SlimModeToggle } from "@/utilities/dark-light-functionality/SlimModeToggle";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@/utilities/media-query/use-media-query";
// Create a new context in parent component
const mobileMenuContext = React.createContext();


// Minimal client component for mobile menu with a state
export default function MobileMenuToggle({links}) {
  // Create a state variable to monitoring the state of the menu
  const [isOpen, setIsOpen] = useState(null);
  // Create a method to change the state of the menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const value = {toggleMenu, isOpen, setIsOpen};
  return (
    <>
      {/* DarkMode toggle button */}
      <SlimModeToggle className="npm">
        <span className="sr-only">dark mode</span>
      </SlimModeToggle>
      {/* MobileMenu toggle button */}
      <Button 
        onClick={toggleMenu} 
        className="flex md:hidden mx-2 z-40 hover:text-teal-800 rounded-full"
        variant="ghost" 
        size="icon"
        >
          {isOpen ? 
                  <X className="
                    h-[1.3rem] 
                    w-[1.3rem] 
                    rotate-0 
                    scale-100 
                    transition-transform 
                    dark:rotate-90 
                    dark:scale-100"></X>
                  : <MenuIcon className="
                    h-[1.3rem] 
                    w-[1.3rem] 
                    rotate-0 
                    scale-100 
                    transition-transform 
                    dark:rotate-0 
                    dark:scale-100"></MenuIcon>
                } 
          <span className="sr-only">mobile menu</span>
      </Button>
      {/* Only when 'isOpen' variable is true, MobileMenu component is rendered */}
      <AnimatePresence>
        {isOpen && 
          // Wrap up the MobileMenu component for consuming the context data within the child component
          <mobileMenuContext.Provider value={value}> 
              <MobileMenu navigation={links} />
          </mobileMenuContext.Provider>
        }
      </AnimatePresence>
    </>
  );
}

// MobileMenu component (conditionally rendered based on state)
export function MobileMenu({navigation}) {
  // Access the context data created in parent component
  const {toggleMenu, isOpen} = React.useContext(mobileMenuContext);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Call toggleMenu if both conditions are met. Basically it closes the Mobile menu if it is open and the client is using a desktop browser
  // The following code applies when the user resizes the desktop browser, from the mobile size to the desktop size
  useEffect(() => {
    if (isDesktop && isOpen) {
      toggleMenu();
    }
  }, [isDesktop, isOpen, toggleMenu]);

  return (
    // Framer motion component to add an animation when the mobile menu is opened and closed
    <motion.ul
      key="Mobile"
      className={isDesktop ? "hidden" : "fixed z-20 left-0 top-0 w-full min-h-screen bg-slate-200 dark:bg-slate-600 p-10 disabled:scroll"}
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{type: 'tween'}}
      whileInView={{ opacity: 1 }}
      exit={{ x: '200vw', opacity: 0 }}
      
    >
      {/* Create mobile navigation links from an array*/}
      {navigation.map((link) => (
        <li key={link.href}>
          <Link 
            href={link.href} 
            onClick={toggleMenu} 
            className="
            text-2xl 
            font-semibold 
            block 
            py-6 
            mt-5 
            px-8 
            rounded-md 
            transition-colors 
            duration-50 
            hover:bg-accent 
            hover:text-accent-foreground 
            hover:text-teal-700 
            focus:bg-accent 
            focus:text-accent-foreground 
            focus:outline-none 
            disabled:pointer-events-none 
            disabled:opacity-50 
            data-[active]:bg-accent/50 
            data-[state=open]:bg-accent/50">
              {link.text}
            </Link>
        </li>
        )
      )
    }
    </motion.ul>
  );
}

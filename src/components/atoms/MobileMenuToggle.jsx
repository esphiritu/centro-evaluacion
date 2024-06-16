'use client'
import {useState} from "react"
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";


// Mobile menu component (conditionally rendered based on state)
function MobileMenu({ navigation }) {
  return (
    <ul className="mobile-menu">
      {/* Render mobile navigation links */}
      {navigation.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}


// Minimal client component for mobile menu state
export default function MobileMenuToggle({navigation}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleMenu}>
        {isOpen ? 
                <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-100"></X>
                : <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100"></MenuIcon>
              } 
        <span className="sr-only">mobile menu</span>
      </Button>
      {isOpen && <MobileMenu links={ navigation }/>}
     </>
  );
}
'use client'
import Link from "next/link";
import ThemeSwitch from "@/utilities/dark-light-functionality/ThemeSwitch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function Header() {

  return (
    <>
      <header className="flex justify-around">
        <Link href="./">Proyecta empresarial</Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="./certificaciones">
                <NavigationMenuTrigger className="text-lg">Certificaciones</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>link</NavigationMenuLink>
                </NavigationMenuContent>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./explora">
                <NavigationMenuTrigger className="text-lg">Alineaciones y talleres</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./soluciones">
                <NavigationMenuTrigger className="text-lg">Soluciones empresariales</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./socios">
                <NavigationMenuTrigger className="text-lg">Socios</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./blog" passHref>
                <NavigationMenuTrigger className="text-lg">Blog</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeSwitch></ThemeSwitch>
      </header>
    </>
  );
}
export default Header
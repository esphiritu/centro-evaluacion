'use client'
import React, {useState} from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
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
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { ModeToggle } from "@/utilities/dark-light-functionality/ModeToggle";
import { useMediaQuery } from "@/utilities/use-media-query"

const services = [
  {
    title: "Cursos",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Capacitación",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Consultoría",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]


function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(null)
  return (
    <>
      <header className="flex justify-between">
        <Link href="./">Proyecta empresarial</Link>
        <NavigationMenu>
          <NavigationMenuList className="w-auto md:min-h-fit md:bg-transparent md:dark:bg-transparent md:py-1 min-h-screen bg-slate-200  dark:bg-slate-600 py-10">
            <NavigationMenuItem>
              <Link href="./certificaciones" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="text-2xl md:text-lg font-semibold">Certificaciones</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl md:text-lg font-semibold">Alineaciones y talleres</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/explora"
                      >
                        <div className="mb-2 mt-4 md:text-lg font-medium">
                          Para profesionales
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Antes de tomar una evaluación, puedes asegurarte de que te has preparado en todos los elementos de la certificación
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Alineaciones">
                    Re-usable components 
                  </ListItem>
                  <ListItem href="/docs/installation" title="Talleres">
                    Dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Coaching">
                    Styles for professionals
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-2xl md:text-lg font-semibold">Soluciones empresariales</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
          </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./socios" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="text-2xl md:text-lg font-semibold">Socios</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="./blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="text-2xl md:text-lg font-semibold">Blog</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <ThemeSwitch></ThemeSwitch> */}
        <div className="flex">
          <ModeToggle></ModeToggle>
          <Button onClick={() => setOpen( open ? false : true)} size="icon" className={"md:hidden ml-3 z-20 hover:cursor-pointer"}>
            {open ? 
              <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-100"></X>
              : <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100"></MenuIcon>
            } 
            <span className="sr-only">mobile menu</span>
          </Button>
        </div>
      </header>
    </>
  );
}
export default Header

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}
            >
              <div className="font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      )
    })
ListItem.displayName = "ListItem"
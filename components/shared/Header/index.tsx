"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/ui/icons"
import { ModeToggle } from "@/components/ui/theme-toggle"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Deaneris Model",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Engine",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "How to use",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Use cases",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Better understanding",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "How it works",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const handleNavigationClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="fixed w-full z-20 h-[60px] lg:h-[5vh] flex items-center dark:bg-[#151515]/70 bg-slate-300/70 backdrop-blur-sm border-b-[1px] border-gray-800 dark:border-gray-200 px-4 lg:px-[15vw]">
        {/* Hamburger pro mobil */}
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute left-1/2 -translate-x-1/2 p-2"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
            </svg>
        </button>

        {/* Desktop navigace */}
        <div className={`
          fixed lg:relative top-[60px] lg:top-0 
          w-full lg:w-auto h-[calc(100vh-60px)] lg:h-auto
          bg-slate-300/95 dark:bg-[#151515]/95 lg:bg-transparent
          flex items-center justify-center
          transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          left-0
      `}>         
        <NavigationMenu>
            <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                            <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 pt-1 no-underline outline-none focus:shadow-md"
                                href="/"
                                onClick={handleNavigationClick}
                            >
                                <Icons.logo />
                                <div className="mb-2 mt-4 text-lg font-medium" onClick={handleNavigationClick}>
                                About Daeneris AI
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground" onClick={handleNavigationClick}>
                                Jarvis alike AI assistant for your business, personal life and better efficiency with technologies.
                                </p>
                            </Link>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/introduction" title="Introduction">
                            Learn about the project and what you can do with it.
                        </ListItem>
                        <ListItem href="/installation" title="Installation">
                            How to install and get started with the app and add-ons.
                        </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                            <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            onClick={handleNavigationClick}
                            >
                            {component.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem onClick={handleNavigationClick}>
                <Link href="/delete-account" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Delete Account
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem onClick={handleNavigationClick}>
                <Link href="/cookies" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Cookies
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem onClick={handleNavigationClick}>
                <Link href="/privacy" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Privacy Policy
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem onClick={handleNavigationClick}>
                <Link href="/terms&conditions" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Terms&Conditions
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu> 
        </div> 
        <div className="flex-1 md:flex-none flex justify-end mr-[2vw]">
            <ModeToggle />
        </div>

    </nav>
  
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

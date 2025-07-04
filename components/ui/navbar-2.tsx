"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react"


type MenuItem = {
  title: string
  url: string
  items?: { title: string; description: string; url: string }[]
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  {
    title: "Contact",
    url: "#", // URL can be "#" if it's purely a dropdown trigger
    items: [
      { title: "Phone", description: "+256 7777 888 666", url: "tel:+2567777888666" },
      { title: "Email", description: "example@demosmercantile.com", url: "mailto:example@demosmercantile.com" },
    ],
  },
]

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <nav className="navigation-bar sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          {/* Removed focus ring from the logo link as well for consistency */}
          <Link href="/" className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" aria-label="Demos Mercantile Home">
            <Image
              src="/logo.svg"
              alt="Demos Mercantile Logo"
              width={32}
              height={32}
              className="flex-shrink-0"
            />
            <span className="font-bold text-lg tracking-tight hidden md:inline">Demos Mercantile</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) =>
                  item.items ? (
                    <NavigationMenuItem className="navigation-links" key={item.title}>
                      <NavigationMenuTrigger
                        // Added focus-visible classes to remove ring
                        className={`text-base font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${item.title === "Contact" ? "data-[state=open]:bg-transparent data-[state=open]:text-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground" : ""}`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-popover text-popover-foreground p-4 rounded-md shadow-lg">
                        <ul className="grid w-[280px] gap-3">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.url}
                                  // Added focus-visible classes to remove ring
                                  className="flex flex-col p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-0"
                                >
                                  <div className="font-semibold text-sm leading-none">{subItem.title}</div>
                                  <div className="text-muted-foreground text-xs leading-none mt-1">
                                    {subItem.description}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        // Modified focus classes to remove ring
                        className="group inline-flex h-10 items-center justify-center rounded-md navigation-links px-4 py-2 font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-0 focus:ring-offset-0"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-6">
            {/* The primary button will also inherit the focus-visible behavior from ui/button, 
                if you need to override it specifically, add classes here. 
                Shadcn's Button already has focus-visible:outline-none, but ring might be present.
                If it still shows, add focus-visible:ring-0 focus-visible:ring-offset-0 to this button's className.
            */}
            <Button className="button text-sm" variant="default" size="sm">
              Request a Quote
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="md:hidden focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" // Added focus-visible classes
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="overflow-y-auto max-w-xs sm:max-w-sm"
              >
                <SheetHeader className="pb-4">
                  <SheetTitle>
                    {/* Removed focus ring from the mobile logo link */}
                    <Link
                      href="/"
                      className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Image src="/logo.svg" alt="Demos Mercantile Logo" width={32} height={32} />
                      <span className="font-bold text-lg">Demos Mercantile</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {menu.map((item) =>
                      item.items ? (
                        <AccordionItem
                          key={item.title}
                          value={item.title}
                          className="border-b-0"
                        >
                          <AccordionTrigger 
                            // Added focus-visible classes to remove ring
                            className="text-base font-semibold py-3 hover:no-underline focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          >
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-3 pb-2 pl-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.url}
                                // Added focus-visible classes to remove ring
                                className="block text-sm hover:text-primary transition-colors hover:no-underline focus-visible:outline-none focus-visible:ring-0"
                                onClick={() => setIsSheetOpen(false)}
                              >
                                <div className="font-medium">{subItem.title}</div>
                                <div className="text-muted-foreground text-xs">{subItem.description}</div>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.url}
                          // Added focus-visible classes to remove ring
                          className="block text-base font-semibold py-3 border-b-0 hover:text-primary transition-colors hover:no-underline focus-visible:outline-none focus-visible:ring-0"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </Accordion>

                  {/* Request for Quote Button in Mobile */}
                  {/* Similar to the desktop primary button, if you need to specifically remove its focus ring, 
                      add focus-visible:ring-0 focus-visible:ring-offset-0 to its className */}
                  <Button variant="default" className="w-full mt-4" onClick={() => setIsSheetOpen(false)}>
                    Request a Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
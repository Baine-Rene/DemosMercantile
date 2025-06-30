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
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Navigation } from "lucide-react"


export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/*Logo*/}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Image src="/public/vercel.svg" alt="" width={32} height={32} />
              </div>
              <span className="font-bold text-xl">Demos Mercantile</span>
            </Link>
          </div>

          {/*Navigation links*/}

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 px-y text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:big-accent disabled:pointer-events-none"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 px-y text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:big-accent disabled:pointer-events-none"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 px-y text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:big-accent disabled:pointer-events-none"
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 px-y text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:big-accent disabled:pointer-events-none"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>



          <div className="flex items-center space-x-4">
            <Button variant="default" size="sm">
              Request for quote
            </Button>


            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
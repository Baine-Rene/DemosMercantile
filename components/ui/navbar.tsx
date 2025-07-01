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
  // NavigationMenuIndicator,
  // NavigationMenuViewport,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full navigation-bar">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/*Logo*/}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 flex items-center justify-center">
                <Image src="/logo.svg" alt="" width={32} height={32} />
              </div>
              <span className="font-bold text-md hidden md:inline ">Demos Mercantile</span>
            </Link>
          </div>

          {/*Navigation links*/}

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="navigation-links group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent disabled:pointer-events-none"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="navigation-links group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent disabled:pointer-events-none"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="navigation-links group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent disabled:pointer-events-none"
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="navigation-links group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent disabled:pointer-events-none"
                  >Contact</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-bold">Phone:</div>
                            <div className="text-muted-foreground">
                              +256 7777 888 666
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-bold">Email:</div>
                            <div className="text-muted-foreground">
                              example@demosmercantile.com
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="button" variant="default" size="sm">
              Request for quote
            </Button>

            {/*Mobile hamburger button*/}
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
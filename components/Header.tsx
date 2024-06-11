"use client"

import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useState, useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";

const routs = [
    {
        label: 'Background',
        href: '#background'
    },
    {
        label: 'Portfolio',
        href: '#portfolio'
    },
    {
        label: 'Resume',
        href: '#resume'
    },
    {
        label: 'Contact',
        href: '#contact'
    },
];

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <header id={"navbar"} className={`transition-opacity sticky top-0 sm:flex sm:justify-between py-3 border-b bg-primary-foreground z-50`}>
            <Container>
                <div className={"px-4 flex h-12 items-center justify-between w-full"}>
                    <div className={"flex items-center justify-between"}>
                        <Avatar>
                            <AvatarImage src="/IMG_0003-Enhanced-NR.jpg" />
                            <AvatarFallback>JBJ</AvatarFallback>
                        </Avatar>
                        <Link href={"/"} className={"ml-4"}>
                            <h1 className={"text-2xl font-bold invisible md:visible lg:visible"}>
                                Jacob Bekele Jansson
                            </h1>
                        </Link>
                    </div>
                    <Sheet>
                        <SheetTrigger>
                            <Bars3Icon className={"h-6 w-6 lg:hidden"} />
                        </SheetTrigger>
                        <SheetContent side={"right"} className={"bg-white"}>
                            <nav className={"flex flex-col gap-4"}>
                                {routs.map((route, index) => (
                                    <SheetClose asChild key={index}>
                                        <Button asChild variant={"ghost"} key={index}>
                                            <Link href={route.href} key={index} className={"text-sm font-medium transition-colors"}>
                                                {route.label}
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <nav className={"mx-6 items-center space-x-4 lg:space-x-6 hidden lg:flex"}>
                        {routs.map((route, index) => (
                            <Button asChild variant={"ghost"} key={index}>
                                <Link href={route.href} key={index} className={"text-sm font-medium transition-colors"}>
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;
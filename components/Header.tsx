import Container from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { BackgroundGradient } from "./ui/background-gradient";
import { useState, useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { DropdownMenuIcon } from "@radix-ui/react-icons";

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
        <header id={"navbar"} className={`${scrollY > 1 ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity sticky top-0 sm:flex sm:justify-between py-3 px-4 border-b backdrop-blur-xl bg-white/30 z-50`}>
            <Container>
                <div className={"px-4 sm:px-6 lg:px-8 flex h-12 items-center justify-between w-full"}>
                    <div className={"flex items-center justify-between"}>
                        <BackgroundGradient containerClassName={"h-12 w-12 flex items-center justify-center mr-4"}>
                            <Avatar>
                                <AvatarImage src="/IMG_0003-Enhanced-NR.jpg" />
                                <AvatarFallback>JBJ</AvatarFallback>
                            </Avatar>
                        </BackgroundGradient>
                        <Link href={"/"} className={"ml-4 lg:ml-0"}>
                            <h1 className={"text-2xl font-bold invisible md:visible lg:visible"}>
                                Jacob Bekele Jansson
                            </h1>
                        </Link>
                    </div>
                    <Sheet>
                        <SheetTrigger>
                            <DropdownMenuIcon className={"h-6 w-6 md:hidden"} />
                        </SheetTrigger>
                        <SheetContent side={"right"}>
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
                    <nav className={"mx-6 lg:flex items-center space-x-4 lg:space-x-6 md:block hidden"}>
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
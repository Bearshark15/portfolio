import Container from "@/components/container";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const routs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/'
    },
    {
        label: 'Contact',
        href: '/'
    },
    {
        label: 'Products',
        href: '/'
    },
];

const Header = () => {
    return (
        <header className={'sm:flex sm:justify-between py-3 px-4 border-b'}>
            <Container>
                <div className={"relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full"}>
                    <div className={"flex items-center"}>
                        <Link href={"/"} className={"ml-4 lg:ml-0"}>
                            <h1 className={"text-x1 font-bold"}>
                                Jacob Bekele Jansson
                            </h1>
                        </Link>
                    </div>
                    <nav className={"mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block"}>
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
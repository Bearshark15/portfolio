
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center bg-black"}>
            <h1 className={"text-white text-5xl"}>This page is under construction</h1>
            <p className={"text-white text-2xl"}>Please check back later</p>
            <Link href={"/"}>
                <Button className={"bg-white mt-5 text-black"}>
                    Go back
                </Button>
            </Link>
        </div>
    );
}

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Subtitle, Title} from "@/components/text/Headings";

export default function NotFound() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center bg-black text-center"}>
            <Title className={"text-white"}>This page is under construction</Title>
            <Subtitle className={"text-white"}>Please check back later</Subtitle>
            <Link href={"/"}>
                <Button className={"bg-white mt-5 text-black"}>
                    Go back
                </Button>
            </Link>
        </div>
    );
}
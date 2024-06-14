import { ResumeEntry } from "@/lib/types";
import React from "react";
import Paragraph from "@/components/text/Paragraph";
import { Heading2, Subtitle } from "@/components/text/Headings";

interface ResumeEntryCardProps {
    entry: ResumeEntry;

}

const ResumeEntryCard: React.FC<ResumeEntryCardProps> = ({ entry }) => {
    return (
        <section className={`${entry.key === 1 ? "" : "mt-5"}`}>
            <div>
                <div className={"flex flex-row justify-between items-center"}>
                    <Heading2>{entry.title}</Heading2>
                    <div>
                        <Paragraph className={"text-sm"}>{entry.date}</Paragraph>
                    </div>
                </div>
                <Subtitle className={"text-gray-400 font-normal"}>{entry.subtitle}</Subtitle>
                <Paragraph className={"lg:w-1/2 w-full"} dangerouslySetInnerHTML={{__html: entry.description}}></Paragraph>
            </div>
        </section>
    )
}

export default ResumeEntryCard;
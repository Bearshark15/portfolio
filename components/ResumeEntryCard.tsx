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
                <div className={"flex justify-between items-center"}>
                    <Heading2 className={""}>{entry.title}</Heading2>
                    <div>
                        <p>{entry.date}</p>
                    </div>
                </div>
                <Subtitle className={"text-gray-400"}>{entry.subtitle}</Subtitle>
                <Paragraph className={"lg:w-1/2 w-full"}>{entry.description}</Paragraph>
            </div>
        </section>
    )
}

export default ResumeEntryCard;
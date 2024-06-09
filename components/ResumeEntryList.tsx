
import { ResumeEntry } from "@/lib/types";
import ResumeEntryCard from "./ResumeEntryCard";
import React from "react";

interface ResumeEntryListProps { 
    entries: ResumeEntry[];
}

const ResumeEntryList: React.FC<ResumeEntryListProps> = ({ entries }) => { 
    return (
        <div>
            {entries && entries.map((entry) => (
                <ResumeEntryCard key={entry.key} entry={entry} />
            ))}
        </div>
    );
}

export default ResumeEntryList;
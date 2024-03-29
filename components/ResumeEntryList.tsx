
import { ResumeEntry } from "@/ts/types";
import ResumeEntryCard from "./ResumeEntryCard";

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
import { ResumeEntry } from "@/ts/types";

interface ResumeEntryCardProps {
    entry: ResumeEntry;

}

const ResumeEntryCard: React.FC<ResumeEntryCardProps> = ({ entry }) => {
    return (
        <section className={"flex justify-between mb-10"}>
            <div>
                <h1 className={"text-2xl font-bold"}>{entry.title}</h1>
                <p className={"text-gray-400"}>{entry.subtitle}</p>
                <p>{entry.description}</p>
            </div>
            <div>
                <p>{entry.date}</p>
            </div>
        </section>
    )
}

export default ResumeEntryCard;
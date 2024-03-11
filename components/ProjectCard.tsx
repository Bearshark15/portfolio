import { Project } from "@/ts/types";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link href={project.pageLink} className={"outline-0 focus:ring-2 hover:ring-2 hover:shadow-xl ring-primary transition duration-300 rounded-lg"}>
            <Card className={"rounded-lg border-2"}>
                <CardContent className={"pt-4"}>
                    <div className={"aspect-square relative bg-foreground/5 dark:bg-background rounded-lg"}>
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className={"aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"}
                        />
                    </div>
                </CardContent>
                <CardFooter className={"flex-col items-start"}>
                    <div>
                        <p className={"font-semibold text-lg"}>{project.title}</p>
                        <p className={"text-sm text-primary/80"}>{project.shortDescription}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ProjectCard;
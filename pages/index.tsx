import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Container from "@/components/container";
import { Braces, GraduationCapIcon } from "lucide-react";
import ProjectList from "@/components/ProjectList";
import projects from "@/ts/projects";
import resume from "@/ts/resume";
import ResumeEntryList from "@/components/ResumeEntryList";

const inter = Inter({ subsets: ["latin"] });

interface SkeletonProps {
    project: {
        key: number;
        title: string;
        description: string;
        thumbnail: string;
    }
}

const Skeleton: React.FC<SkeletonProps> = (project) => (
    <div className="relative flex w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image
            src={project.project.thumbnail}
            alt={project.project.title}
            fill={true}
            className="rounded-xl" />
    </div>
);

export default function Home() {
    return (
        <main>
            <Header />
            <div className={"h-96 bg-grid-small-black/[0.2]"}>
                <Container>

                </Container>
            </div>
            <div className={"w-full min-h-96 border-b border-t shadow text-center"}>
                <Container>
                    <div className={"mt-14 mb-14"}>
                        <h1 id={"background"} className={"text-4xl font-bold"}>Background</h1>
                        <p>Welcome to my portfolio site!</p>
                    </div>
                    <div className={"h-full flex flex-col md:flex-row lg:flex-row items-center justify-evenly pb-14"}>
                        <div className={"m-10"}>
                            <div className={"flex items-center flex-col gap-4"}>
                                <Braces className={"h-14 w-14"}></Braces>
                                <h1 className={"text-xl font-bold"}>Skills</h1>
                                <p className={"text-gray-400"}>Unity, Unreal, C#,<br/> C++, Java</p>
                            </div>
                        </div>
                        <div className={"m-10"}>
                            <div className={"flex items-center flex-col gap-4"}>
                                <GraduationCapIcon className={"h-14 w-14"}></GraduationCapIcon>
                                <h1 className={"text-xl font-bold"}>Education</h1>
                                <p className={"text-gray-400"}>NTI Gymmnasiet, Uppsala University,<br /> San Diego State University</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"bg-grid-small-black/[0.2]"}>
                <Container>
                    <h1 id="portfolio" className={"text-4xl font-bold text-center p-20"}>Portfolio</h1>
                    <ProjectList projects={projects} />
                </Container>
            </div>
            <div className={"border-t shadow"}>
                <Container>
                    <div className="w-full h-[1000px]">
                        <div className={"mb-10 mt-10"}>
                            <h1 id={"resume"} className={"text-4xl font-bold"}>Jacob Bekele Jansson</h1>
                            <p>Game Programmer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <ResumeEntryList entries={resume}/>
                    </div>
                </Container>
            </div>
        </main>
    );
}

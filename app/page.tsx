import Header from "@/components/Header";
import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";
import ResumeEntryList from "@/components/ResumeEntryList";
import HeroHome from "@/components/HeroHome";
import { getSortedProjects } from "@/lib/projects";
import Paragraph from "@/components/text/Paragraph";
import {
    Heading1,
    Heading3,
    Subtitle,
    Title
} from "@/components/text/Headings";
import {
    Braces,
    GraduationCapIcon, Linkedin,
    LucideMail,
    PhoneIcon, Smile,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResumeData from "@/lib/resume";
import Image from "next/image";

export default function Home() {
    const projects = getSortedProjects();
    return (
        <main>
            <Header/>
            <HeroHome/>
            <section className={"w-full min-h-96 border-b border-t"} style={{background: "rgb(245,247,248)"}}>
                <Container>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"mt-14 mb-14 text-center"}>
                            <Title id={"background"}>Welcome to my portfolio site!</Title>
                            <Subtitle>This website was written using Next.js and Tailwind CSS in JetBrains WebStorm.</Subtitle>
                        </div>
                        <div className={"h-full flex flex-col gap-5 md:gap-10 lg:gap-20 md:flex-row lg:flex-row items-center justify-evenly pb-14"}>
                            <div className={"about-me-card"}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Smile className={"h-16 w-16"}></Smile>
                                    <Heading3 className={"lg:text-2xl"}>About Me</Heading3>
                                    <Paragraph>
                                        A cool, calm and collected programmer with a sharp eye for detail.
                                        Team player who loves to celebrate success together with others.
                                        Take pride in always delivering to the best of my ability.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className={"about-me-card"}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Braces className={"h-16 w-16"}></Braces>
                                    <Heading3 className={"lg:text-2xl"}>Skills</Heading3>
                                    <Paragraph>
                                        C#, C++, Java, TypeScript,
                                        Unity, Unreal Engine, Scrum,
                                        Visual Studio, Visual Studio Code,
                                        JetBrains Rider, Jira, Plastic SCM,
                                        Git, GitHub, and more.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className={"about-me-card"}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <GraduationCapIcon className={"h-16 w-16"}></GraduationCapIcon>
                                    <Heading3 className={"lg:text-2xl"}>Education</Heading3>
                                    <Paragraph>
                                        Bachelor’s Degree in Game Design and Programming, Uppsala University.
                                        Computer Science and Java Programming, San Diego State University.
                                        Software and Game Development, NTI Gymnasiet.
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                        <Link href={"#resume"} className={"mx-auto mb-10"}>
                            <Button variant={"outline"}>
                                View Resume
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <Title id="portfolio" className={"text-center p-20"}>Portfolio</Title>
                    <ProjectList projects={projects}/>
                </Container>
            </section>
            <section className={"border-t border-b shadow"}>
                <div className="w-full">
                    <Container>
                        <div className={"mb-10 mt-10"}>
                            <Title id={"resume"} className={"text-center"}>Resume</Title>
                            <Heading1 className={"my-5"}>About Me</Heading1>
                            <Paragraph className={"xl:w-1/2"}>
                                I am a 23-year-old Game Programmer based in Stockholm. I completed my bachelor’s degree in game design and programming in May 2024.
                                I love the creative process of making games, where different skills and personalities come together.<br/><br/>
                                As a programmer my job is to solve problems and make things work, and that’s what I love about it. My teammates know that I am reliable and do what is necessary to find a solution.
                                As a person I take pride in always delivering to the best of my ability. I am also careful about details. Clean code is for example very satisfying. I like to make sure my code is as readable as I can make it. It not only looks nice, but it also makes it easier for others to understand.<br/><br/>
                                While I am confident that I have a solid foundation to start working on a professional production, I am still very eager to learn new ways of working, new ways of programming, and new tools as well. I am always looking for ways to improve and I am not afraid to ask for help when I need it.
                            </Paragraph>
                        </div>
                        <Accordion type={"multiple"} className={""}>
                            {ResumeData.map((data, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>
                                        <h1 className={"font-bold"}>{data.title}</h1>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div>
                                            <ResumeEntryList entries={data.resume}/>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Container>
                </div>
            </section>

            <section className={"py-10"}>
                <Container>
                    <div className={"mb-20 text-center"}>
                        <Title id={"contact"}>Contact</Title>
                    </div>
                    <div className={"grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1"}>
                        <div className={"col-span-1 flex flex-col items-center justify-center"}>
                            <Image src={"/profile.jpg"} alt={"pic"} className={"rounded-full"} width={320} height={320}/>
                            <div className={"flex flex-col items-center justify-center mt-3 text-center lg:items-start lg:justify-start lg:hidden"}>
                                <Heading1 className={"text-center"}>Jacob Bekele Jansson</Heading1>
                                <Subtitle className={"text-center"}>Game Programmer/Software Developer</Subtitle>
                            </div>
                        </div>
                        <div className={"mr-10 col-span-2"}>
                            <div className={"hidden lg:flex flex-col items-center justify-center text-center lg:items-start lg:justify-start"}>
                                <Heading1 className={"text-center"}>Jacob Bekele Jansson</Heading1>
                                <Subtitle className={"text-center"}>Game Programmer/Software Developer</Subtitle>
                            </div>
                            <div className={"my-10 flex flex-col gap-3"}>
                                <div className={"flex flex-row items-center"}>
                                    <LucideMail className={"h-10 w-10"}></LucideMail>
                                    <Link href={"mailto:jacob.b.jansson@gmail.com"}
                                          className={"ml-2 text-xl hover:underline"}>
                                        jacob.b.jansson@gmail.com
                                    </Link>
                                </div>
                                <div className={"flex flex-row items-center"}>
                                    <PhoneIcon className={"w-10 h-10"}></PhoneIcon>
                                    <Link href={"tel:+46761749797"} className={"ml-2 text-xl hover:underline"}>
                                        +46 76 174 97 97
                                    </Link>
                                </div>
                                <div className={"flex flex-row items-center"}>
                                    <Linkedin className={"h-10 w-10"}></Linkedin>
                                    <Link href={"https://www.linkedin.com/in/jacob-bekele-jansson-a55b30162"}
                                          className={"ml-2"} passHref legacyBehavior>
                                        <a target={"_blank"} className={"ml-2 text-xl hover:underline"}>
                                            LinkedIn
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}

import Header from "@/components/Header";
import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";
import ResumeEntryList from "@/components/ResumeEntryList";
import HeroHome from "@/components/HeroHome";
import {
    Braces,
    GraduationCapIcon, Linkedin,
    LucideMail,
    PhoneIcon, Smile,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ResumeData from "@/lib/resume";
import {allProjects} from "contentlayer/generated";

function getSortedProjects()  {
    const projects = allProjects.sort((a, b) => {
        if (a.priority < b.priority) {
            return 1;
        } else if (a.priority > b.priority) {
            return -1;
        }
        else {
            return 0;
        }
    });

    return projects;
}

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
                            <h1 id={"background"} className={"text-4xl font-bold"}>Welcome to my portfolio site!</h1>
                            <p>This website was written using Next.JS and Tailwind CSS in JetBrains WebStorm</p>
                        </div>
                        <div className={"h-full flex flex-col gap-5 md:gap-20 md:flex-row lg:flex-row items-center justify-evenly pb-14"}>
                            <div className={"p-5 border rounded-xl w-64 h-[22rem]"}
                                 style={{background: "rgb(255,255,255)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Smile className={"h-16 w-16"}></Smile>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>About Me</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}} className={""}>
                                        Happy chap with a passion for problem-solving and a sharp eye for detail.
                                        Team player who loves to celebrate success together with others.
                                        Take pride in always deliver at the top of my ability.
                                        Often dream in code.
                                    </p>
                                </div>
                            </div>
                            <div className={"p-5 border rounded-xl w-64 h-[22rem]"}
                                 style={{background: "rgb(255,255,255)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Braces className={"h-16 w-16"}></Braces>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Skills</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>
                                        Unity, Unreal, <br/>
                                        Git, Plastic SCM, <br/>
                                        C#, C++, Java, <br/>
                                        Next.JS, Html, CSS <br/>
                                    </p>
                                </div>
                            </div>
                            <div className={"p-5 border rounded-xl w-64 h-[22rem]"}
                                 style={{background: "rgb(255,255,255)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <GraduationCapIcon className={"h-16 w-16"}></GraduationCapIcon>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Education</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>
                                        Uppsala University, <br/>
                                        San Diego State University, <br/>
                                        NTI Gymmnasiet
                                    </p>
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
                    <h1 id="portfolio" className={"text-4xl font-bold text-center p-20"}>Portfolio</h1>
                    <ProjectList projects={projects}/>
                </Container>
            </section>
            <section className={"border-t border-b shadow"}>
                <div className="w-full">
                    <Container>
                        <div className={"mb-10 mt-10"}>
                            <h1 id={"resume"} className={"text-4xl font-bold text-center"}>Resume</h1>
                            <h1 className={"text-3xl font-bold my-5"}>About Me</h1>
                            <h1 className={"text-2xl font-bold"}>Jacob Bekele Jansson</h1>
                            <p>Game Programmer</p>
                            <p className={"xl:w-1/2"}>
                                I am a 23-year-old Game Programmer and Software Developer based in Stockholm. I completed my bachelor’s degree in game design and Programming in June 2024.
                                I love the creative process of making games, where different skills and personalities come together. Being part of the full cycle, from idea to finished product, is especially rewarding.<br/><br/>
                                As a programmer my job is to solve problems and make things work, and that’s what I love about it. My teammates know that I am reliable and do what is necessary to find a solution.
                                As a person I take pride in always delivering to the best of my ability. I am also careful about details. Clean code is for example very satisfying. I like to make sure my code is as readable as I can make it. It not only looks nice, but it also makes it easier for others to understand.<br/><br/>
                                While I’m confident that I have a solid foundation to start working on a professional production, I’m still very eager to learn new ways of working, new ways of programming, and new tools as well. I’m always looking for ways to improve and I’m not afraid to ask for help when I need it.
                            </p>
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
                        <h1 id={"contact"} className={"text-4xl font-bold"}>Contact</h1>
                    </div>
                    <div className={"grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1"}>
                        <div className={"col-span-1 flex flex-col items-center justify-center"}>
                            <img src={"/IMG_0003-Enhanced-NR.jpg"} alt={"pic"} className={"rounded-full w-80"}/>
                        </div>
                        <div className={"mr-10 col-span-2"}>
                            <div className={"flex flex-col items-center justify-center text-center lg:items-start lg:justify-start"}>
                                <h1 className={"text-4xl font-bold text-center"}>Jacob Bekele Jansson</h1>
                                <p className={"text-2xl text-center"}>Game Programmer</p>
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

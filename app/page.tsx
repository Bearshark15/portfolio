import Header from "@/components/Header";
import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";
import ResumeEntryList from "@/components/ResumeEntryList";
import HeroHome from "@/components/HeroHome";
import {
    Braces,
    GraduationCapIcon,
    LinkedinIcon,
    LucideMail,
    PhoneIcon, Smile,
} from "lucide-react";
import education from "@/ts/education";
import skills from "@/ts/skills";
import workExperience from "@/ts/experience";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getSortedProjects} from "@/lib/projects";

export default function Home() {

    const projects = getSortedProjects();

    console.log(projects);

    return (
        <main>
            <Header/>
            <HeroHome/>
            <section className={"w-full min-h-96 border-b border-t"} style={{background: "rgb(240, 244, 247)"}}>
                <Container>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"mt-14 mb-14 text-center"}>
                            <h1 id={"background"} className={"text-4xl font-bold"}>Welcome to my portfolio site!</h1>
                            <p>This website was written using Next.JS and Tailwind CSS in JetBrains WebStorm</p>
                        </div>
                        <div className={"h-full flex flex-col md:flex-row lg:flex-row items-center justify-evenly pb-14"}>
                            <div className={"mx-10 p-5 border rounded-xl w-56 h-72 z-10 backdrop-blur-xl"}
                                 style={{background: "rgba(241, 243, 244, 0.1)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Smile className={"h-16 w-16"}></Smile>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>About Me</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>Unity, Unreal, Git, Plastic SCM, C#,
                                        C++, <br/> Java,
                                        Next.JS, Html, CSS</p>
                                </div>
                            </div>
                            <div className={"mx-10 p-5 border rounded-xl w-56 h-72 z-10 backdrop-blur-xl"}
                                 style={{background: "rgba(241, 243, 244, 0.1)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Braces className={"h-16 w-16"}></Braces>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Skills</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>Unity, Unreal, Git, Plastic SCM, C#,
                                        C++, <br/> Java,
                                        Next.JS, Html, CSS</p>
                                </div>
                            </div>
                            <div className={"mx-10 p-5 border rounded-xl w-56 h-72 z-10 backdrop-blur-xl"}
                                 style={{background: "rgba(241, 243, 244, 0.1)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <GraduationCapIcon className={"h-16 w-16"}></GraduationCapIcon>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Education</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>NTI Gymmnasiet, Uppsala
                                        University, <br/> San Diego State University</p>
                                </div>
                            </div>
                        </div>
                        <Link href={"#resume"} className={"mx-auto mb-10"}>
                            <Button className={"bg-white"}>View Resume</Button>
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
                        <div className={"mb-10 mt-10 px-5 lg:px-0"}>
                            <h1 id={"resume"} className={"text-4xl font-bold text-center"}>Resume</h1>
                            <h1 className={"text-3xl font-bold my-5"}>About Me</h1>
                            <h1 className={"text-2xl font-bold"}>Jacob Bekele Jansson</h1>
                            <p>Game Programmer</p>
                            <p className={"lg:w-1/2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa
                                qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <Accordion type={"multiple"} className={"px-5 lg:px-0"}>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h1 className={"font-bold"}>Skills</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <ResumeEntryList entries={skills}/>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <h1 className={"font-bold"}>Education</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <ResumeEntryList entries={education}/>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <h1 className={"font-bold"}>Work Experience</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <ResumeEntryList entries={workExperience}/>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Container>
                </div>
            </section>

            <section className={"py-10 px-5 lg:px-0"}>
                <Container>
                    <div className={"mb-20 text-center"}>
                        <h1 id={"contact"} className={"text-4xl font-bold"}>Contact</h1>
                    </div>
                    <div className={"grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1"}>
                        <div className={"col-span-1 flex flex-col items-center"}>
                            <img src={"/IMG_0003-Enhanced-NR.jpg"} alt={"pic"} className={"rounded-full w-80 mx-auto my-auto"}/>
                        </div>
                        <div className={"mr-10 col-span-2"}>
                            <div className={"flex flex-col items-center justify-center text-center lg:items-start lg:justify-start"}>
                                <h1 className={"text-4xl font-bold"}>Jacob Bekele Jansson</h1>
                                <p className={"text-2xl"}>Game Programmer</p>
                            </div>
                            <div className={"my-10"}>
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
                                    <LinkedinIcon className={"h-10 w-10"}></LinkedinIcon>
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

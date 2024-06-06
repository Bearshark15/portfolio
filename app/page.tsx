"use client"

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Braces, GraduationCapIcon } from "lucide-react";
import ProjectList from "@/components/ProjectList";
import projects from "@/ts/projects";
import education from "@/ts/education";
import skills from "@/ts/skills";
import workExperience from "@/ts/experience";
import ResumeEntryList from "@/components/ResumeEntryList";
import Hero from "@/components/Hero";

import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <NextUIProvider>
            <main>
                <Header />
                <Hero />
                <div className={"w-full min-h-96 border-b border-t"} style={{background: "rgb(240, 244, 247)"}}>
                    <Container>
                        <div className={"mt-14 mb-14 text-center"}>
                            <h1 id={"background"} className={"text-4xl font-bold"}>Background</h1>
                            <p>Welcome to my portfolio site!</p>
                        </div>
                        <div className={"h-full flex flex-col md:flex-row lg:flex-row items-center justify-evenly pb-14"}>
                            <div className={"m-10 p-5 border rounded-xl w-56 h-72 z-10 backdrop-blur-xl"}
                                style={{ background: "rgba(241, 243, 244, 0.1)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <Braces className={"h-16 w-16"}></Braces>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Skills</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>Unity, Unreal, Git, Plastic SCM, C#, C++, <br /> Java,
                                        Next.JS, Html, CSS</p>
                                </div>
                            </div>
                            <div className={"m-10 p-5 border rounded-xl w-56 h-72 z-10 backdrop-blur-xl"}
                                style={{ background: "rgba(241, 243, 244, 0.1)", borderColor: "hsl(202, 8%, 80%)"}}>
                                <div className={"flex items-center flex-col gap-2"}>
                                    <GraduationCapIcon className={"h-16 w-16"}></GraduationCapIcon>
                                    <h1 className={"text-xl lg:text-2xl font-bold"}>Education</h1>
                                    <p style={{color: "hsl(208, 8%, 70%)"}}>NTI Gymmnasiet, Uppsala University, <br/> San Diego State University</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div>
                    <Container>
                        <h1 id="portfolio" className={"text-4xl font-bold text-center p-20"}>Portfolio</h1>
                        <ProjectList projects={projects} />
                    </Container>
                </div>
                <div className={"border-t shadow"}>
                    <div className="w-full">
                        <div className={"mb-10 mt-10 px-5 lg:px-0"}>
                            <Container>
                                <h1 className={"text-4xl font-bold mb-5"}>About Me</h1>
                                <h1 id={"resume"} className={"text-3xl font-bold"}>Jacob Bekele Jansson</h1>
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
                            </Container>
                        </div>
                        <div style={{background: "rgb(240, 244, 247)"}} className={"py-5 px-5 lg:px-0"}>
                            <Container>
                                <h1 className={"text-3xl font-bold"}>Skills</h1>
                                <ResumeEntryList entries={skills}/>
                            </Container>
                        </div>
                        <div className={"py-5 px-5 lg:px-0"}>
                            <Container>
                                <h1 className={"text-3xl font-bold"} >Education</h1>
                                <ResumeEntryList entries={education}/>
                            </Container>
                        </div>
                        <div style={{background: "rgb(240, 244, 247)"}} className={"py-5 px-5 lg:px-0"}>
                            <Container>
                                <h1 className={"text-3xl font-bold"}>Work Experience</h1>
                                <ResumeEntryList entries={workExperience}/>
                            </Container>
                        </div>
                    </div>
                </div>
            </main>
        </NextUIProvider>
    );
}

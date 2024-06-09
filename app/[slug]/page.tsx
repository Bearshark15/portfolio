import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getProject} from "@/lib/projects";
import {ArrowLeft} from "lucide-react";

const Project = async ({ params }: { params: { slug: string } }) => {

    const project = await getProject(params.slug);

    return (
        <main>
            <section className={"min-h-96 mb-20 bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"}
                 style={{backgroundImage: `url(${project.bannerImage})`}}>
                <div className={"h-full w-full flex flex-col items-center justify-center gap-4"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.logoImage} alt={project.title} className={"w-96"}/>
                    <Link href={`${project.demoLink}`}
                          passHref legacyBehavior>
                        <a target={"_blank"}>
                            <Button>Play Demo</Button>
                        </a>
                    </Link>
                </div>
            </section>
            <Container>
                <article dangerouslySetInnerHTML={{__html: project.contentHtml}} className={"article"}/>
            </Container>
            <div className={"fixed top-5 left-5"}>
                <Link href={"/#portfolio"}>
                    <Button className={"w-14 h-14 flex items-center justify-center"}>
                        <ArrowLeft className={"w-14 h-14"} color={"white"}/>
                    </Button>
                </Link>
            </div>
        </main>
    );
}

export default Project;

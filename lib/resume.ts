import {ResumeEntry} from "@/lib/types";

export interface Pair {
    title: string;
    resume: ResumeEntry[];
}

const ResumeData: Pair[] = [
    {
        title: "Skills",
        resume: [
            {
                key: 1,
                title: "Programming",
                subtitle: "Languages",
                description: "C#, C++, Java, TypeScript, HTML, CSS",
                date: "",
            },
            {
                key: 2,
                title: "Game Development",
                subtitle: "Engines",
                description: "Unity, Unreal Engine, OpenGL, Scrum",
                date: "",
            },
            {
                key: 3,
                title: "Web Development",
                subtitle: "Frameworks",
                description: "Next.js, Tailwind CSS",
                date: "",
            },
            {
                key: 4,
                title: "Tools",
                subtitle: "Software",
                description: "Visual Studio, Visual Studio Code, JetBrains Rider, Jira, Plastic SCM, Git, GitHub, Adobe Photoshop",
                date: "",
            }
        ]
    },
    {
        title: "Languages",
        resume: [
            {
                key: 1,
                title: "English",
                subtitle: "Full professional proficiency",
                description: "I am fluent in English and have full professional communication skills.",
                date: "",
            },
            {
                key: 2,
                title: "Swedish",
                subtitle: "Native proficiency",
                description: "I am a native Swedish speaker and have excellent writing and speaking skills.",
                date: "",
            },
        ]
    },
    {
        title: "Education",
        resume: [
            {
                key: 1,
                title: "Uppsala University",
                subtitle: "Bachelor's Degree in Game Design and Programming",
                description: "At Uppsala University Campus Gotland I studied game design and programming. I learned programing in C++ and how to work and collaborate on projects using agile methodologies such as scrum and kanban alongside students from other disciplines like project management and graphic design.<br/><br> Campus Gotland is a very international campus and many of my classmates came from all over the world, which gave me a feel for what it’s like to work with people from different countries and cultures and I believe this experience will be very useful to me in my future career.",
                date: "Aug 2021-May 2024",
            },
            {
                key: 2,
                title: "San Diego State University",
                subtitle: "Exchange Student in Computer Science",
                description: "During my studies at Uppsala University, I spent a semester at San Diego State University as an exchange student. I took courses in Computer Science and Java programming to broaden my software development skills. In addition, I now have academic credits and a top grade in bowling!",
                date: "Aug 2023-Dec 2023",
            },
            {
                key: 3,
                title: "NTI Gymnasiet",
                subtitle: "Software Development with focus on Game Development",
                description: "NTI Gymnasiet is a high school with a tech, science, and IT profile. I studied software development with a focus on game development. I learned programming in C# and how to use Unity and Unreal Engine.",
                date: "Aug 2017-June 2020",
            },
        ]
    },
    {
        title: "Work Experience",
        resume: [
            {
                key: 1,
                title: "Espresso House",
                subtitle: "Barista",
                description: "Besides programming and game development, coffee is a passion of mine! Ever since my high school years I have worked as a barista at Espresso House on weekends and summer breaks. At Espresso House teamwork to create great customer experience is key.",
                date: "Oct 2019-Present"
            },
            {
                key: 2,
                title: "Securus Säkerhet",
                subtitle: "Security Guard",
                description: "I worked as a security guard at the World Trade Center building in Stockholm. I was responsible manning the reception, patrolling the building, checking for security breaches, and reporting any incidents.",
                date: "June 2020-Sept 2020"
            },
            {
                key: 3,
                title: "Skeppskattens Hamnkrog",
                subtitle: "Waiter",
                description: "I worked as a waiter at Skeppskattens Hamnkrog which is a restaurant in the archipelago of Stockholm. I was responsible for taking orders, serving food and drinks, and cleaning the restaurant.",
                date: "June 2019-Aug 2019"
            },
        ]
    },
];

export default ResumeData;
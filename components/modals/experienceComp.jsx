import ExperienceTemplate from "../ExperienceTemplate";
import Link from "next/link";
import LinkIcon from "../Icons/LinkIcon";

const ExperienceComp = () => {
    return (
        <>
            <ExperienceTemplate
                experienceContent={{
                    experience: {
                        title: "Experience",
                        content: [
                            {
                                duration: "NOV 2021– AUG 2024",
                                wTitle: "Front-End Developer - Placewise Group",
                                compantSite: "https://www.placewise.com/",
                                mContent: (
                                    <>
                                        <p>
                                            I spearheaded the development and deployment of a suite of feature-rich Next.js applications, leveraging the power of TypeScript to create highly responsive and data-driven interfaces. These applications served as the core of a retail real-estate management platform, empowering users with enhanced data visualization capabilities. By meticulously optimizing the front-end architecture and data processing logic, I achieved a significant 20% improvement in data visualization efficiency, enabling users to gain deeper insights and make more informed decisions.

                                            To ensure scalability and reliability, I integrated the applications with cloud computing environments on AWS, utilizing Docker and Kubernetes for containerization and deployment. This strategic approach facilitated seamless scaling during peak usage and streamlined the deployment process, resulting in a more robust and resilient system.

                                            I prioritized the user experience by implementing responsive and visually appealing designs using Tailwind CSS, ensuring consistent branding and optimal performance across a wide range of devices. This commitment to front-end excellence contributed to a more engaging and intuitive user interface.

                                            Demonstrating a proactive approach to continuous learning and adaptability, I expanded my technical skillset by delving into new technologies, including C++, Ruby, and PHP. This commitment to staying abreast of the latest advancements allowed me to contribute to diverse projects and tackle complex challenges with confidence.
                                        </p>
                                    </>
                                ),
                                contentLang: [
                                    "Next JS",
                                    "Tailwind CSS",
                                    "Javascript",
                                    "Typescript",
                                    "GraphQL",
                                    "PHP",
                                ],
                            },
                            {
                                duration: "MAR 2019 – OCT 2021",
                                wTitle: "Front End Developer - Ethix Incorporation",
                                mContent: (
                                    <>
                                        <p>
                                            I spearheaded the development of feature-rich Next.js applications, leveraging TypeScript to create data-driven interfaces for a retail real-estate management platform. By optimizing front-end architecture and data processing, I achieved a 20% improvement in data visualization efficiency. Deployment on AWS, utilizing Docker and Kubernetes, ensured scalability and reliability. Collaborating closely with UX/UI designers, I translated Figma mocks into pixel-perfect, accessible interfaces, while Tailwind CSS provided consistent, responsive design. Redux integration optimized state management, and proactive performance tuning led to a 20% reduction in page load times and enhanced SEO.

                                            To streamline development and maintain consistency, I developed and maintained reusable React components and services, resulting in a 30% reduction in development time. I also demonstrated continuous learning and adaptability by expanding my technical skillset to include C++, Ruby, and PHP. This comprehensive approach, encompassing both technical execution and strategic optimization, contributed to the successful delivery of a robust and user-friendly platform.
                                        </p>
                                    </>
                                ),
                                contentLang: [
                                    "React JS",
                                    "Storybook",
                                    "Javascript",
                                    "Typescript",
                                    "CSS",
                                    "SQL",
                                    "Firebase",
                                ],
                            },

                        ],
                    },
                }}
            />
            <div className="flex items-center justify-center my-5 text-xs md:text-md space-x-1 font-faunaOne text-cBlue dark:text-pBlue tracking-widest">
                <Link href="">
                    <a className="hover:underline underline-offset-2"
                        href="https://emerald-randy-29.tiiny.site"
                        target="_blank">View Full Resume</a>
                </Link>
                <LinkIcon classname="w-3" />
            </div>
        </>
    );
};

export default ExperienceComp;

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
                                duration: "SEP 2023 – Date",
                                wTitle: "Web Developer - Freelance / Contract work",
                                mContent: (
                                    <>
                                        <p>
                                            Delivering high-quality, robust production code for a diverse
                                            array of projects for clients while adopting best practices,nurturing professional growth and enhancing team efficacy in delivering top-tier software solutions.
                                        </p>
                                    </>
                                ),
                                contentLang: [
                                    "Next JS",
                                    "Tailwind CSS",
                                    "Javascript",
                                    "Typescript",
                                    "Node JS",
                                    "AWS / Firebase",
                                ],
                            },
                            {
                                duration: "NOV 2021 – JUN 2023",
                                wTitle: "Web Developer - Placewise Group",
                                compantSite: "https://www.placewise.com/",
                                mContent: (
                                    <>
                                        <p>
                                            Deliver high-quality, robust production code for a diverse
                                            array of projects for clients including Centennial
                                            properties, and more. Providing camaraderie within
                                            development department through close collaboration,
                                            knowledge sharing.
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
                                            Developed, maintained, and shipped production code of a
                                            start-up e-commerce websites, employing a wide range of
                                            modern front-end technologies and practices i.e A/B
                                            testing and Image Optimization to deliver engaging user
                                            experiences, streamline navigation, and optimize
                                            performance focusing on 100% code re-use +
                                            compositionFlexible tree component.
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
                            {
                                duration: "JAN 2019 – MAR 2019",
                                wTitle: "Junior Front End Developer - Solar City",
                                compantSite: "http://www.solarcity.com/",
                                mContent: (
                                    <>
                                        <p>
                                            Actively participated in agile development cycles,contributing to a collaborative learning environment while engaging in rigorous code review and adopted bestpractices,nurturingprofessionalgrowth
                                            while enhancing team efficacy in delivering top-tier software solutions.
                                        </p>
                                    </>
                                ),
                                contentLang: [
                                    "HTML",
                                    "CSS",
                                    "Javascript",
                                    "Typescript",
                                    "Node js",
                                    "Express",
                                    "Python",
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

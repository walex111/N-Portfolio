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
                                wTitle: "Dev Apprenticeship - Techtonic",
                                compantSite: "https://www.linkedin.com/school/techtonic-apprenticeship",
                                mContent: (
                                    <>
                                        <p>
                                            Successfully completed a rigorous full stack web developer
                                            apprenticeship program, mastering skills in front-end
                                            technologies like HTML, CSS, JavaScript, and responsive
                                            web design, as well as back-end technologies such as
                                            Node.js and Express. Collaborated with experienced mentors
                                            to build complex web applications, fostering in-depth
                                            problem-solving skills and gaining expertise in coding
                                            best practices.
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
                            {
                                duration: "JAN 2017 – FEB 2018",
                                wTitle: "Web Developer - Freelance work",
                                mContent: (
                                    <>
                                        <div className="px-5 md:px-10">
                                            <ul className="list-decimal space-y-12">
                                                <li>
                                                    <Link href="https://www.audreybakes.com/" passHref>
                                                        <a
                                                            className="flex space-x-1 text-cBlue dark:text-pBlue hover:underline underline-offset-2"
                                                            target="_blank"
                                                        >
                                                            Local Business Website for a Bakery (updated)
                                                            <LinkIcon classname="w-3 ml-1" />
                                                            <p>{" "}:</p>
                                                        </a>
                                                    </Link>

                                                    <ul className="list-disc space-y-2 mt-2">
                                                        <li  ><span className="font-bold ">Description</span>: Develop a responsive website for a bakery and coffee shop in Long
                                                            Island. Include features like an interactive menu, online ordering, and integration
                                                            with social media for promotions.</li>
                                                        <li  ><span className="font-bold ">Technologies Used</span>: HTML, SCSS, JavaScript, Node.js, MongoDB (for order
                                                            management), Google Maps API (for location).</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-cBlue dark:text-pBlue">
                                                        Political Campaign Website for Suffolk Council Candidate (deactivated):
                                                    </div>
                                                    <ul className="list-disc space-y-2 mt-2">
                                                        <li  ><span className="font-bold ">Description</span>: Construct a dynamic website for a Suffolk Council Candidate,
                                                            emphasizing their vision, policies, and community involvement. Include features for
                                                            event announcements, volunteer recruitment, and donation processing.</li>
                                                        <li  ><span className="font-bold ">Technologies Used</span>: WordPress for content management, React for interactive
                                                            elements, PayPal API (for donations), Google Maps API (for event locations).</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-cBlue dark:text-pBlue">
                                                        Event Management App for a Cultural Festival (canceled):
                                                    </div>
                                                    <ul className="list-disc space-y-2 mt-2">                                                        <li  ><span className="font-bold ">Description</span>: Design and build an app for managing schedules, ticket sales, and artist
                                                        information for a local cultural festival in Holbrok, NY. Ensure a user-friendly
                                                        interface for both organizers and attendees.</li>
                                                        <li  ><span className="font-bold ">Technologies Used</span>: React Native, Firebase (for real-time updates), Stripe API (for
                                                            ticket sales).</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ),
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

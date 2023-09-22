import AboutModalTemplate from "../AboutModelTemplate";

const AboutModal = () => {
    return (
        <AboutModalTemplate
            aboutContent={{
                about: {
                    title: "About",
                    content: (
                        <>
                            <p>
                                After watching a codeing tutorial in college studying
                                mathematics, I fell in love with Computer Science and switched
                                my major but kept math because I love giving myself headaches.
                                Fast-forward to today, and I have had the priviledge of building
                                Web Apps for a{" "}
                                <a href="">
                                    <span className="text-red-500">Start-up</span>
                                </a>
                                , and a{" "}
                                <a href="">
                                    <span className="text-red-500">
                                        Retail Digital Marketing and Technology Company
                                    </span>
                                </a>
                                .
                            </p>
                            <p>
                                My focus in the industry as of couple months ago was building
                                projects for clients at{" "}
                                <a href="">
                                    <span className="text-red-500">Placewise Group</span>
                                </a>{" "}
                                and when I am not doing that, I am building personal projects to
                                always further understand the web.
                            </p>
                            <p>
                                When I'm not working, I am battling with the weights in the gym.
                            </p>
                        </>
                    ),
                },
                experience: {
                    title: "Experience",
                    content: [
                        {
                            duration: "Nov 2021 – Jun 2023",
                            wTitle: "Web Developer - Placewise Group",
                            mContent: (
                                <>
                                    <p>
                                        Deliver high-quality, robust production code for a diverse
                                        array of projects for clients including Harvard Business
                                        School, Everytown for Gun Safety, Pratt Institute, Koala
                                        Health, Vanderbilt University, The 19th News, and more.
                                        Provide leadership within engineering department through
                                        close collaboration, knowledge shares, and mentorship.
                                    </p>
                                </>
                            ),
                            contentLang: [
                                "React JS",
                                "Tailwind CSS",
                                "Javascript",
                                "Typescript",
                                "GraphQL",
                            ],
                        },
                        {
                            duration: "Mar 2019 – Oct 2021",
                            wTitle: "Front End Developer - Ethix Incorporation",
                            mContent: (
                                <>
                                    <p>
                                        Developed, maintained, and shipped production code for
                                        client websites. Clients included JetBlue, Lovesac, U.S.
                                        Cellular, U.S. Department of Defense, and more.
                                    </p>
                                </>
                            ),
                            contentLang: [
                                "React JS",
                                "Storybook",
                                "Javascript",
                                "Typescript",
                                "CSS",
                            ],
                        },
                    ],
                },
                aboutSite: {
                    content:
                        "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Netlify. All text is set in the Inter typeface.",
                },
            }}
        />
    );
};

export default AboutModal;

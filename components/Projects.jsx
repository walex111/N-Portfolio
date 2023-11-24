import Link from "next/link";
import ProjectsTemplate from "./ProjectsTemplate";
import LinkIcon from "./Icons/LinkIcon";

const Projects = () => {
    return (
        <>
            <ProjectsTemplate
                projectsContent={{
                    projects: {
                        content: [
                            {
                                image: "/images/smnv-clothing.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink:
                                        "https://practical-blackwell-74e650.netlify.app/",
                                },
                                projectType: "S M N V CLOTHING",
                                projectDes: (
                                    <>
                                        <p>
                                            Developed an E-Commerce website employing React, Redux,
                                            SCSS, Firebase, and integrated Stripe for seamless payment
                                            processing. Demonstrated expertise in front-end
                                            technologies, state management, and e-commerce solutions.
                                            This project showcased my ability to create a
                                            sophisticated online shopping platform with secure payment
                                            integration and an appealing user interface.
                                        </p>
                                    </>
                                ),
                                projectLang: ["React JS", "Javascript", "Redux", "Firebase", "SCSS"],
                            },
                            {
                                image: "/images/m-rolodex.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink: "https://github.com/walex111/monsters-rolodex",
                                },
                                projectType: "MONSTER'S ROLODEX",
                                projectDes: (
                                    <>
                                        <p>
                                            Leveraged React, React State, and CSS to design and
                                            implement a dynamic filtered rolodex. The project
                                            showcases strong front-end development skills in crafting
                                            a responsive and interactive user interface. Created an
                                            efficient rolodex system, improving data organization and
                                            accessibility.
                                        </p>
                                    </>
                                ),
                                projectLang: ["React JS", "React State", "Javascript", "CSS"],
                            },
                            {
                                image: "/images/smiggle.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink: "https://silly-carson-212d11.netlify.app/",
                                },
                                projectType: "SMIGGLE SOCIAL MEDIA APP",
                                projectDes: (
                                    <>
                                        <p>
                                            Designed and developed a feature-rich social media
                                            application utilizing a stack of MongoDB, GraphQL,
                                            Node.js, Apollo, React.js, and Semantic UI for a dynamic
                                            and user-friendly experience. This project demonstrates my
                                            proficiency in building scalable, interactive web
                                            applications and integrating various technologies to
                                            deliver a comprehensive social networking platform.
                                            Leveraged back-end, front-end, and database technologies
                                            to create an engaging user interface and a seamless
                                            communication platform.
                                        </p>
                                    </>
                                ),
                                projectLang: ["React JS", "Javascript", "MongoDB", "Grapgql", "Semantic UI"],
                            },
                            {
                                image: "/images/Airbnb-clone.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink: "https://airbnb-clone-7a31b.web.app/",
                                },
                                projectType: "AIRBNB CLONE",
                                projectDes: (
                                    <>
                                        <p>
                                            Created an e-commerce website, utilizing technologies such
                                            as React, Redux, SCSS, Firebase, and Stripe integration
                                            for seamless payment processing. Developed a user-friendly
                                            and responsive platform that enhances the shopping
                                            experience and enables secure and efficient transactions.
                                        </p>
                                    </>
                                ),
                                projectLang: [
                                    "React JS",
                                    "Redux",
                                    "Firebase",
                                    "Javascript",
                                    "Stripe",
                                    "CSS",
                                    "GraphQL",
                                ],
                            },
                            {
                                image: "/images/vrt-keyb.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink:
                                        "https://dazzling-mirzakhani-5e90c2.netlify.app/",
                                },
                                projectType: "VIRTUAL KEYBOARD",
                                projectDes: (
                                    <>
                                        <p>
                                            Crafted a Virtual Keyboard by leveraging JavaScript and
                                            the CSS preprocessor SCSS, showcasing proficiency in
                                            front-end development. This project highlights my ability
                                            to design interactive user interfaces and apply creative
                                            styling with SCSS, offering a unique and functional
                                            solution.
                                        </p>
                                    </>
                                ),
                                projectLang: ["React JS", "Javascript", "CSS"],
                            },
                            {
                                image: "/images/amexp.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink: "https://elated-nobel-30e1fb.netlify.app/",
                                },
                                projectType: "AMAZING EXPECTATION",
                                projectDes: (
                                    <>
                                        <p>
                                            Designed a captivating Self Awareness Website by utilizing
                                            HTML and the CSS preprocessor SCSS, demonstrating my
                                            strong front-end development skills. This project
                                            showcases my ability to combine aesthetic design with
                                            functionality, creating an engaging user experience.
                                            Leveraging SCSS, I crafted visually appealing styles to
                                            enhance the website's visual appeal and user engagement.
                                        </p>
                                    </>
                                ),
                                projectLang: ["HTML", "Javascript", "SCSS"],
                            },
                            {
                                image: "/images/v1-portfolio.png",
                                links: {
                                    fullCode: "View Full Code",
                                    fullCodeLink: "https://v1samsonoketunmbi.netlify.app/",
                                },
                                projectType: "Samson Oketunmbi Portfolio (V1)",
                                projectDes: (
                                    <>
                                        <p>
                                            My first portfolio website built with HTML, SCSS and Javascript. It is a simple
                                            functional portfolio with minimal animations and features.
                                        </p>
                                    </>
                                ),
                                projectLang: ["HTML", "Javascript", "SCSS"],
                            },
                        ],
                    },
                }}
            />
            <div className="flex items-center font-faunaOne text-xs md:text-md tracking-widest justify-center mt-8 pb-20 text-cBlue dark:text-pBlue">
                <Link href="/projectsFull">
                    <a className="hover:underline underline-offset-2">
                        View Full Project catalog
                    </a>
                </Link>
                <LinkIcon classname="w-3 ml-1" />
            </div>
        </>
    );
};

export default Projects;

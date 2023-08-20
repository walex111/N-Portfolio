import Image from "next/image";
import smiggle from "./Images/smiggle.png";
import bBad from "./Images/Breaking Bad.png";
import vKeyboard from "./Images/vrt-keyb.png";
import AirBNB from "./Images/Airbnb-clone.png";

const Projects = () => {
    return (
        <div className="space-y-32">
            <h1 className="text-4xl font-bebas text-neutral-600 mb-10">
                PROJECTS
            </h1>
            <div className=" bg-neutral-600 rounded-xl shadow-md md:max-w-2xl">
                <div className="md:shrink-0">
                    <Image
                        src={smiggle}
                        alt="Modern building architecture"
                        objectFit="cover"
                        width={700}
                        height={500}
                    />
                </div>
                <div className="p-8 space-y-2">
                    <h1 className="block text-3xl leading-tight tracking-wide font-bebas font-extrabold text-white hover:underline">
                        SMIGGLE SOCIAL MEDIA APP
                    </h1>
                    <p className="text-white font-oswald text-lg">
                        Engineered a Social Media app using MongoDB, GraphQL, Node.js, Apollo, React.js, and Semantic UI. Real-time updates, and a visually appealing, responsive interface.
                    </p>
                    <div className="space-x-16 pt-8">
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW DEMO</button>
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW FULL CODE</button>
                    </div>
                </div>
            </div>
            <div className=" bg-neutral-600 rounded-xl shadow-md md:max-w-2xl">
                <div className="md:shrink-0">
                    <Image
                        src={bBad}
                        alt="Modern building architecture"
                        objectFit="cover"
                        width={700}
                        height={500}
                    />
                </div>
                <div className="p-8">
                    <h1 className="block mt-1 text-3xl leading-tight tracking-wide font-bebas font-extrabold text-white hover:underline">
                        BREAKING BAD API
                    </h1>
                    <p className="mt-2 text-white font-oswald text-lg">
                        Utilized the Breaking Bad API to create a dynamic React.js application showcasing characters from the show. Leveraged FetchAPI for data retrieval, SCSS for styling, and integrated a search feature and animations to enhance user interaction.
                    </p>
                    <div className="space-x-16 pt-8">
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW DEMO</button>
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW FULL CODE</button>
                    </div>
                </div>
            </div>
            <div className=" bg-neutral-600 rounded-xl shadow-md md:max-w-2xl">
                <div className="md:shrink-0">
                    <Image
                        src={vKeyboard}
                        alt="Modern building architecture"
                        objectFit="cover"
                        width={700}
                        height={613}
                    />
                </div>
                <div className="p-8">
                    <h1 className="block mt-1 text-3xl leading-tight font-bebas tracking-wide font-extrabold text-white hover:underline">
                        VIRTUAL KEYBOARD
                    </h1>
                    <p className="mt-2 text-white font-oswald text-lg">
                        Engineered a Virtual Keyboard application using JavaScript and SCSS. The project enhances user experience and facilitates integration with web applications.
                    </p>
                    <div className="space-x-16 pt-8">
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW DEMO</button>
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW FULL CODE</button>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-600 rounded-xl shadow-md md:max-w-2xl">
                <div className="md:shrink-0">
                    <Image
                        src={AirBNB}
                        alt="Modern building architecture"
                        objectFit="cover"
                        width={1500}
                        height={1090}
                    />
                </div>
                <div className="p-8 space-y-2">
                    <h1 className="block text-3xl leading-tight font-bebas tracking-wide font-extrabold text-white hover:underline">
                        AIRBNB CLONE REACT
                    </h1>
                    <p className="text-white font-oswald text-lg">
                        Utilized React, React Router DOM, Hooks, State management, and SCSS to develop a feature-rich Airbnb Clone. The project recreates some Airbnb's core functionalities, enabling users to effortlessly browse and interact with rental listings through a responsive and visually appealing interface.
                    </p>
                    <div className="space-x-16 pt-8">
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW DEMO</button>
                        <button className="px-8 py-2 text-lg bg-white rounded font-oswald text-neutral-600" onClick={() => { }}>VIEW FULL CODE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

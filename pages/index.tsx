import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Social from "../components/Social";
import HamburgerMenu from "../components/hamburgerMenu";
import Link from "next/link";
import Oketunmbi from "../components/Icons/Oketunmbi";
import Samson from "../components/Icons/Samson";
import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>SAMSON OKETUNMBI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="w-full h-28 flex justify-end px-20 sticky top-0 z-50">
          <HamburgerMenu />
        </div>
        <div className="w-full h-[100vh] px-20 py-10 md:px-60 lg:px-72">
          <div className="mt-[25%]">
            <Samson />
            <Oketunmbi />
          </div>
          <div className="w-[85%] mb-20">
            <p className="text-xl text-neutral-600 font-oswald text-left">
              I am a seasoned Front End Developer with over four years of
              experience, dedicated to crafting immersive and visually stunning
              web experiences. With a strong foundation in HTML, CSS, and
              JavaScript, I've successfully transformed design concepts into
              seamless, responsive interfaces that captivate users. My
              proficiency extends to modern frameworks like React and Vue.js,
              enabling me to create dynamic and interactive user interfaces.
              Throughout my career, I've embraced the synergy of art and
              functionality, consistently pushing the boundaries of creativity
              while ensuring optimal user experiences. I am currently focusing
              on creating and maintaining Retail Real Estate products at{" "}
              <span className="text-rose-500 hover:text-rose-300">
                <Link href="https://www.placewise.com/" passHref>
                  <a target="_blank">Placewise LLC</a>
                </Link>
              </span>
              .
            </p>
          </div>
          <div>
            <Social />
          </div>
        </div>
        <div className="w-full px-20 py-10 md:px-60 lg:px-72">
          <div className="w-full h-0.5 mb-40 bg-neutral-600"></div>
          <h1 className="text-4xl font-bebas text-neutral-600 mb-10">
            ABOUT ME
          </h1>

          <p className="text-xl text-neutral-600 font-oswald text-left mb-5">
            Hello! My name is Samson and I love creating and designing things
            for the web. I started in web development in 2018 when I decided to
            pursue my dream career and I have been able to work for a startup
            company and now for a{" "}
            <span className="text-rose-500 hover:text-rose-300">
              <Link href="https://www.placewise.com/" passHref>
                <a target="_blank">Retail Real Estate Company</a>
              </Link>
            </span>
            .
          </p>
          <p className="text-xl text-neutral-600 font-oswald text-left mb-5">
            Here are few technologies I work with:
          </p>

          <div className="flex space-x-5 text-neutral-600 text-xl font-oswald text-left">
            <div>
              <p className="">- HTML5.</p>
              <p className="">- Javascript.</p>
              <p className="">- Typescript.</p>
              <p className="">- GraphQl.</p>
            </div>
            <div>
              <p className="">- Node Js.</p>
              <p className="">- Python.</p>
              <p className="">- Agile/Scrum.</p>
            </div>
            <div>
              <p className="">- Object-Oriented Programming (OOP).</p>
              <p className="">- Web Performance Optimization (WPO).</p>
              <p className="">- Git Version Control.</p>
              <p className="">- Dom Manipulation.</p>
              <p className="">- SEO Principles.</p>
            </div>
          </div>
        </div>
        <div className="w-full px-20 py-10 md:px-60 lg:px-72">
          <div className="w-full h-0.5 my-40 bg-neutral-600"></div>
        </div>

        <div className="w-full px-20 py-10 md:px-60 lg:px-72">
          <Projects />
        </div>

        <div className="w-full py-10">
          <div className="w-full h-0.5 mb-10 bg-neutral-600"></div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;

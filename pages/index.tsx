import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Social from "../components/Social";
import HamburgerMenu from "../components/hamburgerMenu";
import Link from "next/link";
import Oketunmbi from "../components/Icons/Oketunmbi";
import Samson from "../components/Icons/Samson";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>SAMSON OKETUNMBI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-20">
        <div className="w-full h-[100vh] px-20 py-10 md:px-60 lg:px-72">
          <HamburgerMenu />
          <div className="mt-64">
            <Samson />
            <Oketunmbi />
          </div>
          <div className="w-[85%] mb-28">
            <p className="text-xl text-neutral-600 font-oswald text-left">
              I am a Front End Developer specialized in creating and
              occasionally designing scalable digital experience. I am currently
              focusing on creating and maintaining Retail Real Estate products
              at{" "}
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

          <div className="flex space-x-32">
            <div>
              <p className="text-xl text-neutral-600 font-oswald text-left">
                - React.
              </p>
              <p className="text-xl text-neutral-600 font-oswald text-left">
                - Javascript.
              </p>
              <p className="text-xl text-neutral-600 font-oswald text-left">
                - Typescript.
              </p>
            </div>
            <div>
              <p className="text-xl text-neutral-600 font-oswald text-left">
                - GraphQl.
              </p>
              <p className="text-xl text-neutral-600 font-oswald text-left">
                - Node Js.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-20 py-10 md:px-60 lg:px-72">
          <div className="w-full h-0.5 my-40 bg-neutral-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

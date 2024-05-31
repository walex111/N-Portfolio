import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import staticProps from "../staticProps";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Github from "../components/Icons/Github";
import LinkedIn from "../components/Icons/Linkedin";
import Link from "next/link";
import ElipseAnimation from "../components/Icons/ElipseAnimation";
import Circle from "../components/Icons/Circle";
import ElipseAnimationComb from "../components/Icons/ElipseAnimationComb";
import ExperienceModal from "../components/modals/experienceComp";
import AboutTemplate from "../components/AboutTemplate";
import Projects from "../components/Projects";
import dynamic from "next/dynamic";
import Social from "../components/Social";
import LocaleMenu from "../components/LocaleMenu";
import Behance from "../components/Icons/Behance";

const NoSSR = dynamic(() => import("../components/no-ssr"), { ssr: false });

const Home: NextPage = ({}) => {
  const { t } = useTranslation("common");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const router = useRouter();

  return (
    <NoSSR>
      <Head>
        <title>Samson T. Oketunmbi | Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="h-screen w-full bg-lightc dark:bg-darkc text-darkc dark:text-lightc dark:text-opacity-70 light:text-opacity-70 relative">
        <div className="overflow-hidden h-screen w-full">
          <div className="flex h-full w-full text-sm">
            <div className="w-14 h-full border-r border-b dark:border-lightc dark:border-opacity-10 border-darkc border-opacity-40">
              <LocaleMenu mainHeader="SO" />
            </div>
            <div className="hidden md:block w-12 h-full border-r dark:border-lightc dark:border-opacity-10 border-darkc border-opacity-40">
              <div className="w-full h-full flex justify-center overflow-hidden text-cBlue dark:text-pBlue">
                <span className="-rotate-90 whitespace-nowrap flex space-x-10 font-cinzel">
                  <button className="tracking-widest hover:underline underline-offset-2">
                    <a
                      target="_blank"
                      href="https://github.com/walex111/N-Portfolio"
                    >
                      {t("navigation.psc")}
                    </a>
                  </button>
                  <button className="tracking-widest hover:underline underline-offset-2">
                    <Link href="#projects" onClick={handleScroll}>
                      <a target="" href="">
                        {t("navigation.projects")}
                      </a>
                    </Link>
                  </button>
                  <button className="tracking-widest hover:underline underline-offset-2">
                    <Link href="#experience" onClick={handleScroll}>
                      <a target="" href="">
                        {t("navigation.exp")}
                      </a>
                    </Link>
                  </button>
                  <button className="tracking-widest hover:underline underline-offset-2">
                    <Link href="#about" onClick={handleScroll}>
                      <a target="" href="">
                        {t("navigation.abt")}
                      </a>
                    </Link>
                  </button>
                </span>
              </div>
            </div>
            <div className="md:w-80 md:h-[100%] md:border-r md:flex md:flex-col md:dark:border-lightc md:dark:border-opacity-10 border-darkc border-opacity-40 font-cinzel">
              <div className="hidden md:h-[60%] md:w-full md:flex justify-center items-center">
                <ElipseAnimationComb
                  classname={""}
                />
                <ElipseAnimationComb
                  classname={""}
                />
              </div>
              <div className="hidden md:flex justify-center items-center md:h-[10%] md:w-full border-t md:dark:border-lightc md:dark:border-opacity-10 border-darkc border-opacity-40">
                <button
                  type="button"
                  onClick={() => router.push("mailto:owale07@gmail.com")}
                  className="h-full w-full tracking-widest hover:underline underline-offset-2 text-xs md:text-md text-cBlue dark:text-pBlue"
                >
                  owale07@gmail.com
                </button>
              </div>
              <div className="hidden md:flex flex-col space-y-5 justify-center items-center h-[30%] w-full border-t md:dark:border-lightc md:dark:border-opacity-10 border-darkc border-opacity-40">
                <Link href="https://github.com/walex111" passHref>
                  <a className="hover:animate-spin" target="_blank">
                    <Github
                      width="60px"
                      height="60px"
                      classname={"stroke-cBlue dark:stroke-pBlue"}
                    />
                  </a>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samsonwaleoketunmbi/"
                  passHref
                >
                  <a className="hover:animate-spin" target="_blank">
                    <LinkedIn
                      width="45px"
                      height="45px"
                      classname={"stroke-cBlue dark:stroke-pBlue"}
                    />
                  </a>
                </Link>
                <Link href="https://www.behance.net/samsonoketunmbi" passHref>
                  <a className="hover:animate-spin" target="_blank">
                    <Behance
                      width="45px"
                      height="45px"
                      classname={"stroke-cBlue dark:stroke-pBlue"}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full overflow-y-scroll">
              <div className="h-[100%] border-b md:dark:border-lightc md:dark:border-opacity-10 dark:border-lightc border-darkc dark:border-opacity-10 border-opacity-40 flex-1 flex flex-col items-center font-cinzel">
                <div className="h-[80%] w-full justify-center items-center flex flex-col pb-7">
                  <div className="flex">
                    <div className="space-y-1">
                      <div className="w-32 h-32">
                        <Circle
                          classname={
                            "motion-safe:animate-pulse stroke-cBlue dark:stroke-pBlue"
                          }
                        />
                      </div>
                      <div className="hidden md:block">
                        <ElipseAnimation
                          width="135"
                          height="135"
                          classname={"stroke-cBlue dark:stroke-pBlue"}
                        />
                      </div>
                      <div className="block md:hidden">
                        <ElipseAnimation
                          width="135"
                          height="135"
                          classname={"stroke-cBlue dark:stroke-pBlue"}
                        />
                      </div>
                    </div>
                    <div className="hidden md:block space-y-1">
                      <div className="w-32 h-32">
                        <Circle
                          classname={
                            "motion-safe:animate-pulse stroke-cBlue dark:stroke-pBlue"
                          }
                        />
                      </div>
                      <div className="w-32 h-32">
                        <Circle
                          classname={
                            "motion-safe:animate-pulse stroke-cBlue dark:stroke-pBlue"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[20%] w-full flex justify-center items-center border-t md:dark:border-lightc md:dark:border-opacity-10 border-darkc dark:border-lightc dark:border-opacity-10 border-opacity-40">
                  <AboutTemplate />
                </div>
              </div>
              <div
                id="about"
                className="h-[100%] border-b md:dark:border-lightc md:dark:border-opacity-10 dark:border-lightc border-darkc dark:border-opacity-10 border-opacity-40 flex-1 flex flex-col items-center font-faunaOne tracking-widest"
              >
                <div className="h-full w-full justify-center items-center flex flex-col space-y-10 pb-7">
                  <p className="text-xs md:text-md px-5 md:px-20 font-faunaOne">
                    {t("scroll-2.paragrapg1")} a{" "}
                    <span className="text-cBlue dark:text-pBlue">
                      <Link href="https://www.audreybakes.com/" passHref>
                        <a
                          className="hover:underline underline-offset-2"
                          target="_blank"
                        >
                          {t("scroll-2.cta1")}
                        </a>
                      </Link>
                    </span>{" "}
                    a{" "}
                    <span className="text-cBlue dark:text-pBlue">
                      {t("scroll-2.cta2")}
                    </span>
                    and an{" "}
                    <span className="text-cBlue dark:text-pBlue">
                      {t("scroll-2.cta3")}
                    </span>
                    <p className="pt-2">
                      {t("scroll-2.paragrapg2")}
                      <span className="text-cBlue dark:text-pBlue">
                        <Link href="https://www.placewise.com/" passHref>
                          <a
                            className="hover:underline underline-offset-2"
                            target="_blank"
                          >
                            {t("scroll-2.cta4")}
                          </a>
                        </Link>
                      </span>
                    </p>
                  </p>
                  <div className="flex self-start pl-2 md:hidden">
                    <Social className="flex flex-row justify-center items-center" />
                  </div>
                </div>
              </div>
              <div
                id="experience"
                className="border-b md:dark:border-lightc md:dark:border-opacity-10 border-darkc dark:border-lightc dark:border-opacity-10 border-opacity-40 flex-1 flex flex-col items-center font-cinzel"
              >
                <div className="w-full justify-center items-center flex flex-col space-y-10 mb-10">
                  <div className="px-5 md:px-20">
                    <ExperienceModal />
                  </div>
                </div>
              </div>
              <div
                id="projects"
                className="border-b md:dark:border-lightc md:dark:border-opacity-10 border-darkc dark:border-lightc dark:border-opacity-10 border-opacity-40 flex-1 flex flex-col items-center font-faunaOne"
              >
                <div className="w-full justify-center items-center flex flex-col space-y-10 px-5 md:px-10">
                  <Projects />
                </div>
              </div>
              <div
                id="projects"
                className="h-[20%] border-b md:dark:border-lightc md:dark:border-opacity-10 border-darkc border-opacity-10 flex-1 flex justify-center items-center font-faunaOne"
              >
                <p className="w-[80%] tracking-widest text-xs md:text-md">
                  Designed in Figma and coded in{" "}
                  <span className="text-darkc dark:text-lightc">
                    Visual Studio Code
                  </span>{" "}
                  by yours truly. Built with{" "}
                  <span className="text-darkc dark:text-lightc">Next.js</span>,{" "}
                  <span className="text-darkc dark:text-lightc">
                    Tailwind CSS
                  </span>
                  ,{" "}
                  <span className="text-darkc dark:text-lightc">
                    Framer Motion
                  </span>{" "}
                  and deployed with{" "}
                  <span className="text-darkc dark:text-lightc">Netlify</span>.
                  Texts in{" "}
                  <span className="text-darkc dark:text-lightc">Cinzel</span>,{" "}
                  <span className="text-darkc dark:text-lightc">Fauna One</span>{" "}
                  and{" "}
                  <span className="text-darkc dark:text-lightc">Oswald</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: await staticProps({
      locale,
      data: {},
    }),
    revalidate: 60,
  };
}

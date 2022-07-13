import type { NextPage } from "next";
import Head from "next/head";
import HamburgerMenu from "../components/hamburgerMenu";
import LinkedIn from "../components/Icons/Linkedin";
import Github from "../components/Icons/Github";
import Instagram from "../components/Icons/Instagram";
import Behance from "../components/Icons/Behance";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>SAMSON OKETUNMBI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8"></div>
    </div>
  );
};

export default Home;

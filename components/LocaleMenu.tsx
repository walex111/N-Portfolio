import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import useDarkMode from "./useDarkMode";

type SizeWH = {
  mainHeader: string;
};

const LocaleMenu: React.FunctionComponent<SizeWH> = ({ mainHeader }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const router = useRouter();
  const { asPath, locale, locales } = router;

  const { t } = useTranslation("common");

  return (
    <div className="h-screen flex flex-col space-y-6 justify-center overflow-hidden">
      <span className="flex items-center justify-center text-cBlue dark:text-pBlue">
        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </span>
      <span className="-rotate-90 whitespace-nowrap flex space-x-14 font-cinzel">
        {/* <button className="hover:underline underline-offset-2">
          <Link href={asPath} locale={locale}>
            <a target="" href="">
              {locales
                .filter((l) => l !== locale)
                .map((l) => (
                  <li key={l}>
                    <Link
                      className="tracking-widest"
                      href={asPath}
                      locale={l}
                      onClick={(e) => {
                        // console.log("onClick")
                        return (e.target as HTMLAnchorElement).blur();
                      }}
                      onMouseDown={(e) => {
                        // console.log("onMouseDown")
                        return (e.target as HTMLAnchorElement).blur();
                      }}
                      onMouseUp={(e) => {
                        // console.log("onMouseUp")
                        return (e.target as HTMLAnchorElement).blur();
                      }}
                      onPointerUp={(e) => {
                        // console.log("onPointerUp")
                        return (e.currentTarget as HTMLAnchorElement).blur();
                      }}
                      onPointerDown={(e) => {
                        // console.log("onPointerDown")
                        // return (e.currentTarget as HTMLAnchorElement).blur()
                      }}
                      onTouchStart={(e) => {
                        // console.log("onTouchStart")
                        return (e.target as HTMLAnchorElement).blur();
                      }}
                      onTouchEnd={(e) => {
                        // console.log("onTouchEnd")
                        return (e.target as HTMLAnchorElement).blur();
                      }}
                    >
                      {t(l)}
                    </Link>
                  </li>
                ))}
            </a>
          </Link>
        </button> */}

        <button className="hover:underline underline-offset-2">
          <Link href="/">
            <a
              className="text-2xl font-oswald tracking-widest text-cBlue dark:text-pBlue"
              href=""
              target=""
            >
              {mainHeader}
            </a>
          </Link>
        </button>
      </span>
    </div>
  );
};

export default LocaleMenu;

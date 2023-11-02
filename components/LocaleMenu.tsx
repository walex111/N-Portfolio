import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type SizeWH = {
  mainHeader: string;
};

const LocaleMenu: React.FunctionComponent<SizeWH> = ({ mainHeader }) => {
  const router = useRouter();
  const { asPath, locale, locales } = router;

  const { t } = useTranslation("common");

  return (
    <div className="h-screen flex justify-center overflow-hidden">
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
              className="text-2xl font-oswald tracking-widest text-pBlue"
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

import React from "react";
import { useTranslation } from "react-i18next";

const AboutTemplate = ({ aboutContent }: any) => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col p-5 text-center font-faunaOne">
      <h1 className="text-xl text-lightc md:text-2xl font-black tracking-wide uppercase mb-2">
        {t("scroll-1.Heading")}
      </h1>
      <p className="text-xs text-lightc md:text-md tracking-wide font-faunaOne uppercase mb-2">
        {t("scroll-1.Subheading")}
      </p>
      <p className="text-xs md:text-md tracking-wide">
        {t("scroll-1.paragrapg")}
      </p>
    </div>
  );
};

export default AboutTemplate;

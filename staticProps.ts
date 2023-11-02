import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const staticProps = async ({
  locale = "en",
  data = {},
  i18nSources = ["common"],
}: StaticProps) => {
  const translations = await serverSideTranslations(locale, i18nSources);

  const results = {
    ...translations,
    ...data,
  };

  return results;
};

export default staticProps;

type StaticProps = {
  locale: string;
  data?: object;
  i18nSources?: string[];
};

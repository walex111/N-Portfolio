import LocaleMenu from "../components/LocaleMenu";
import dynamic from "next/dynamic";
import ProjectsFullM from "../components/ProjectsFullM"

const NoSSR = dynamic(() => import("../components/no-ssr"), { ssr: false });

const ProjectsFull = () => {
  return (
    <NoSSR>
      <div className="h-screen w-full bg-lightc dark:bg-darkc text-darkc dark:text-lightc dark:text-opacity-70 light:text-opacity-70">
        <div className="overflow-hidden h-screen w-full">
          <div className="flex h-full w-full">
            <div className="w-14 h-full border-r border-b dark:border-lightc dark:border-opacity-10 border-darkc border-opacity-40">
              <LocaleMenu mainHeader="BACK" />
            </div>
            <div className="w-full overflow-y-scroll">
              <ProjectsFullM />
            </div>
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default ProjectsFull;

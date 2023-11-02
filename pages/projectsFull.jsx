import LocaleMenu from "../components/LocaleMenu";
import dynamic from "next/dynamic";
import ProjectsFullM from "../components/ProjectsFullM"

const NoSSR = dynamic(() => import("../components/no-ssr"), { ssr: false });

const ProjectsFull = () => {
  return (
    <NoSSR>
      <div className="h-screen w-full bg-darkc text-lightc">
        <div className="overflow-hidden h-screen w-full">
          <div className="flex h-full w-full">
            <div className="w-14 h-full border-r border-b border-lightc border-opacity-10">
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

import React from "react";
import Link from "next/link";
import ImageComp from "./Image";
import LinkIcon from "./Icons/LinkIcon";

const ProjectsTemplate = ({ projectsContent }: any) => {
  const { projects } = projectsContent;

  return (
    <>
      <div className="font-faunaOne space-y-10 py-10">
        {projects.content.map((c: any) => {
          return (
            <div className="hover:border border-cBlue dark:border-pBlue border-opacity-40 dark:border-opacity-10 p-4">
              <Link className="" href={c.links.fullCodeLink}>
                <a target="_blank" className="lg:flex lg:space-x-6">
                  <div className="hidden lg:flex h-24">
                    <ImageComp
                      className="object-cover rounded"
                      alt=""
                      src={c.image}
                      width={210}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col text-sm lg:w-full">
                    <div className="flex flex-col">
                      <div className="flex">
                        <h1 className="text-md text-cBlue dark:text-pBlue font-medium mb-2 mr-2 truncate">
                          {c.projectType}
                        </h1>
                        <LinkIcon classname="w-3 self-start text-cBlue dark:text-pBlue pt-[0.15rem]" />
                      </div>
                      <p className="text-xs md:text-md tracking-widest">
                        {c.projectDes}
                      </p>
                    </div>
                    <div className="mt-2 grid grid-rows-2 md:grid-rows-2 grid-flow-col gap-2">
                      {c.projectLang.map((cl: any) => {
                        return (
                          <ul className="text-xs md:text-md text-gray">
                            <li>{cl}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:hidden h-24">
                    <ImageComp
                      className="object-cover rounded"
                      alt=""
                      src={c.image}
                      width={210}
                      height={100}
                    />
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsTemplate;

import React from "react";
import LinkIcon from "./Icons/LinkIcon";
import Link from "next/link";

const ProjectsFullMTemplate = ({ projectsContent }: any) => {
  const { projects } = projectsContent;

  return (
    <>
      <div className="font-faunaOne space-y-12 pb-10 xl:p-48 overflow-scroll">
        <div className="w-auto flex flex-col">
          <div className="overflow-hidden">
            <h1 className="w-full h-20 z-50 bg-darkc fixed flex justify-center items-center text-md md:text-2xl font-black tracking-wide uppercase">
              FULL PROFESSIONAL PROJECTS
            </h1>
            <table className="w-full z-0 text-left text-xs font-light tracking-widest table-auto relative mt-10">
              <thead className=""></thead>
              {projects.content.map((c: any) => {
                return (
                  <tbody key={c}>
                    {c.projects.p1.map((p: any) => {
                      return (
                        <tr
                          key={p.project}
                          className="w-full border-b dark:border-lightc border-darkc dark:border-opacity-10 border-opacity-40"
                        >
                          <td className="px-6 py-4">{p.year}</td>
                          <td>
                            <div className="flex md:hidden pr-6">
                              <Link href={p.linkURL}>
                                <a
                                  className="hover:underline underline-offset-2 text-md text-cBlue dark:text-pBlue font-medium mr-2"
                                  target="_blank"
                                >
                                  {p.project}
                                </a>
                              </Link>
                              <LinkIcon classname="w-3 self-start text-cBlue dark:text-pBlue pt-[0.15rem]" />
                            </div>
                            <div className="hidden md:flex">{p.project}</div>
                          </td>
                          <td className="hidden md:block py-4">
                            {p.link && (
                              <div className="flex items-center text-xs md:text-md space-x-1 font-faunaOne text-cBlue dark:text-pBlue tracking-widest">
                                <Link href={p.linkURL}>
                                  <a
                                    className="hover:underline underline-offset-2"
                                    target="_blank"
                                  >
                                    {p.link}
                                  </a>
                                </Link>
                                <LinkIcon classname="w-3" />
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFullMTemplate;

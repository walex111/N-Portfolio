import React from "react";
import LinkIcon from "./Icons/LinkIcon";
import Link from "next/link";

const ProjectsFullMTemplate = ({ projectsContent }: any) => {
  const { projects } = projectsContent;

  return (
    <>
      <div className="font-faunaOne space-y-12 py-10 xl:p-48 overflow-scroll">
        <div className="w-auto flex flex-col">
          <div className="overflow-hidden">
            <table className="w-full text-left text-xs font-light tracking-widest table-auto relative">
              <thead className=""></thead>
              {projects.content.map((c: any) => {
                return (
                  <tbody>
                    {c.projects.p1.map((p: any) => {
                      return (
                        <tr className="w-full border-b border-lightc border-opacity-10">
                          <td className="px-6 py-4">{p.year}</td>
                          <td>
                            <div className="flex md:hidden pr-6">
                              <Link href={p.linkURL}>
                                <a
                                  className="hover:underline underline-offset-2 text-md text-pBlue font-medium mr-2"
                                  target="_blank"
                                >
                                  {p.project}
                                </a>
                              </Link>
                              <LinkIcon classname="w-3 self-start text-pBlue pt-[0.15rem]" />
                            </div>
                            <div className="hidden md:flex">{p.project}</div>
                          </td>
                          <td className="hidden md:block py-4">
                            {p.link && (
                              <div className="flex items-center text-xs md:text-md space-x-1 font-faunaOne text-pBlue tracking-widest">
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

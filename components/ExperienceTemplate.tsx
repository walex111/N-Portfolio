import Link from "next/link";
import React, { useState, useEffect } from "react";
import LinkIcon from "./Icons/LinkIcon";

const ExperienceTemplate = ({ experienceContent }: any) => {
  const { experience } = experienceContent;

  return (
    <>
      <div className="mt-8 pb-20">
        <div className="space-y-16 font-faunaOne">
          {experience.content.map((c: any) => {
            return (
              <div className="lg:flex">
                <p className="text-xs md:text-md lg:w-1/3 uppercase">
                  {c.duration}
                </p>
                <div className="lg:w-full">
                  <h1 className="uppercase text-pBlue text-md font-medium mb-2">
                    {c.compantSite && (
                      <span className="text-pBlue">
                        <Link href={c.compantSite} passHref>
                          <a
                            className="flex hover:underline underline-offset-2"
                            target="_blank"
                          >
                            {c.wTitle}
                            <LinkIcon classname="w-3 ml-1 pb-[0.2rem]" />
                          </a>
                        </Link>
                      </span>
                    )}
                    {!c.compantSite && (
                      <span className="text-pBlue">{c.wTitle}</span>
                    )}
                  </h1>
                  <p className="text-xs font-extralight tracking-widest md:text-md">
                    {c.mContent}
                  </p>
                  <div className="mt-4 grid grid-rows-2 md:grid-rows-2 grid-flow-col gap-2">
                    {c.contentLang &&
                      c.contentLang.map((cl: any) => {
                        return (
                          <ul className="text-xs md:text-md text-gray whitespace-nowrap rounded-sm">
                            <li>{cl}</li>
                          </ul>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceTemplate;

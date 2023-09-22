import React, { useState, useEffect } from "react";

const AboutModalTemplate = ({ aboutContent }: any) => {
  const { about, experience, aboutSite } = aboutContent;

  return (
    <>
      <div className="mb-5">
        <div>
          <h1 className="text-4xl">Samson T. Oketunmbi</h1>
        </div>
        <p className="text-3xl">Web Developer</p>
        <p className="text-xl">I build products for the web.</p>
      </div>
      <div className="">
        <div className="space-y-4 font-oswald">{about.content}</div>
      </div>

      <div className="mt-8 pb-20 font-bebas">
        <h1 className="text-2xl">{experience.title}</h1>
        <div className="space-y-5 font-oswald">
          {experience.content.map((c: any) => {
            return (
              <div className="">
                <p>{c.duration}</p>
                <div>
                  {c.wTitle}
                  {c.mContent}
                  <div className="mt-4 grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-2">
                    {c.contentLang.map((cl: any) => {
                      return (
                        <ul className="px-3 py-2 whitespace-nowrap bg-neutral-600 text-white rounded-sm flex justify-center">
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
      <div className="font-oswald tracking-wide pb-20">
        <p>{aboutSite.content}</p>
      </div>
    </>
  );
};

export default AboutModalTemplate;

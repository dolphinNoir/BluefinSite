"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-20" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between lg:pr-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 flex justify-center lg:justify-start">
          <Image
            src="/images/about-image.png"
            width={700}
            height={600}
            alt="About us"
            className="lg:w-full lg:h-auto"
          />
        </div>
        <div className="lg:w-1/2 md:pt-[3rem] sm:pt-[2rem]">
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-base lg:text-lg mb-8">
            Here at Bluefin, we specialize in empowering businesses through
            bespoke automation solutions tailored to their unique needs. Our
            approach is simple yet powerful: we delve deep into understanding
            your business processes, intricacies, and pain points. By closely
            collaborating with your team, we identify opportunities where
            automation can streamline operations, boost productivity, and drive
            growth.
          </p>
          <div className="flex flex-row justify-start mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

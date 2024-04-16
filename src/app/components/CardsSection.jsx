import React from "react";
import CustomCard from "./CustomCard";

export const CardsSection = () => {
  return (
    <section id="our-process" className="mt-[7rem] lg:mt-[2rem]">
      <h2 className="text-5xl font-semibold mb-4 text-white pb-[4rem]">
        Our Process
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <CustomCard
          step="Step 1"
          description="Automate repetitive tasks and streamline processes."
          bgColor="bg-[#181818]"
          icon={true}
          iconPath="M16 1H8C6.896 1 6 1.896 6 3V21C6 22.104 6.896 23 8 23H16C17.104 23 18 22.104 18 21V3C18 1.896 17.104 1 16 1ZM12 20C10.896 20 10 19.104 10 18H14C14 19.104 13.104 20 12 20ZM16 16H8V4H16V16ZM12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14Z"
        />
        <CustomCard
          step="Step 2"
          description="Seamlessly integrate with existing systems and tools."
          bgColor="bg-[#181818]"
          icon={true}
          iconPath="M13 10V3L4 14h7v7l9-11h-7z"
        />
        <CustomCard
          step="Step 3"
          description="Tailor solutions to meet specific business needs."
          bgColor="bg-[#181818]"
          icon={true}
          iconPath="M16 1H8C6.896 1 6 1.896 6 3V21C6 22.104 6.896 23 8 23H16C17.104 23 18 22.104 18 21V3C18 1.896 17.104 1 16 1ZM12 20C10.896 20 10 19.104 10 18H14C14 19.104 13.104 20 12 20ZM16 16H8V4H16V16ZM12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14Z"
        />
        <CustomCard
          step="Step 4"
          description="Increase productivity and efficiency in operations."
          bgColor="bg-[#181818]"
          icon={true}
          iconPath="M6 18L18 6M6 6l12 12"
        />
        <CustomCard
          step="Step 5"
          description="Scale solutions as your business grows and evolves."
          bgColor="bg-[#181818]"
          icon={true}
          iconPath="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </div>
    </section>
  );
};

export default CardsSection;

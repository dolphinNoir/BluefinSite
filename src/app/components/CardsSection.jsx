import React from "react";
import CustomCard from "./CustomCard";

import { FaSquareSteam } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { PiGraphLight } from "react-icons/pi";
import { IoHammerOutline } from "react-icons/io5";
import { GrDeploy, GrHostMaintenance } from "react-icons/gr";

export const CardsSection = () => {
  return (
    <section id="our-process" className="mt-[7rem] lg:mt-[2rem]">
      <h2 className="text-5xl font-semibold mb-4 text-white pb-[4rem]">
        Our Process
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <CustomCard
          step="Step 1"
          description="Discuss your business operations and identify areas together that can be automated"
          bgColor="bg-[#181818]"
          icon={true}
          iconComponent={<RiTeamFill size={20} />}
        />
        <CustomCard
          step="Step 2"
          description="Next we will create a diagram detailing the automations we will build for you"
          bgColor="bg-[#181818]"
          icon={true}
          iconComponent={<PiGraphLight size={20} />}
        />
        <CustomCard
          step="Step 3"
          description="Once approved we will develop the custom automations"
          bgColor="bg-[#181818]"
          icon={true}
          iconComponent={<IoHammerOutline size={20} />}
        />
        <CustomCard
          step="Step 4"
          description="Next we deploy the automations into your environment, ensuring ease of use."
          bgColor="bg-[#181818]"
          icon={true}
          iconComponent={<GrDeploy size={18} />}
        />
        <CustomCard
          step="Step 5"
          description="Finally we will maintain your automations as you and your business needs change"
          bgColor="bg-[#181818]"
          icon={true}
          iconComponent={<GrHostMaintenance size={18} />}
        />
      </div>
    </section>
  );
};

export default CardsSection;

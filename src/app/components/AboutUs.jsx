import React from "react";

const AboutUs = () => {
  return (
    <div className="py-[4rem]">
      <h2 className="text-3xl lg:text-5xl font-bold text-white pb-8 lg:pb-[4rem]">
        About Us
      </h2>
      <section id="about-us" className="bg-gray-900 py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row md:flex-row">
            <div className="md:w-1/2">
              <div className="p-4">
                <p className="text-2xl  mb-4 pb-2">
                  We are a team of automation experts dedicated to optimizing
                  processes and tasks for businesses. Our goal is to maximize
                  efficiency, saving you both time and money.
                </p>
                <p className="text-2xl py-2">
                  Unlike off-the-shelf solutions, we provide personalized
                  consultations to understand your unique needs. We then develop
                  custom automation solutions tailored specifically to your
                  business.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="p-4">
                <img
                  src="/images/about-image.png"
                  alt="Our Team"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

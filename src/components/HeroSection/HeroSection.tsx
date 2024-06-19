import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:py-16" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start md:pl-10 lg:pl-0 xl:pl-0"
        >
          <h1 className="text-textPrimary mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-blue-300 to-primary text-transparent bg-clip-text">
              Find Your
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Forever", 1000, "Puppy", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-textColor text-base sm:text-lg mb-6 lg:text-xl">
            Become New Family & New Home for Puppy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[200px] h-[200px] md:w-80 md:h-80 lg:w-96 lg:h-96 relative overflow-hidden">
            <img
              src="/images/dog.jpg"
              alt="hero"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

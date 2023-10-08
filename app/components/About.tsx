"use client";

import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import ServiceCard from "./cards/ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(null)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am an on and off Web Developer with 5 years of experience. Excited and
        ready to take a full deep dive into the world of Software Development! I
        enjoy the process of problem solving. To take the time to evaluate a
        problem and evaluating the many methods to solve it for an effective
        solution. Let's work together to build and develop!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title + "-" + index}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

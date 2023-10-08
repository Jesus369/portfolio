"use client";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

import ProjectCard from "./cards/ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <p className={styles.sectionHeadText}>Projects.</p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-md max-w-3xl leading-[30px]"
        >
          Presented below are a list of projects to showcase my skills. Each
          project has been resourceful and helped in advancing me into becoming
          a better developer. Links to the project and Github repo are provided.
        </motion.p>
      </div>

      <div className="mt-20 flex xs:flex-col sm:flex-row flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

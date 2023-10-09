"use client";
import Image, { StaticImageData } from "next/image";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type Props = {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: Props) => (
  <VerticalTimelineElement
    visible
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#8DA4C7", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={icon}
          alt={company_name}
          width={50}
          height={50}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-secondary text-md font-semibold" style={{ margin: 0 }}>
        {company_name}
      </p>
    </div>

    <ul className="m-t list-disc ml-5 space-y-2">
      {points.map((point, index) => (
        <li
          key={`experience point-${index}`}
          className="text-white-100 text-md pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(null)}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <p className={`${styles.sectionHeadText}`}>Work Experience</p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`Experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

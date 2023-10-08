import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

type Props = {
  index: number;
  title: string;
  icon: StaticImageData;
};

const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-1 rounded-md shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-md py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          // Tilt options provided to each card
          data-options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <Image
            src={icon}
            alt="skill icon"
            width={50}
            height={50}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;

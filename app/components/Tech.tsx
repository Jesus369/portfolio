"use client";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }, index) => {
        return (
          <div key={`technologiesIndex-${index}`} className="w-28 h-28">
            <BallCanvas icon={icon.src} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";

import { github, link } from "../../assets";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  source_code_link: string;
  github_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  github_link,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={link}
              alt="link to project"
              width={200}
              height={200}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(github_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={github}
              alt="link to github"
              width={200}
              height={200}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="mt-2 text-white text-md">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={`tag-${index}`} className={`text-md ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

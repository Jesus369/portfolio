import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        //   @ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>{" "}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

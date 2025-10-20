import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// small useIsMobile hook (same pattern used in Tech)
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, [breakpoint]);

  return isMobile;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const isMobile = useIsMobile(640);

  const delay = index * 0.15;
  const duration = 0.4;

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, duration)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-auto"
    >
      <Tilt
        tiltEnable={!isMobile}
        glareEnable={false}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-full flex flex-col"
      >
        <div className="relative w-full h-[230px] flex-none">
          <img
            src={image}
            alt={`${name} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Conditional buttons */}
          {(live_link || source_code_link) && (
            <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover pointer-events-auto">
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient w-24 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  Live Link
                </div>
              )}

              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const headingDelay = 0.02;
  const headingDuration = 0.3;
  const paraDelay = 0.05;
  const paraDuration = 0.35;

  return (
    <>
      {/* Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeIn("", "spring", headingDelay, headingDuration)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.sectionSubText}`}
        >
          My work
        </motion.p>

        <motion.h2
          variants={fadeIn("", "spring", headingDelay + 0.03, headingDuration)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.sectionHeadText}`}
        >
          Projects.
        </motion.h2>
      </motion.div>

      {/* Intro paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", paraDelay, paraDuration)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* See More / See Less Button */}
      {projects.length > 3 && (
        <div className="w-full flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-tertiary py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {showAll ? "See Less" : "See More Projects"}
          </motion.button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");

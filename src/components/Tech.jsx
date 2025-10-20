import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// hook defined inline but you can move to a utils/hooks file
import { useEffect, useState } from "react";

function useIsMobile(breakpoint = 640) {
  // breakpoint in px (640 matches Tailwind "sm")
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    // set initial
    setIsMobile(mq.matches);

    // handler for updates
    const handler = (e) => setIsMobile(e.matches);

    // add listener (cross-browser)
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, [breakpoint]);

  return isMobile;
}

const Tech = () => {
  const isMobile = useIsMobile(640); // mobile when width <= 640px
  const shownTechnologies = isMobile ? technologies.slice(0, 4) : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {shownTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

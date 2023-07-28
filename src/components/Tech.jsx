import React from "react";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What's in my backpack so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='flex flex-col items-center justify-center w-28 h-28 dvGrab' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}

            {/* <CircularProgressbar
              value={technology.percentage}
              text={`${technology.percentage}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${technology.percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: '#d6d6d6',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Rotate the trail
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                  // Text color
                  fill: '#f88',
                  // Text size
                  fontSize: '16px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: '#3e98c7',
                },
              }}
            /> */}

            <CircularProgressbarWithChildren value={technology.percentage} 
              styles={{
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: 'red',
              }}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <img style={{ width: 40 }} src={technology.icon} alt={technology.name} />
              <div  style={{ fontSize: 12}}>
                <strong>{technology.percentage}%</strong>
              </div>
            </CircularProgressbarWithChildren>

            <div className="mt-2">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
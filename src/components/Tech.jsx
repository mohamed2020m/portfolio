import React from "react";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const SkillCard = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-tertiary/30 to-tertiary/10 backdrop-blur-sm 
               rounded-xl p-4 hover:shadow-xl transition-all duration-300 
               border border-tertiary/20 group hover:border-[#915eff]/50"
  >
    <p className="text-white/90 text-center font-medium group-hover:text-[#915eff] 
                  transition-colors duration-300">
      {skill}
    </p>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#915eff] to-blue-500 
                     inline-block text-transparent bg-clip-text">
        {title}
      </h3>
      <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-[#915eff]/50 to-transparent" />
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </div>
  </div>
);


const Tech = () => {
  return (
    // <>
    //   <motion.div variants={textVariant()}>
    //     <p className={`${styles.sectionSubText} text-center`}>
    //       What's in my backpack so far
    //     </p>
    //     <h2 className={`${styles.sectionHeadText} text-center`}>
    //       Skills
    //     </h2>
    //   </motion.div>
    //   <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
    //     {technologies.map((technology) => (
    //       <div className='flex flex-col items-center justify-center w-28 h-28 dvGrab' key={technology.name}>

    //         <CircularProgressbarWithChildren value={technology.percentage} 
    //           styles={{
    //             textColor: '#f88',
    //             trailColor: '#d6d6d6',
    //             backgroundColor: 'red',
    //           }}
    //         >
    //           {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
    //           <img style={{ width: 40 }} src={technology.icon} alt={technology.name} />
    //           <div  style={{ fontSize: 12}}>
    //             <strong>{technology.percentage}%</strong>
    //           </div>
    //         </CircularProgressbarWithChildren>

    //         <div className="mt-2">
    //           {technology.name}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </>

    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-96 h-96 
                      bg-[#915eff] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Technical Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="mt-8 relative">
        {Object.entries(technologies).map(([category, skills]) => (
          <SkillCategory
            key={category}
            title={category}
            skills={skills}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
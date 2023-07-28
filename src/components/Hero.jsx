import { motion } from "framer-motion";
import React from 'react';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextTransition, { presets } from 'react-text-transition';
import {textTransition} from "../constants";

const Hero = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0dd7df]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-teal-300 via-blue-500 to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* Hi, Call me <span className='text-[#0dd7df]'>Leeuw</span> */}
            <TextTransition springConfig={presets.wobbly}>
              {textTransition[index % textTransition.length].greeting}
              <div className='text-[#0dd7df]'>
                {textTransition[index % textTransition.length].nickname}
              </div>
            </TextTransition>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            Welcome to my portfolio
          <br className='sm:block hidden' />with ReactJS
          </p> */}
        </div>
      </div>

      {/* <ComputersCanvas className='dvGrab' /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
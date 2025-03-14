// import { motion } from "framer-motion";
// import React from 'react';
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import TextTransition, { presets } from 'react-text-transition';
// import {textTransition} from "../constants";

// const Hero = () => {

//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => index + 1),
//       3000, // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);


//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#0dd7df]' />
//           <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-teal-300 via-blue-500 to-transparent' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             {/* Hi, Call me <span className='text-[#0dd7df]'>Leeuw</span> */}
//             <TextTransition springConfig={presets.wobbly}>
//               {textTransition[index % textTransition.length].greeting}
//               <div className='text-[#0dd7df]'>
//                 {textTransition[index % textTransition.length].nickname}
//               </div>
//             </TextTransition>
//           </h1>
//           {/* <p className={`${styles.heroSubText} mt-3 text-white-100`}>
//             Welcome to my portfolio
//           <br className='sm:block hidden' />with ReactJS
//           </p> */}
//         </div>
//       </div>

//       {/* <ComputersCanvas className='dvGrab' /> */}

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import React from 'react';
// import { styles } from "../styles";
// import TextTransition, { presets } from 'react-text-transition';
// import { textTransition } from "../constants";

// const Hero = () => {
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => index + 1),
//       3000, // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);

//   return (
//     <section className="relative w-full h-screen mx-auto overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         {/* Gradient Orbs */}
//         <div className="absolute top-[20%] right-[20%] w-[35rem] h-[35rem] 
//                       bg-[#0dd7df] rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
//         <div className="absolute bottom-[20%] left-[20%] w-[25rem] h-[25rem] 
//                       bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />
//       </div>

//       {/* Main Content */}
//       <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
//         {/* Animated Line */}
//         <motion.div 
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           transition={{ duration: 1 }}
//           className='flex flex-col justify-center items-center mt-5'
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className='w-5 h-5 rounded-full bg-[#0dd7df]'
//           />
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#0dd7df] via-teal-300 to-transparent'
//           />
//         </motion.div>

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             <TextTransition 
//               springConfig={presets.wobbly}
//               className="flex flex-col gap-2"
//             >
//               <div>
//                 {textTransition[index % textTransition.length].greeting}
//               </div>
//               <div className='text-[#0dd7df] font-bold'>
//                 {textTransition[index % textTransition.length].nickname}
//               </div>
//             </TextTransition>
//           </h1>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
//       >
//         <a href='#about' className="hover:transform hover:translate-y-2 transition-transform duration-300">
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2
//                          hover:border-[#0dd7df] transition-colors duration-300'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1 group-hover:bg-[#0dd7df]'
//             />
//           </div>
//         </a>
//       </motion.div>

//       {/* Decorative Elements */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #0dd7df 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           opacity: 0.1
//         }}
//       />
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import React from 'react';
import { styles } from "../styles";
import TextTransition, { presets } from 'react-text-transition';
import { textTransition } from "../constants";

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
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-[20%] right-[20%] w-[35rem] h-[35rem] 
                      bg-[#0dd7df] rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
        <div className="absolute bottom-[20%] left-[20%] w-[25rem] h-[25rem] 
                      bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            <TextTransition
              springConfig={presets.wobbly}
              className="flex flex-col gap-2"
            >
              <div>
                {textTransition[index % textTransition.length].greeting}
              </div>
              <div className='text-[#0dd7df] font-bold'>
                {textTransition[index % textTransition.length].nickname}
              </div>
            </TextTransition>
          </h1>
        </motion.div>

        {/* Download CV Button */}
        <motion.a
          href="/cv_en.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{zIndex: 1000}}
          className="mt-5 px-6 py-3 text-lg font-semibold text-white bg-[#0dd7df] rounded-full shadow-lg hover:bg-teal-400 transition-all duration-300 flex items-center gap-2 "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3m-6 5h6" />
          </svg>
          Download CV
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0dd7df 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}
      />
    </section>
  );
};

export default Hero;

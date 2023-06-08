import {motion} from 'framer-motion';

import {styles} from "../styles";
// import { ComputersCanvas } from './canvas';
import {avatar} from "../assets";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-5xl mx-auto flex flex-row items-start`}>

       <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#84ffc9]"/>     
          <div className='w-1 sm:h-80 h-40 violet-gradient '/>
       </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Mehul</span></h1>
        <p className={`${styles.heroSubText}mt-2 text-white-100`}>
         I Develop Frontend Apps<br className='sm:block hidden'/> and web Applications 
        </p>
      </div>
     </div>
     {/* <ComputersCanvas/> */}
    < div  className="flex flex-col" >
        <img src={avatar} 
        className='w-[40%] h-[40%] rounded-full  ml-[55%] mt-[20%] '/>
        </div>

     <div className='absolute xs:bottom-10 bottom-22 w-full flex justify-center items-center'>
       <a href="#about">
         <div className='w-[35px]  h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
           <motion.div
           animate={{
             y:[0,24,0]
           }}
           transition={{
             duration:1.5,
             repeat: Infinity,
             repeatType:'loop',
           }}
           className="w-3 h-3 rounded-full bg-secondary mb-1"/>
         </div>
       </a>
     </div>
    </section>
  )
}

export default Hero
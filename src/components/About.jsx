import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import {SectionWrapper} from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
const ServiceCard =({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring", 0.5 * index , 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
      options={{
        max:45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
       <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
       <h3 className='text-white text-center text-[20px] font-bold'>{title}</h3>
 
      </div>
      </motion.div>
    </Tilt>
  )
    
  
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello, I'm a passionate and versatile developer and data scientist with a strong foundation in JavaScript and Python and its associated technologies. I thrive in the dynamic world of web development and data science, where I combine my love for coding with a relentless curiosity to solve complex problems. Let's work together to bring your ideas to life!
    </motion.p>
     <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service ,index) =>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

     </div>

    </>
  )
}



export default SectionWrapper(About,"about")
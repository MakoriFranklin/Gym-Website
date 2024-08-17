import React from 'react'
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from '../shared/Types';
import {motion} from "framer-motion"
import HeadText from '../shared/HeadText';
import Benefit from '../benefit/Benefit';
import ActionButton from '../navbar/ActionButton';
import BenefitsPage from "../../assets/images/BenefitsPageGraphic.png"
const gymFeatures: Array<BenefitType> = [
    {
      id: 1,
      icon: <HomeModernIcon className='h-6 w-6'/>, 
      title: "Strength Training",
      description: "Build muscle and improve endurance with our cutting-edge strength training equipment and personalized workout plans."
    },
    {
      id: 2,
      icon: <UserGroupIcon className='h-6 w-6'/>, 
      title: "Yoga & Mindfulness",
      description: "Find balance and tranquility in our calming yoga classes, designed to enhance flexibility and reduce stress."
    },
    {
      id: 3,
      icon: <UserGroupIcon className='h-6 w-6'/>,  
      title: "Nutrition Coaching",
      description: "Achieve your fitness goals with our expert nutrition coaching, offering personalized meal plans and dietary advice."
    }
  ];

  const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren: 0.2}
    }
}
  

type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <div className='md: my-5 md:w-3/5 '>
                <HeadText>MORE THAN JUST A GYM</HeadText>
                <p className='my-5 text-sm'>Evolve is your ultimate destination for holistic health and wellness. We go beyond traditional fitness by offering a community-focused environment where members can not only achieve their physical goals but also enhance their mental and emotional well-being. Our state-of-the-art facilities, expert trainers, and diverse class offerings cater to all fitness levels, ensuring that everyone has the support they need to thrive.</p>
            </div>

            <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                initial="hidden"
                whileInView="visible"
                variants={container}
            >
                {gymFeatures.map((feature: BenefitType)=>(
                    <Benefit
                        id={feature.id}
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            
            {/* Desc */}
            <div className='mt-20  items-center justify-between gap-20 md:mt-25 md:flex'>
              <img src={BenefitsPage} alt="" className='mx-auto'/>
              <div>
                <div className='relative'>
                  <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                    <div>
                      <HeadText>Thousands Of Happy Members Grateful to us</HeadText>
                    </div>
                  </div>
                </div>
                <div>
                  <p className='my-5'>We believe in empowering you to reach your fitness goals through a personalized approach to health and wellness. Whether you're a beginner looking to start your fitness journey or an experienced athlete aiming to push your limits, our state-of-the-art facilities and expert trainers are here to guide and motivate you every step of the way.</p>
                </div>
                <div className='relative mt-16'>
                  <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                  </div>
              </div>
              </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits
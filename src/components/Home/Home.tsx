import React from 'react'
import { SelectedPage } from '../navbar/shared/Types'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from "@/assets/images/HomePageText.png"
import HomePageGraphic from "@/assets/images/HomePageGraphic.png"
import SponserRedBull from "@/assets/images/SponsorRedBull.png"
import SponsorForbes from "@/assets/images/SponsorForbes.png"
import SponsorFortune from "@/assets/images/SponsorFortune.png"
import ActionButton from '../navbar/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 pb-10 pt-10 md:h-full md:pb-0'>
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div className='md:-mt-20'
          initial="hidden"
          whileInView="visible"
          transition={{duration: 0.5}}
          variants={
            {
              hidden: {
                opacity: 0,
                x:-50
              },
              visible: {
                opacity: 1, 
                x:0
              }
            }
          }
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p className='mt-8 text-sm'>Join Twiga today and start your journey towards a healthier, stronger, and more confident you. Whether you're a beginner or a seasoned athlete, we have the facilities, equipment, and trainers to help you achieve your fitness goals.</p>
          </motion.div>
          {/* Actions */}
          <motion.div className='mt-8 flex items-center gap-8 md:justify-start'
            initial="hidden"
            whileInView="visible"
            transition={{duration: 0.5, delay:0.2}}
            variants={
              {
                hidden: {
                  opacity: 0,
                  x:-50
                },
                visible: {
                  opacity: 1, 
                  x:0
                }
              }
            }
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Us Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 ' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`${SelectedPage.ContactUs}`}><p>Learn More</p></AnchorLink>
          </motion.div>
        </div>
        {/* image */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'>
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {/* Sponsers */}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponserRedBull} alt="" />
              <img src={SponsorForbes} alt="" />
              <img src={SponsorFortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
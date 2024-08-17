import React from 'react'
import { SelectedPage } from '../shared/Types';
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import image6 from "@/assets/images/image6.png";
import {motion} from "framer-motion";
import HeadText from '../shared/HeadText';
type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section  id='ourclasses' className='w-full bg-primary-100 py-40 block'>
        <motion.div
            onViewportEnter = {()=>setSelectedPage(SelectedPage.OurClasses)}
        >
            <div className='mx-auto w-5/6 '>
                <div className='md:w-3/5'>
                    <HeadText>CLASSES WE OFFER</HeadText>
                    <p className='py-5 '>We offer a diverse range of fitness classes designed to cater to all levels and preferences. Whether you're looking to burn calories, build strength, or improve flexibility, our classes are led by experienced instructors who will motivate and guide you toward your fitness goals.</p>
                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default OurClasses
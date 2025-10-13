import About from '@/components/About'
import Areas from '@/components/Areas'
import Awards from '@/components/Awards'
import ContactUs from '@/components/ContactUs'
import Help from '@/components/Help'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const homePage = () => {
  return (
   <>
   <Hero/>
   <About/>
   <Services/>
   <Steps/>
   <WhyChooseUs/>
   <Awards/>
   <Areas/>
   <Testimonials/>
   <Help/>
   <ContactUs/>
   
   </>
  )
}

export default homePage
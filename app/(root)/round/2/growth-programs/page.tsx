import CallToAction from '@/components/round2/growth-programs/CallToActionSection'
import CaseStudies from '@/components/round2/growth-programs/CaseStudiesGrid'
import CorePhilosophy from '@/components/round2/growth-programs/CorePhilosophySection'
import Header from '@/components/round2/growth-programs/Header'
import Hero from '@/components/round2/growth-programs/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <CorePhilosophy/>
    <CaseStudies/>
    <CallToAction/>
    </div>
  )
}

export default page
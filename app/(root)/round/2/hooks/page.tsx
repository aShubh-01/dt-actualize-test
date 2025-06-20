import ChallengeSection from '@/components/round2/hooks/Challenge'
import CTASection from '@/components/round2/hooks/CTASection'
import DashboardSection from '@/components/round2/hooks/Dashboard'
import Header from '@/components/round2/hooks/Header'
import HeroSection from '@/components/round2/hooks/Hero'
import ImpactSection from '@/components/round2/hooks/ImpactSection'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex flex-col'>

    <Header/>
    <HeroSection/>
    <DashboardSection/>
    <ChallengeSection/>
    <ImpactSection/>
    <CTASection/>
    </div>
    </>
  )
}

export default page
// import FooterSection from '@/components/Frameworks/Footer'
// import FrameworksSection from '@/components/Frameworks/Frameworks'
// import Header from '@/components/Frameworks/Header'
// import HeroSection from '@/components/Frameworks/Hero'
import FrameworksSection from '@/components/round2/frameworks/Frameworks'
import Header from '@/components/round2/frameworks/Header'
import HeroSection from '@/components/round2/frameworks/Hero'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex flex-col w-full'>
    <Header/>
    <HeroSection/>
    <FrameworksSection/>
    </div>
    {/* <Header/>
    <HeroSection/>
    <FrameworksSection/>
    <FooterSection/> */}
    </>
  )
}

export default page
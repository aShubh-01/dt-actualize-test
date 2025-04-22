
import Footer from '@/components/Footer'
import Eligible from '@/components/root/Eligible'
import Experience from '@/components/root/Experience'
import Explore from '@/components/root/Explore'
import HeroSection from '@/components/root/HeroSection'
import JD from '@/components/root/JD'
import Rounds from '@/components/root/Rounds'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col gap-16 items-center'>
        <HeroSection />
        <Explore />
        <Eligible />
        <JD />
        <Rounds />
        <Experience />
    </main>
  )
}

export default Home
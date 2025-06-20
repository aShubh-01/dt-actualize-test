import CompassSection from '@/components/round2/thinking-trail/CompassSection'
import Header from '@/components/round2/thinking-trail/Header'
import Hero from '@/components/round2/thinking-trail/HeroSection'
import WatchSection from '@/components/round2/thinking-trail/WhatToWatch'
import NoticedSection from '@/components/round2/thinking-trail/WhatWeNoticed'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <Header />
            <Hero />
            <NoticedSection/>
            <WatchSection/>
            <CompassSection/>
        </div>
    )
}

export default page
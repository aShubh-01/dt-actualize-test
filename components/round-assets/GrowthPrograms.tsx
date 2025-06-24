'use client'

import CallToAction from '@/components/round2/growth-programs/CallToActionSection'
import CaseStudies from '@/components/round2/growth-programs/CaseStudiesGrid'
import CorePhilosophy from '@/components/round2/growth-programs/CorePhilosophySection'
import Hero from '@/components/round2/growth-programs/HeroSection'
import axios from 'axios'
import { useToast } from '../Toast'
import React, { useEffect, useState } from 'react'

const GrowthPrograms = ({ round }: { round: number }) => {
    const [caseStudies, setCaseStudies] = useState([]);
    const { showToast } = useToast();

    useEffect(() => {
        async function getCaseStudies(round: number) {
            const response = await axios({
                url: `/api/v1/round/asset/growth-programs?round=${round}`,
                method: 'GET',
                headers: {
                    'Content-Type': "application/json"
                }
            });

            if (response.status != 200) {
                showToast('error', 'Unable to fetch Case Studies', 3000);
            } else {
                console.log(response.data.caseStudies)
                setCaseStudies(response.data.caseStudies);
            }
        }

        getCaseStudies(round);
    }, [])

    return (
        <div>
            <Hero />
            <CorePhilosophy />
            <CaseStudies caseStudies={caseStudies}/>
            <CallToAction />
        </div>
    )
}

export default GrowthPrograms;
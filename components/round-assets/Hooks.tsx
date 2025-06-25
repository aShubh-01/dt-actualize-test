'use client';

import CTASection from "@/components/round1/Welcome-Page/CTASection";
import ChallengeSection from "@/components/round2/hooks/Challenge";
import DashboardSection from "@/components/round2/hooks/Dashboard";
import HeroSection from "@/components/round2/hooks/Hero";
import ImpactSection from "@/components/round2/hooks/ImpactSection";


interface HooksProps {
  round: number;
}

const HOOKS: React.FC<HooksProps> = ({ round }) => {
  return (
    <div className='flex flex-col'>
      <HeroSection round={round}/>
      <DashboardSection />
      <ChallengeSection />
      <ImpactSection />
      <CTASection />
    </div>
  );
};

export default HOOKS;

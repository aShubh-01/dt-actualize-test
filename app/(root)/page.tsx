// import AIThinkingPartner from "@/components/Hero/AIThinkingPartner";
// import CTASection from "@/components/Hero/CTASection";
// import Header from "@/components/Hero/Header";
// import HeroPanel from "@/components/Hero/HeroPanel";
// import HowToApproach from "@/components/Hero/HowToApproach";
// import KeySections from "@/components/Hero/KeySection";
// import ThinkWithAI from "@/components/Hero/ThinkingWithAi";
import Footer from "@/components/Footer";
import AIThinkingPartner from "@/components/round1/Welcome-Page/AIThinkingPartner";
import CTASection from "@/components/round1/Welcome-Page/CTASection";
import Header from "@/components/round1/Welcome-Page/Header";
import HeroPanel from "@/components/round1/Welcome-Page/HeroPanel";
import HowToApproach from "@/components/round1/Welcome-Page/HowToApproach";
import KeySections from "@/components/round1/Welcome-Page/KeySection";
import ThinkWithAI from "@/components/round1/Welcome-Page/ThinkingWithAi";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
        <Header/>
        <HeroPanel/>
        <KeySections/>
        <ThinkWithAI/>
        <AIThinkingPartner/>
        <HowToApproach/>
        <CTASection/>
        <Footer />
        </>
    )
}

export default Home;
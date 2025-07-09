'use client';

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
//import Header from "@/components/round1/Welcome-Page/Header";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import HeroPanel from "@/components/round1/Welcome-Page/HeroPanel";
import HowToApproach from "@/components/round1/Welcome-Page/HowToApproach";
import KeySections from "@/components/round1/Welcome-Page/KeySection";
import ThinkWithAI from "@/components/round1/Welcome-Page/ThinkingWithAi";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
        <Header 
            children={
            <div className="md:flex items-center space-x-4">
                <button
                    onClick={() => window.location.href = '/login'}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-2 rounded-full text-md transition duration-300 hover:cursor-pointer"
                >
                Login
                </button>
            </div>
            } 
        />
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
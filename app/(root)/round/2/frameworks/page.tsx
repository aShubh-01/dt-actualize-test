import FrameworksSection from '@/components/round2/frameworks/Frameworks';
import Header from '@/components/round2/frameworks/Header';
import HeroSection from '@/components/round2/frameworks/Hero';
import { notFound } from 'next/navigation';
import React from 'react';

interface FrameworkItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  bgColor?: string;
  gridClass?: string;
  round:number;
}

// ✅ Server-side data fetching (App Router)
const getFrameworks = async (round: string): Promise<FrameworkItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/round/asset/frameworks?round=${round}`, {
      next: { revalidate: 60 }, // optional caching
    });

    if (!res.ok) throw new Error('API error');
    const data = await res.json();

    return data.frameworks;
  } catch (error) {
    console.error('Error fetching frameworks:', error);
    return [];
  }
};

const Page = async ({ params }: { params: { round: string } }) => {
  const frameworks = await getFrameworks(params.round);

  if (!frameworks || frameworks.length === 0) {
    notFound(); // or return a fallback component
  }

  return (
    <div className="flex flex-col w-full">
      <Header />
      <HeroSection />
      <FrameworksSection frameworks={frameworks} />
    </div>
  );
};

export default Page;

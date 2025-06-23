'use client'

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Testimonials } from '@/components/round2/social-proof/Testimonials';
import SocialProof from '@/components/round-assets/SocialProof';

export default function Page() {
  return (
    <SocialProof round={2} />
  );
}

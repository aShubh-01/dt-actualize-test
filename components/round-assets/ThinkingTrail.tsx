'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/components/round2/thinking-trail/HeroSection';
import NoticedSection from '@/components/round2/thinking-trail/WhatWeNoticed';
import WatchSection from '@/components/round2/thinking-trail/WhatToWatch';
import CompassSection from '@/components/round2/thinking-trail/CompassSection';
import axios from 'axios';
import { useToast } from '@/components/Toast';

interface ThinkingTrailProps {
  round: number;
}

export default function ThinkingTrail({ round }: ThinkingTrailProps) {
  const { showToast } = useToast();
  const [observations, setObservations] = useState([]);
  const [watchPoints, setWatchPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoundData(round: number) {
      try {
        const response = await axios.get(`/api/v1/round/asset/thinking-trail`, {
          params: { round }
        });

        if (response.status === 200) {
          setObservations(response.data.observations || []);
          setWatchPoints(response.data.watchPoints || []);
        } else {
          showToast?.('error', 'Failed to load round data', 3000);
        }
      } catch (err) {
        console.error('Error fetching round data:', err);
        showToast?.('error', 'An error occurred while fetching round data', 3000);
      } finally {
        setLoading(false);
      }
    }

    fetchRoundData(round);
  }, [round]);

  if (loading) {
    return <div className="text-center py-20 text-gray-600">Loading round data...</div>;
  }

  return (
    <div className="w-full">
      <Hero />
      <NoticedSection observations={observations} />
      <WatchSection watchPoints={watchPoints} />
      <CompassSection />
    </div>
  );
}

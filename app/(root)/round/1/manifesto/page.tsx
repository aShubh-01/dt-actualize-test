"use client"
import GrowthManifesto from '@/components/manifesto/GrowthManifesto';
import { useToast } from '@/components/Toast';
import { updateUserStatus } from '@/lib/apiUtil';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ManifestoPage() {
  const {data: session, status} = useSession();
  const { showToast } = useToast();
  const router = useRouter();

  if(status != 'authenticated') router.push('/login');

  const handleManifestoSubmit = async (text: string) => {
    showToast('loading', 'Submitting Manifesto', 3000);

    if(text == '') {
      showToast('error', 'Manifesto Empty', 3000);
    }

    const submitManifestoResponse = await axios({
      url: '/api/v1/round/1/manifesto',
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      data: {
        userId: session?.user.uid,
        manifestoData: text
      }
    })

    if(submitManifestoResponse.status == 200) {
      showToast('success', "Manifesto Submitted", 3000);
      updateUserStatus(session?.user.uid as string, 'ROUND_2')
      router.push('/round/2')
    } else {
      showToast('error', 'Unable to submit manifesto', 3000);
    }
  };

  return (
    <GrowthManifesto onSubmit={handleManifestoSubmit} />
  );
}
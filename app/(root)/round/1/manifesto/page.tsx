"use client"
import GrowthManifesto from '@/components/manifesto/GrowthManifesto';

export default function ManifestoPage() {
  const handleManifestoSubmit = (text: string) => {
    // Handle the submitted manifesto
    console.log('User manifesto:', text);
  };

  return (
    <GrowthManifesto onSubmit={handleManifestoSubmit} />
  );
}
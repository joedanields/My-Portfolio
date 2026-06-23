"use client";

import Image from "next/image";
import { hyperspeedPresets } from '@/components/HyperSpeedPresets';
import Hyperspeed from '@/components/Hyperspeed';

// Using "Neon Waves" preset

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative">
      <Hyperspeed effectOptions={hyperspeedPresets.six} />
    </main>
  );
}

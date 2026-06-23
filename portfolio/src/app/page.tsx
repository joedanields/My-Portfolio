"use client";

import Image from "next/image";
import TextPressure from '@/components/TextPressure';
import { hyperspeedPresets } from '@/components/HyperSpeedPresets';
import Hyperspeed from '@/components/Hyperspeed';
import ShinyText from '@/components/ShinyText';
// Using "Neon Waves" preset

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative flex flex-col items-center justify-center">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hyperspeed effectOptions={hyperspeedPresets.six} />
      </div>
      
      {/* Foreground Container */}
      <div className="absolute bottom-[65%] left-[7%] md:left-[12%] z-10 flex flex-col items-start gap-4 pointer-events-none">
        
        {/* Row 1: Greeting */}
        <div className="w-[300px] h-[60px] opacity-80">
          <TextPressure
            text="HELLO THIS IS"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={18}
          />
        </div>
        <ShinyText
          text="JOE_DANIEL_A"
          className="text-5xl md:text-7xl font-black uppercase font-['Roboto_Flex'] tracking-tight mt-1"
          speed={3.4}
          delay={0}
          color="#f7f7f7"
          shineColor="#bea864"
          spread={95}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        

        

      </div>
    </main>
  );
}

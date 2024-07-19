'use server'
import React from 'react'
import ResponsiveCarousel from '@/components/Events'
import WhatWeDo from '@/components/WhatWeDo'
import Hero from '@/components/Hero'
import DotPattern from '@/components/ui/dot-pattern'
import AboutUs from '@/components/Aboutus'
import { cn } from '@/lib/utils'
import { TeamComponent } from '@/components/Team'

//import { HomeTeam } from '@/components/home-team'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="min-w-fit flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      <DotPattern
        className={cn(
          'bg-inherit [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] dark:bg-black'
        )}
      />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <ResponsiveCarousel />
      <TeamComponent/>
    </div>
  )
}

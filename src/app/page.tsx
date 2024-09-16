"use client";
import { LampComponent } from '@/components/landing/lamp'
import Navbar from '@/components/landing/navbar'

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className=" w-[100vw]">
        <LampComponent />
      </section>
    </main>
  )
}
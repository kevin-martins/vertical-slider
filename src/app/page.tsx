// 'use client'
import { useEffect, useState } from "react";
import SliderButton from "@/components/SliderButton";
import Slider from "@/components/Slider";
import pages from "@/components/Pages";

const Home = () => {
  return (
    <main className="w-full bg-blue-200">
      <Slider pages={pages} />
    </main>
  )
}

export default Home

// 'use client'
import { useEffect, useState } from "react";
import SliderButton from "@/components/SliderButton";
import Slider from "@/components/Slider";
import pages from "@/components/Pages";

const Home = () => {
  return (
    <main className="w-full bg-blue-200">
      <Slider
        firstPage={<></>}
        data={pages}
        scrollDelay={600}
        bubbles={
          {
            color: {
              default: 'white',
              current: 'blue',
              hover: 'black'
            },
            text: {
              value: 'Page %i',// use %i to add dynamic index
              color: 'blue'
            },
            size: {
              default: '15px',
              current: '.8',
              hover: '.9'
            }
          }
        }
      />
    </main>
  )
}

export default Home

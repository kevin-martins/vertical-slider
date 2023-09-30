'use client'
import React, { useEffect, useState, useRef } from 'react'
import SliderButton from './SliderButton'
import { BubblesProps } from '@/models/bubbles'

type SliderProps = {
  firstPage?: JSX.Element
  data: JSX.Element[]
  scrollDelay: number
  bubbles?: BubblesProps
}

const Slider = ({ data, scrollDelay, bubbles }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isScrollable, setIsScrollable] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<></>)

  const handleIndex = (i: number) => {
    setCurrentIndex(i)
  }
  
  useEffect(() => {
    setCurrentPage(data[currentIndex])
  }, [currentIndex, data])

  useEffect(() => {
    const handleWheel = (event: any) => {
      const scrollDelta = event.wheelDelta;
      const intensity = Math.abs(scrollDelta / 100); // Adjust the divisor for sensitivity

      if (intensity > 0.5 && isScrollable) {
        setIsScrollable(false);
        if (scrollDelta > 0) {
          // User is scrolling down
          if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
          }
        } else {
          // User is scrolling up
          if (currentIndex < data.length - 1) {
            setCurrentIndex(prev => prev + 1)
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isScrollable, data]);

  useEffect(() => {
    setTimeout(() => {
      setIsScrollable(true);
    }, scrollDelay);
  }, [isScrollable, scrollDelay]);

  return (
    <div className='w-full h-screen'>
      {currentPage}
      {bubbles && <div className="flex flex-col gap-[5px] fixed right-2 top-1/2 -translate-y-1/2">
        {data.map((_, index: number) =>
          <div
            key={index}
            className="flex ml-auto"
            onClick={() => handleIndex(index)}
          >
            <SliderButton
              {
                ...{
                  currentIndex,
                  index,
                  ...bubbles,
                }
              }
            />
          </div>
        )}
      </div>}
    </div>
  )
}

export default Slider

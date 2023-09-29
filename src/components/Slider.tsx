'use client'
import React, { useEffect, useState, useRef } from 'react'
import SliderButton from './SliderButton'

type Props = {
  pages: JSX.Element[]
  hasIndex?: boolean
}

const Slider = ({ pages, hasIndex = true }: Props) => {
  const [index, setIndex] = useState<number>(0)
  const [isScrollable, setIsScrollable] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<JSX.Element>()

  const handleIndex = (i: number) => {
    setIndex(i)
  }
  
  useEffect(() => {
    setCurrentPage(pages[index])
  }, [index])

  useEffect(() => {
    const handleWheel = (event: any) => {
      const scrollDelta = event.wheelDelta;
      const intensity = Math.abs(scrollDelta / 100); // Adjust the divisor for sensitivity

      if (intensity > 0.5 && isScrollable) {
        setIsScrollable(false);
        if (scrollDelta > 0) {
          // User is scrolling down
          console.log('down', index)
          if (index >= 0) {
            setIndex(prev => Math.max(0, prev - 1))
          }
        } else {
          // User is scrolling up
          console.log('up', index)
          if (index < pages.length) {
            setIndex(prev => Math.min(pages.length - 1, prev + 1)) // 0 à 4 inclus
          }
        }
      }

      setTimeout(() => {
        setIsScrollable(true);
      }, 2000);
    };

    window.addEventListener('wheel', handleWheel);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsScrollable(true);
    }, 2000);
  }, [isScrollable]);

  return (
    <div className='w-full h-screen'>
      {index}
      {isScrollable}
      {currentPage}
      {<div className="flex flex-col gap-[5px] fixed right-2 top-1/2 -translate-y-1/2">
        {pages.map((_, i: number) =>
          <div
            key={i}
            className="flex ml-auto"
            onClick={() => handleIndex(i)}
          >
            <SliderButton index={i} />
          </div>
        )}
      </div>}
    </div>
  )
}

export default Slider

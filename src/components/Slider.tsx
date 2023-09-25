'use client'
import React, { useEffect, useState } from 'react'
import SliderButton from './SliderButton'

type Props = {
  pages: JSX.Element[]
  hasIndex?: boolean
}

const Slider = ({ pages, hasIndex = true }: Props) => {
  const [index, setIndex] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<JSX.Element>()

  const handleIndex = (i: number) => {
    setIndex(i)
  }
  
  useEffect(() => {
    setCurrentPage(pages[index])
  }, [index])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight / 2) {
  //       scroll.scrollTo(window.innerHeight);
  //     }
  // };
    
  return (
    <div className='w-full h-screen'>
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

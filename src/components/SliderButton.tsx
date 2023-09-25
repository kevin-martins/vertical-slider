'use client'
import { useState } from "react"

type Props = {
  index: number
}

const SliderButton = ({ index }: Props) => {
  const [hover, setHover] = useState<boolean>(false)

  const handleEnter = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  return (
    <>
      <span
        className={`opacity-80 text-2xl text-white mr-2 ${!hover ? 'hidden' : ''}`}
      >
        Page {index + 1}
      </span>
      <button
        className={`rounded-full bg-white/70 mr-auto my-auto w-3 h-3 border-[.5px] ${hover ? 'border-white' : 'border-black/10'}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    </>
  )
}

export default SliderButton

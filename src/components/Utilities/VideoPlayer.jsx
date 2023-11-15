"use client"
import { XCircle } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import YouTube from 'react-youtube'

export const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "300",
    height: "250"
  }

  const Player = () => {
    return (
      <div className=' fixed bottom-0 right-0'>
        <button
          onClick={handleVideoPlayer} className='
    text-color-primary float-right bg-color-secondary px-3 mb-1'>
          X
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
          opts={option} onError={() => { alert("video is broken, please try another") }} />
      </div>
    )
  }

  const ButtonOpenTrailler = () => {
    return (
      <button onClick={handleVideoPlayer} className=' fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl'>
        Tonton Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenTrailler />
}

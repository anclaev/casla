import { useState } from "react"

import StyledBackground from "./styles"

import Video from "../../components/Video"

const VideoMaxIndex = 5

const randomNumber = (min: number = 1, max: number = VideoMaxIndex): number =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1))

const Background: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videoIndex, setVideoIndex] = useState<number>(randomNumber())
  // const [videoHistory, setVideoHistory] = useState<number[]>([videoIndex])

  // Смена видео послео кончания

  // const onVideoEnded = (e: any) => {
  //   generateVideoIndex()
  //   e.target.load()
  // }

  // const generateVideoIndex = (
  //   maxIndex: number = VideoMaxIndex,
  //   minIndex: number = 1
  // ): void => {
  // let isSuccessGenerate = false
  // let history = videoHistory.length < maxIndex ? videoHistory : []
  //let newIndex = randomNumber(minIndex, maxIndex)

  // while (!isSuccessGenerate) {
  //   newIndex = randomNumber(minIndex, maxIndex)

  //   if (history.indexOf(newIndex) === -1) {
  //     history.push(newIndex)
  //     isSuccessGenerate = true
  //   }
  // }

  //   setVideoIndex(newIndex)
  //   // setVideoHistory(history)
  // }

  return (
    <StyledBackground>
      <Video index={videoIndex} />
    </StyledBackground>
  )
}

export default Background

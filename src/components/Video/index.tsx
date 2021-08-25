interface IVideo {
  index: number
  dir?: string
  poster?: string
  autoplay?: boolean
  onEnded?: (e: any) => void
}

const defaultPoster = "/media/img/poster.png"
const defaultDir = "/media/bg/"

const Video: React.FC<IVideo> = ({
  index,
  onEnded,
  autoplay = true,
  poster = defaultPoster,
  dir = defaultDir,
}) => (
  <video autoPlay={autoplay} poster={poster} onEnded={onEnded}>
    <source
      src={`${dir}${index}/${index}.mp4`}
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
  </video>
)

export default Video

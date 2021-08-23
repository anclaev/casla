interface IVideo {
  index: number
  dir?: string
  poster?: string
  autoplay?: boolean
}

const defaultPoster = "/public/media/img/poster.png"
const defaultDir = "/public/media/bg/"

const Video: React.FC<IVideo> = ({
  index,
  autoplay = true,
  poster = defaultPoster,
  dir = defaultDir,
}) => (
  <video autoPlay={autoplay} poster={poster}>
    <source
      src={`${dir}${index}.mp4`}
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
  </video>
)

export default Video

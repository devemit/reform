import './VideoStyles.css';
import { BsArrowDownShort } from 'react-icons/bs';

const VideoComponent = () => {
  return (
    <div className='hero__container'>
      <video src='./video.mp4' autoPlay loop muted />
      <div className='arrow__wrapper'>
        <BsArrowDownShort className='arrow' size={36} />
      </div>
    </div>
  );
};

export default VideoComponent;

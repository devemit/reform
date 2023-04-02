import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Capacity.css';

interface CapacityInfo {
  imgUrl?: string;
  desc: string;
  title: string;
}

const CapacityInfo: React.FC<CapacityInfo> = ({ imgUrl, desc, title }) => {
  return (
    <div className='pro'>
      <LazyLoadImage effect='blur' src={imgUrl} alt='/' />
      <div className='num'>{desc}</div>
      <div className='desc'>{title}</div>
    </div>
  );
};

export default CapacityInfo;

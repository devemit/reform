import './Capacity.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Capacity = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='capacity_container'>
      <div className='title_wrapper'>
        <span className='title'>Reform Numbers</span>
      </div>
      <div className='content_wrapper' data-aos='fade-up'>
        <div className='content'>
          <img src='water.png' alt='/' />
          <span className='num'>500m </span>
          <span className='desc'>Beach</span>
        </div>
        <div className='content'>
          <img src='parking.png' alt='/' />
          <span className='num'>100</span>
          <span className='desc'>Parking Spots</span>
        </div>
        <div className='content'>
          <img src='sunbeds.png' alt='/' />
          <span className='num'>300 </span>
          <span className='desc'>Sunbeds </span>
        </div>
        <div className='content'>
          <img src='umbrellas.png' alt='/' />
          <span className='num'>350 </span>
          <span className='desc'>Umbrellas</span>
        </div>
      </div>
    </div>
  );
};

export default Capacity;

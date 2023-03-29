import VideoComponent from '../../components/video/VideoComponent';
import Capacity from '../../components/capacity/Capacity';
import Events from '../../components/events/Events';
import { Link } from 'react-router-dom';
import '../../styles/HomeLayout.css';

type Props = {};

const HomeLayout = (props: Props) => {
  return (
    <>
      <VideoComponent />
      <Capacity />
      <Events />
      <div className='menu_gallery'>
        <div className='card_wrapper'>
          <img
            src='https://images.unsplash.com/photo-1564271361728-60e8df0fde5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='/'
            style={{ width: '100%', objectFit: 'cover', maxHeight: '50vh' }}
          />
          <Link className='nav_btn' to='/menu'>
            Menu
          </Link>
        </div>
        <div className='card_wrapper'>
          <img
            src='https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            style={{ width: '100%', objectFit: 'cover', maxHeight: '50vh' }}
          />
          <Link className='nav_btn' to='/gallery'>
            Gallery
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

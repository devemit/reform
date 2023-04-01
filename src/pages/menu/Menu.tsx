import './Menu.css';
import { Link } from 'react-router-dom';
type Props = {};

const Menu = (props: Props) => {
  return (
    <div className='menu_container'>
      <div className='fullwrap'>
        <img src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <div className='fullcap'>
          <Link to='/menu/foods' className='menu_btn'>
            FOODS
          </Link>
        </div>
      </div>

      <div className='fullwrap'>
        <img src='https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <div className='fullcap'>
          <Link to='/menu/drinks' className='menu_btn'>
            DRINKS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

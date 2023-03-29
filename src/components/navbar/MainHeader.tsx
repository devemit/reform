import './MainHeader.css';
import { CgCloseR, CgMenuBoxed } from 'react-icons/cg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__title'>
        <span className='main'>Reform</span>
        <span className='sub'>Beach-Bar</span>
      </div>
      <div onClick={handleNav} className='toggle_buttons'>
        {nav ? <CgCloseR size={30} /> : <CgMenuBoxed size={35} />}
      </div>
      <ul onClick={() => setNav(false)} className={nav ? 'menu active' : 'menu'}>
        <Link className='link home' to='/'>
          <li>Home</li>
        </Link>
        <Link className='link' to='/'>
          <li>About</li>
        </Link>
        <Link className='link' to='/gallery'>
          <li>Gallery</li>
        </Link>
        <Link className='link' to='/menu'>
          <li>Menu</li>
        </Link>
        <Link className='link' to='/'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MainHeader;

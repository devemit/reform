import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
const ButtonBack = () => {
  return (
    <Link className='btn-back' to='/menu/drinks'>
      <BsArrowLeftShort style={{ color: 'black', marginTop: '.7rem' }} size={40} />
    </Link>
  );
};

export default ButtonBack;

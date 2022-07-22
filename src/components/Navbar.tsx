import { Link } from 'react-router-dom';
import { ReactComponent as ImgurLogo } from '../assets/svg/imgurLogo.svg';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <ImgurLogo />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

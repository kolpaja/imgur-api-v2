import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar px-5 mb-2 navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <img src='' alt='imgur' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

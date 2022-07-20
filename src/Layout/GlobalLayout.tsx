import Navbar from '../components/Navbar';

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className='global-layout container'>
      <Navbar />
      {children}
    </div>
  );
};

export default GlobalLayout;

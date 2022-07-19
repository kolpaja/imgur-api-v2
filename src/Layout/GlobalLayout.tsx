import Navbar from '../components/Navbar';

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className='global-layout'>
      <Navbar />
      <div className='container'>{children}</div>
    </div>
  );
};

export default GlobalLayout;

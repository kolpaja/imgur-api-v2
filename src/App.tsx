import { Route, Routes } from 'react-router-dom';
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import GlobalLayout from './Layout/GlobalLayout';
import About from './pages/About';
import GalleryView from './pages/GalleryView';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <GlobalLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery/:id' element={<GalleryView />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </GlobalLayout>
  );
}

export default App;

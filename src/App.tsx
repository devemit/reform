import MainHeader from './components/navbar/MainHeader';
import Gallery from './pages/gallery/Gallery';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import HomeLayout from './pages/homelayout/HomeLayout';
import Foods from './pages/foods/Foods';
import Drinks from './pages/drinks/Drinks';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/foods' element={<Foods />} />
        <Route path='/menu/drinks' element={<Drinks />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

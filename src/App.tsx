import MainHeader from './components/navbar/MainHeader';
import Gallery from './pages/gallery/Gallery';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import HomeLayout from './pages/homelayout/HomeLayout';
import Foods from './pages/foods/Foods';
import Drinks from './pages/drinks/Drinks';
import { Route, Routes } from 'react-router-dom';
import Coffees from './pages/drinks/Coffees';
import Alcohol from './pages/drinks/Alcohol';
import Coctails from './pages/drinks/Coctails';
import Juices from './pages/drinks/Juices';
import Beers from './pages/drinks/Beers';
import Wines from './pages/drinks/Wines';
import Waters from './pages/drinks/Waters';

const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        {/* foods */}
        <Route path='/menu/foods' element={<Foods />} />
        {/* foods end */}
        {/* ......... */}
        {/* drinks */}
        <Route path='/menu/drinks' element={<Drinks />} />
        <Route path='/menu/drinks/coffees' element={<Coffees />} />
        <Route path='/menu/drinks/waters' element={<Waters />} />
        <Route path='/menu/drinks/wines' element={<Wines />} />
        <Route path='/menu/drinks/beers' element={<Beers />} />
        <Route path='/menu/drinks/juices' element={<Juices />} />
        <Route path='/menu/drinks/coctails' element={<Coctails />} />
        <Route path='/menu/drinks/alcohol' element={<Alcohol />} />
        {/* drinks end */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import './App.css';
import BarazMall from './Components/BarazMall/BarazMall';
import Carousel from './Components/Carousel/Carousel';
import FlashSale from './Components/FlashSale/FlashSale';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';


function App() {
  return (
    <>
      <Navbar/>
      <LogoSearchBar/>
      <Carousel/>
      <TopBanner/>
      <FlashSale/>
      <BarazMall/>
    </>
  );
}

export default App;

/* import { BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "../src/components/header/Header";
import Banner from "../src/components/banner/Banner";
import Gallery from "./components/gallery/Gallery";
import data from '../src/Data/data.json';
import Footer from "./components/footer/Footer";
import ProductDetails from "../src/Pages/productPage/ProductPage";
import Error from "./Pages/error/Error";
import About from "./Pages/about/About";
import source from "./assets/source.png";*/

import { BrowserRouter } from 'react-router-dom'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import data from './data.json'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Banner />
        <Gallery data={data} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App

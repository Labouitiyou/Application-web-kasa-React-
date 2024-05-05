import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import About from './pages/about/About'
import Error from './pages/error/Error'
import Housingpage from './pages/housingpage/Housingpage'
import data from './data.json'
import imgBanner from './assets/Img_Banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <Banner img={imgBanner} /> <Gallery data={data} />{' '}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Housingpage data={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import MainPage from './components/MainPage/MainPage';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import FAQs from './components/pages/FAQs';
import About from './components/pages/About';



function App() {
  return (

    <div className="App">
      <Header />
      <MainPage/>
      <Footer />

      <Menu>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Features />} />
          <Route path="blogs" element={<Pricing />} />
          <Route path="contact" element={<FAQs />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </Menu>
    </div>

  );
}

export default App;

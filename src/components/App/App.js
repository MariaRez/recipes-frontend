import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../About/About';
import AllCategories from '../AllCategories/AllCategories';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import OwnerInfo from '../OwnerInfo/OwnerInfo';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      <Header />
      {location.pathname === "/" ||
       location.pathname === "/about" ||
       location.pathname === "/contacts" ||
       location.pathname === "/all-categories" ? (
          <OwnerInfo />
        ) : (
          ""
        )}
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contacts" element={<Contacts />}/>
        <Route exact path="/all-categories" element={<AllCategories />}/>
        <Route exact path="/*" element={<PageNotFound />}/>
      </Routes>
      {location.pathname === "/" ||
       location.pathname === "/about" ||
       location.pathname === "/contacts" ||
       location.pathname === "/all-categories" ? (
          <Footer />
        ) : (
          ""
        )}
    </div>
  );
}

export default App;

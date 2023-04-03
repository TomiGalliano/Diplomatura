import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes,Router, Route} from "react-router-dom"

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros'
import Servicio from './paginas/Servicio';
import Contacto from './paginas/Contactos';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/servicios' element={<Servicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Detalle from './componentes/Detalle';
import DetallePlanets from './componentes/DetallePlanets';

import inyectContext from './store/AppContext';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detalle/:id" element={<Detalle/>} />
        <Route path="/detalleplanets/:id" element={<DetallePlanets/>} />
      </Routes>
    </div>
  );
}

export default inyectContext(App);

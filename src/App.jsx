import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Muestra tu Landing */}
        <Route path="/" element={<Home />} />

        {/* Ruta de administración: Muestra la tabla */}
        <Route path="/admin" element={<Admin />} />

        {/* Ruta de error 404 */}
        <Route path="*" element={
          <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-black text-teal-200">404</h1>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Página no encontrada</p>
            <a href="/" className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-lg">Volver al Inicio</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';

const Admin = () => {
  const [contactos, setContactos] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState('');

  const manejarLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/contactos', { headers: { 'Authorization': password } })
      .then(res => { if (!res.ok) throw new Error('Clave incorrecta'); return res.json(); })
      .then(data => { setContactos(data); setIsAuth(true); })
      .catch(err => setError(err.message));
  };

  const eliminar = (id) => {
    if (!window.confirm('¿Eliminar registro?')) return;
    fetch(`http://localhost:3000/api/contactos/borrar/${id}`, { headers: { 'Authorization': password } })
      .then(res => { if (res.ok) setContactos(contactos.filter(c => c._id !== id)); });
  };

  if (!isAuth) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 font-sans p-6">
        <form onSubmit={manejarLogin} className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-sm text-center">
          <div className="w-12 h-12 border-4 border-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-8 tracking-tighter uppercase">Kensei Admin</h2>
          <input 
            type="password" placeholder="Contraseña" className="w-full p-4 bg-gray-100 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-teal-500"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-gray-900 text-white p-4 rounded-full font-bold hover:bg-teal-700 transition-all">Desbloquear</button>
          {error && <p className="text-red-500 mt-4 text-xs font-bold uppercase">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">Módulo 01</span>
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter">CONSULTAS</h1>
          </div>
          <button onClick={() => window.location.reload()} className="text-xs font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest">Salir</button>
        </div>

        <div className="grid gap-4">
          {contactos.map((c) => (
            <div key={c._id} className="bg-white p-6 rounded-[35px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center group transition-all hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-xl uppercase">
                  {c.nombre.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{c.nombre}</h3>
                  <p className="text-teal-600 text-xs font-medium">{c.email}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic my-4 md:my-0 md:max-w-xs px-4">"{c.mensaje}"</p>
              <button onClick={() => eliminar(c._id)} className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white">
                🗑️
              </button>
            </div>
          ))}
          {contactos.length === 0 && <p className="text-center text-gray-300 py-20 font-bold uppercase tracking-widest">No hay estructuras conectadas</p>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
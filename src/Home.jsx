import React, { useState } from 'react';
import logo from './assets/logo.png'; 

const Home = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const res = await fetch('http://localhost:3000/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setExito(true);
        setFormData({ nombre: '', email: '', mensaje: '' });
        setTimeout(() => setExito(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] overflow-x-hidden font-['Lato']">
      
      {/* NAVBAR */}
      <nav className="bg-[#0D9488] h-20 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
          
          {/* Logo agrandado */}
          <div className="flex items-center h-full py-2">
            <img src={logo} alt="Kensei Logo" className="h-full w-auto object-contain scale-110 md:scale-125 origin-left" />
          </div>

          {/* Textos en el color oscuro del logo (#1F2937) */}
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-[#1F2937]">
            <a href="#filosofia" className="hover:text-white transition-colors">Filosofía</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-32 px-6 bg-white overflow-hidden flex flex-col justify-center min-h-[80vh]">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] border-[60px] border-[#0D9488]/5 rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-[#0D9488] font-bold tracking-[0.4em] text-xs uppercase mb-6">
            Gestión de Calidad para la Excelencia
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-[#1F2937] leading-[0.9] tracking-tighter mb-8">
            Excelencia que <br /> <span className="text-[#0D9488]">se entrena.</span>
          </h1>
          <p className="text-[#1F2937]/70 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed text-balance">
            Kensei es un catalizador para la transformación organizacional consciente. Representamos el liderazgo que se construye.
          </p>
          <a href="#contacto" className="inline-block px-12 py-5 bg-[#1F2937] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#0D9488] transition-all shadow-2xl">
            Iniciar el Viaje
          </a>
        </div>
      </header>

      {/* SECCIÓN FILOSOFÍA */}
      <section id="filosofia" className="py-24 px-6 bg-[#0D9488] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Nuestro Propósito</h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/90 font-medium">
              <p>KENSEI no es solo una consultora; es un catalizador para la transformación organizacional consciente.</p>
              <p>Nos dedicamos a guiar a las empresas, líderes y equipos en la forja de una cultura de excelencia sostenible, un paso a la vez.</p>
              <p>No es una imposición, sino una filosofía de vida profesional, un viaje de perfeccionamiento continuo.</p>
            </div>
          </div>

          <div className="bg-[#1F2937] p-12 rounded-[50px] shadow-2xl border border-white/5">
            <h3 className="text-[#47B9B4] font-black text-2xl mb-8 text-center uppercase tracking-tight">La Fusión Kensei</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 rounded-full mt-2 bg-[#0D9488]"></div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm">Precisión</h4>
                  <p className="text-white/60 text-sm">Ingeniería y estructura.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 rounded-full mt-2 bg-[#47B9B4]"></div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm">Visión</h4>
                  <p className="text-white/60 text-sm">Mentalidad y liderazgo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 rounded-full mt-2 bg-[#D3D3D3]"></div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm">Significado</h4>
                  <p className="text-white/60 text-sm">Propósito auténtico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-32 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black text-[#1F2937] uppercase tracking-tighter mb-20">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-8 border-2 border-[#0D9488] group-hover:bg-[#0D9488] transition-colors font-black text-[#0D9488] group-hover:text-white mx-auto">01</div>
              <h3 className="text-2xl font-black mb-4 uppercase text-[#1F2937]">Normas ISO 9001</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">Implementación, mantenimiento y preparación para auditorías de certificación de Sistemas de Gestión de la Calidad.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-8 border-2 border-[#0D9488] group-hover:bg-[#0D9488] transition-colors font-black text-[#0D9488] group-hover:text-white mx-auto">02</div>
              <h3 className="text-2xl font-black mb-4 uppercase text-[#1F2937]">Auditorías Internas</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">Evaluación objetiva e independiente de los procesos para detectar oportunidades de mejora y garantizar el cumplimiento normativo.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
              <div className="w-16 h-16 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-8 border-2 border-[#0D9488] group-hover:bg-[#0D9488] transition-colors font-black text-[#0D9488] group-hover:text-white mx-auto">03</div>
              <h3 className="text-2xl font-black mb-4 uppercase text-[#1F2937]">Capacitación</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">Formación in-company sobre herramientas de calidad, liderazgo y mejora continua para el personal en todos los niveles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border-[40px] border-[#F9FAFB] rounded-full"></div>
          <div className="absolute bottom-20 left-[-5%] w-64 h-64 bg-[#0D9488]/5 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#1F2937] leading-[0.9] tracking-tighter">
              Activá tu <br/> <span className="text-[#0D9488]">potencial.</span>
            </h2>
            <p className="text-[#1F2937]/70 text-lg mb-10 font-medium leading-relaxed max-w-md">
              Iniciemos el viaje de perfeccionamiento continuo. Dejanos tus datos y nos pondremos en contacto para acompañar a tu organización.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-[#0D9488]"></div>
              <p className="text-[#1F2937] text-xs uppercase tracking-[0.3em] font-black">Kensei Way</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#1F2937]/70 uppercase tracking-widest">Nombre completo</label>
                <input type="text" required className="w-full p-4 bg-[#0D9488]/10 border-2 border-transparent rounded-2xl text-[#1F2937] outline-none focus:border-[#0D9488] focus:bg-white transition-all" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#1F2937]/70 uppercase tracking-widest">Email corporativo</label>
                <input type="email" required className="w-full p-4 bg-[#0D9488]/10 border-2 border-transparent rounded-2xl text-[#1F2937] outline-none focus:border-[#0D9488] focus:bg-white transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#1F2937]/70 uppercase tracking-widest">¿Qué proceso vive tu organización?</label>
                <textarea required className="w-full p-4 bg-[#0D9488]/10 border-2 border-transparent rounded-2xl h-32 text-[#1F2937] outline-none focus:border-[#0D9488] focus:bg-white transition-all resize-none" value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})}></textarea>
              </div>
              
              <button disabled={enviando} className={`w-full p-5 rounded-full font-black uppercase tracking-widest transition-all text-sm mt-4 shadow-lg hover:shadow-xl ${enviando ? 'bg-gray-300 text-gray-500' : 'bg-[#1F2937] text-white hover:bg-[#0D9488]'}`}>
                {enviando ? 'Procesando...' : 'Iniciar Transformación'}
              </button>
              {exito && <p className="text-[#0D9488] text-center font-bold mt-4">¡Mensaje enviado con éxito! ✨</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 text-center text-[#1F2937]/50 text-xs uppercase tracking-[0.4em] bg-white font-bold border-t border-gray-50">
        Kensei Way © 2026 • Propósito y Significado
      </footer>
    </div>
  );
};

export default Home;
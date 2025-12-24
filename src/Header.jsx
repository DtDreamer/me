import { useMemo } from "react";

const ParticleBackground = () => {
  // Generamos 20 partículas con posiciones aleatorias
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 8 + 4}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-blue-400 rounded-full blur-sm animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

const Header = () => {
  const whatsappNumber = "74080505"; // [cite: 2]
  const contactMsg = encodeURIComponent(
    "Hola Israel, me interesa una consultoría para modernización tecnológica."
  );

  return (
    <header className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 bg-animated-gradient animate-gradient-slow">
      {/* Fondo de Partículas Digitales */}
      <ParticleBackground />

      {/* Malla técnica */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
          <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">
            Consultoría TI & Transformación Digital
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transformación Digital y <br />
          <span className="text-blue-400">Modernización Tecnológica</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Experto en Arquitectura de Software, Big Data y Liderazgo de TI con
          más de 7 años impulsando el sector público y privado.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${contactMsg}`}
            className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Iniciemos tu proyecto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import {
  Database,
  Code2,
  Settings,
  Award,
  BookOpen,
  MessageCircle,
  Globe,
  ShieldCheck,
} from "lucide-react";
import Header from "./Header";

const App = () => {
  const whatsappNumber = "59174080505";
  const contactMsg = encodeURIComponent(
    "Hola Israel, me interesa una consultoría para modernización tecnológica."
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- NAV BAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-blue-900">
            Israel José Huallpara Mencias
          </span>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} /> Contáctame
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <Header />

      {/* --- LOGRO DESTACADO --- */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-600 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600">
              <Globe size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Hito en modernización Nacional
              </h3>
              <p className="text-slate-600 italic">
                Liderazgo estratégico en la{" "}
                <strong>Digitalización del Servicio Notarial</strong>,
                optimizando la gestión y transparencia institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
          Servicios Especializados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Settings className="text-blue-600" size={32} />}
            title="Transformación Digital"
            desc="Modernización de procesos y sistemas legacy para instituciones públicas y PyMES."
          />
          <ServiceCard
            icon={<Code2 className="text-blue-600" size={32} />}
            title="Software a Medida"
            desc="Desarrollo robusto con herramientas modernas y de software libre, enfocado en escalabilidad."
          />
          <ServiceCard
            icon={<Database className="text-blue-600" size={32} />}
            title="Análisis de Datos"
            desc="Soluciones de Big Data y ETL para la toma de decisiones basada en evidencia."
          />
        </div>
      </section>

      {/* --- RESPALDO / CV --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Trayectoria Estratégica
              </h2>
              <ul className="space-y-6">
                <TimelineItem
                  year="2021 - 2025"
                  role="Jefe de UTIC"
                  place="Dirección del Notariado Plurinacional"
                />
                <TimelineItem
                  year="2020 - 2023"
                  role="Consultor Docente"
                  place="Universidad Boliviana de Informática"
                />
                <TimelineItem
                  year="2017 - 2018"
                  role="Programador"
                  place="Sector Privado"
                />
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Formación de Élite</h2>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <BookOpen />
                </div>
                <div>
                  <h4 className="font-bold">
                    Maestría en Big Data y Analítica de Datos
                  </h4>
                  <p className="text-slate-400">
                    Universidad Siglo XX (En desarrollo)
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <BookOpen />
                </div>
                <div>
                  <h4 className="font-bold">Licenciatura en Informática</h4>
                  <p className="text-slate-400">
                    Universidad Mayor de San Andrés
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <Award />
                </div>
                <div>
                  <h4 className="font-bold">
                    Estancia Profesional Internacional
                  </h4>
                  <p className="text-slate-400">
                    Consejo General del Notariado - España
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="font-bold">Certificaciones en Seguridad</h4>
                  <p className="text-slate-400">CCNA & Seguridad en Redes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="py-20 text-center bg-white border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-4">
          ¿Hablamos sobre tu próximo proyecto?
        </h2>
        <p className="text-slate-600 mb-8">
          Consultoría profesional para modernización institucional y
          empresarial.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${contactMsg}`}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all"
        >
          <MessageCircle /> Enviar WhatsApp
        </a>
        <div className="mt-12 text-slate-400 text-sm">
          <p>Israel José Huallpara Mencias | La Paz, Bolivia</p>
          <p>israelhuallpara@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl transition-all group">
    <div className="mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const TimelineItem = ({ year, role, place }) => (
  <li className="relative pl-8 border-l-2 border-blue-500/30">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
    <span className="text-sm font-bold text-blue-400">{year}</span>
    <h4 className="text-lg font-bold">{role}</h4>
    <p className="text-slate-400">{place}</p>
  </li>
);

export default App;

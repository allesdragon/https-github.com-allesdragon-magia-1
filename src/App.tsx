/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MessageCircle, 
  Star, 
  Clock, 
  CheckCircle2, 
  Gift, 
  Camera, 
  Users, 
  ShieldCheck, 
  ChevronDown,
  Sparkles,
  Zap,
  Heart,
  Calendar,
  MapPin,
  Smile
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, ReactNode } from 'react';

const WHATSAPP_NUMBER = "51999999999"; // Placeholder for the user to update
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quisiera%20información%20sobre%20el%20show%20de%20magia%20para%20un%20cumpleaños.`;

const SectionTitle = ({ children, subtitle, light = false }: { children: ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${light ? 'text-white' : 'text-zinc-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl mx-auto ${light ? 'text-zinc-400' : 'text-zinc-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const CTAButton = ({ className = "", children = "RESERVAR POR WHATSAPP" }: { className?: string, children?: ReactNode }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg md:text-xl ${className}`}
  >
    <MessageCircle className="w-6 h-6" />
    {children}
  </motion.a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-bold text-lg md:text-xl text-zinc-800 hover:text-purple-600 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-4 text-zinc-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-purple-200 selection:text-purple-900">
      
      {/* --- SECTION 1: HERO (ABOVE THE FOLD - DARK) --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden px-4 py-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold tracking-widest uppercase">Magia Profesional en Lima</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter"
          >
            ¡El Cumpleaños de Tu Hijo Se Convertirá en el Evento <span className="text-purple-500 italic">Más Recordado</span> Por Todos!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Imagina la sonrisa de tu hijo cuando vea magia real ante sus ojos... En <span className="text-white font-bold">Magos en Lima</span> transformamos fiestas comunes en experiencias extraordinarias.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <CTAButton />
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-zinc-950" alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <span>+500 Fiestas Mágicas en Lima</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* --- SECTION 2: THE PROBLEM (LIGHT) --- */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Seamos honestos...</h3>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
                Planear el cumpleaños de tu hijo es más estresante de lo que debería ser.
              </h2>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                Te preocupa que los niños se aburran, que terminen corriendo sin control o que los padres invitados piensen que la fiesta fue "normal".
              </p>
              <ul className="space-y-4">
                {[
                  "Niños pegados a tablets por falta de atención",
                  "Shows que terminan siendo payasadas sin sentido",
                  "Pequeños llorando porque no hay nada emocionante",
                  "Tú acabas más cansada que después de trabajar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700">
                    <Zap className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/magic-sad/800/800" 
                  alt="Boring party" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-zinc-900 font-bold italic">"No quiero solo un show. Quiero que mi hijo sienta que es el niño más especial del mundo."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE STORY & SOLUTION (WARM/CREAM) --- */}
      <section className="py-24 px-4 bg-[#fdfaf5]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle subtitle="No trucos baratos. Experiencias que transforman cumpleaños ordinarios en recuerdos extraordinarios.">
            La Magia Que Crea Recuerdos
          </SectionTitle>
          
          <div className="prose prose-lg mx-auto text-zinc-700 leading-relaxed mb-12">
            <p className="mb-6">
              Hace algunos años, una mamá nos llamó desesperada. El mago contratado nunca llegó y su hijo Mateo pasó su cumpleaños llorando. Al año siguiente, llegamos con una misión: <strong>borrar ese recuerdo.</strong>
            </p>
            <p className="mb-6">
              Cuando Mateo vio su juguete favorito cobrar vida, los gritos de emoción se escucharon en toda la cuadra. Al final, nos abrazó y dijo: <strong>"Este fue el mejor cumpleaños de toda mi vida"</strong>.
            </p>
            <p className="text-2xl font-bold text-zinc-900 italic">
              Esa es la magia que llevamos a tu casa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, title: "Protagonismo Total", desc: "Tu hijo es la estrella del show, no solo un espectador." },
              { icon: Smile, title: "Humor Inteligente", desc: "Risas garantizadas para niños y adultos por igual." },
              { icon: ShieldCheck, title: "Profesionalismo", desc: "Puntualidad, equipo propio y años de experiencia." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                <item.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <CTAButton />
        </div>
      </section>

      {/* --- SECTION 4: BENEFITS (DARK GRID) --- */}
      <section className="py-24 px-4 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light subtitle="¿Qué obtienes exactamente cuando confías en nosotros?">
            Beneficios Que Marcan La Diferencia
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Héroe del Día", desc: "Tu hijo hará la magia más impresionante frente a sus amigos." },
              { icon: Clock, title: "Cero Estrés", desc: "Tú te relajas y disfrutas mientras nosotros controlamos todo." },
              { icon: Camera, title: "Fotos Épicas", desc: "Captura expresiones de asombro genuino que durarán años." },
              { icon: Star, title: "Reputación", desc: "Serás la mamá que organizó 'la mejor fiesta del año'." },
              { icon: Heart, title: "Recuerdos", desc: "Experiencias emocionales que quedan grabadas para siempre." },
              { icon: ShieldCheck, title: "Tranquilidad", desc: "Somos puntuales y confiables. Cero sorpresas negativas." },
              { icon: Users, title: "Familiar", desc: "Los papás y abuelos también se sorprenden y divierten." },
              { icon: Gift, title: "Regalo Especial", desc: "Incluimos un obsequio mágico para el cumpleañero." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: HOW IT WORKS (LIGHT) --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="El proceso más simple para tener al mejor mago en tu fiesta.">
            Cómo Funciona
          </SectionTitle>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Contacto", desc: "Escríbenos por WhatsApp con la fecha y edad." },
              { step: "02", title: "Personalización", desc: "Definimos los detalles según los gustos de tu hijo." },
              { step: "03", title: "Reserva", desc: "Apartamos tu fecha con una señal mínima." },
              { step: "04", title: "¡Magia!", desc: "Llegamos, montamos y creamos un día inolvidable." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TESTIMONIALS (ACCENT) --- */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Lo que dicen las familias que ya confiaron en nosotros.">
            Testimonios Reales
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María Elena Torres",
                location: "San Isidro",
                text: "¡Mi hija no para de hablar del mago! Ya pasaron 2 semanas y sigue contándole a todo el mundo. 100% recomendado.",
                img: "https://picsum.photos/seed/user1/60/60"
              },
              {
                name: "Carlos Mendoza",
                location: "Miraflores",
                text: "Logró mantener a TODOS los niños atentos durante una hora. Hasta yo me quedé sorprendido. Vale cada sol invertido.",
                img: "https://picsum.photos/seed/user2/60/60"
              },
              {
                name: "Patricia Vargas",
                location: "Surco",
                text: "Profesionalismo nivel 1000. Una mamá me dijo: 'Ha sido el MEJOR show que he visto'. Gracias por todo.",
                img: "https://picsum.photos/seed/user3/60/60"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-zinc-700 italic mb-6 leading-relaxed">"{item.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={item.img} className="w-12 h-12 rounded-full" alt={item.name} referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-zinc-900">{item.name}</h5>
                    <p className="text-xs text-zinc-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ (LIGHT) --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle subtitle="Resolvemos tus dudas antes de contratar.">
            Preguntas Frecuentes
          </SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="¿Para qué edades es apropiado el show?" 
              answer="Nuestros shows están diseñados para niños de 4 a 10 años, pero adaptamos el lenguaje y los trucos según la edad del cumpleañero para que todos se diviertan." 
            />
            <FAQItem 
              question="¿Cuánto dura el show exactamente?" 
              answer="El show dura 60 minutos de entretenimiento ininterrumpido. Llegamos 30 minutos antes para montar el equipo sin quitar tiempo de la fiesta." 
            />
            <FAQItem 
              question="¿Qué distritos de Lima cubren?" 
              answer="Trabajamos en TODOS los distritos de Lima Metropolitana: Miraflores, San Isidro, Surco, La Molina, San Borja, Los Olivos, etc." 
            />
            <FAQItem 
              question="¿Los adultos también se divierten?" 
              answer="¡Absolutamente! Aunque el foco son los niños, los trucos son de nivel profesional y el humor es familiar, por lo que los papás terminan tan sorprendidos como los pequeños." 
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA (DARK) --- */}
      <section className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Sparkles className="absolute top-10 left-10 w-20 h-20 text-purple-500 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 w-20 h-20 text-purple-500 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Haz Que Este Sea El Cumpleaños Que Tu Hijo <span className="text-purple-500">Recordará Siempre</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Manejamos agenda limitada y los fines de semana se llenan rápido. No arriesgues el día más especial de tu hijo.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <CTAButton className="scale-110" />
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-widest uppercase text-zinc-500">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Puntualidad</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Profesionalismo</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Magia Real</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-zinc-100 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <span className="text-2xl font-black tracking-tighter">MAGOS EN LIMA</span>
          </div>
          <p className="text-zinc-500 text-sm mb-4">Transformando cumpleaños ordinarios en experiencias extraordinarias.</p>
          <div className="flex justify-center gap-6 mb-8">
            <MapPin className="w-5 h-5 text-zinc-400" />
            <span className="text-zinc-500 text-sm">Cobertura en todo Lima Metropolitana</span>
          </div>
          <p className="text-zinc-400 text-xs">© {new Date().getFullYear()} Magos en Lima. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button for Mobile */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl md:hidden"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}

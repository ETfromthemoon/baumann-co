// Baumann & Co. — Copy y data de las secciones.
// Sigue las reglas de voz definidas en brand-profile.json.

export const SITE = {
  name: "Baumann & Co.",
  shortName: "Baumann&Co.",
  description: "Consultoría para fundadores de empresas medianas",
  primaryCTA: {
    label: "Agenda tu diagnóstico gratuito",
    short: "Agendar diagnóstico",
    href: "https://meetings.hubspot.com/manuel-baumann",
    subtext: "30 min · Sin costo · Sin compromiso",
  },
  secondaryCTA: {
    label: "Toma el test ORCA®",
    href: "/test-fundador-quiz",
  },
  email: "info@baumann-co.com",
  english: "/english",
} as const;

export const PROBLEMS = [
  {
    id: "orden",
    number: "01",
    pillar: "Orden",
    headline: "No puedes mejorar lo que no ves.",
    body:
      "Procesos en la cabeza del dueño. Roles ambiguos. Decisiones que dependen de quién esté disponible. La operación funciona, pero por inercia, no por estructura.",
  },
  {
    id: "rentabilidad",
    number: "02",
    pillar: "Rentabilidad",
    headline: "Vender más no arregla un negocio que pierde valor.",
    body:
      "Márgenes que se diluyen, caja imprevisible, costos que crecen sin control. Facturas que parecen buenas hasta que cierras el mes.",
  },
  {
    id: "crecimiento",
    number: "03",
    pillar: "Crecimiento",
    headline: "Crecimiento sin foco genera estrés, no escala.",
    body:
      "Cada cliente nuevo suma problemas operativos en vez de rentabilidad. Más ventas, mismo dueño apagando incendios.",
  },
  {
    id: "autonomia",
    number: "04",
    pillar: "Autonomía",
    headline: "Una empresa que depende del dueño es frágil.",
    body:
      "Cuando te enfermas, el negocio se detiene. Cuando viajas, todo se rompe. Cuando duermes mal, todos lo notan al día siguiente.",
  },
] as const;

export const METHOD_PILLARS = [
  {
    letter: "O",
    name: "Orden",
    headline: "Procesos que sostienen la operación sin ti.",
    body:
      "Mapeamos los procesos críticos —los que si fallan, fallan ingresos—, los documentamos en formato accesible para tu equipo, y definimos roles que evitan ambigüedad. Implementamos tableros con métricas operativas reales, no vanity metrics.",
    outcome: "Sabes en 5 minutos cómo está tu empresa, no en una reunión de 2 horas.",
  },
  {
    letter: "R",
    name: "Rentabilidad",
    headline: "Vender más no arregla un negocio que pierde valor.",
    body:
      "Auditamos margen unitario por producto y servicio, costos ocultos (re-trabajo, devoluciones, descuentos no autorizados), flujo de caja real vs proyectado. Optimizamos la cadena de captura de valor antes de hablar de crecer.",
    outcome: "+40% mejora en márgenes operativos promedio a los 6 meses.",
  },
  {
    letter: "C",
    name: "Crecimiento",
    headline: "Sistemas predecibles, no esfuerzos heroicos.",
    body:
      "Construimos un sistema de adquisición de clientes que no dependa de tu agenda: canal por canal con métricas de CAC, ciclo y LTV. El crecimiento se vuelve replicable, no épico.",
    outcome: "Cada cliente nuevo suma rentabilidad. No problemas operativos.",
  },
  {
    letter: "A",
    name: "Autonomía",
    headline: "Tu equipo decide. Tú diriges.",
    body:
      "Definimos el sistema operativo del equipo: cómo se toman decisiones sin tu presencia, qué métricas miran, qué reuniones existen y para qué. Tu equipo opera con tableros claros. Tú vuelves a estrategia.",
    outcome: "De 60+ horas en operación a 20 horas en estrategia.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    when: "Día 1",
    title: "Diagnóstico",
    duration: "30 min",
    body:
      "Identificamos el cuello de botella real de tu operación. Llamada conmigo. Sin presentación. Sin venta.",
  },
  {
    when: "Día 7",
    title: "Plan",
    duration: "1 semana",
    body:
      "Documentamos procesos, definimos roles y métricas que necesitas para delegar con confianza. Te entregamos un mapa, no un PowerPoint.",
  },
  {
    when: "Día 8–90",
    title: "Implementación",
    duration: "12 semanas",
    body:
      "Ejecutamos juntos. Tu equipo adopta los nuevos sistemas con acompañamiento continuo. Revisiones quincenales con métricas reales.",
  },
  {
    when: "Día 90+",
    title: "Autonomía",
    duration: "continuo",
    body:
      "Tu empresa opera con tableros claros. Tomas decisiones estratégicas, no apagas incendios. Tu equipo decide sin buscarte para cada cosa.",
  },
] as const;

export const BENEFITS = [
  {
    icon: "Clock",
    title: "Recuperas tu tiempo",
    body: "De 60+ horas en operación a 20 horas en estrategia. Tu equipo resuelve sin buscarte para cada decisión.",
  },
  {
    icon: "TrendingUp",
    title: "Creces sin estrés",
    body: "Sistemas replicables de ventas. Cada cliente nuevo suma rentabilidad, no problemas operativos.",
  },
  {
    icon: "Gauge",
    title: "Control total",
    body: "Tableros que te muestran el estado real del negocio en 5 minutos. Sin sorpresas de fin de mes.",
  },
  {
    icon: "Wallet",
    title: "Ves tu dinero",
    body: "Márgenes claros, costos controlados, flujo de caja predecible. Sabes exactamente dónde está cada peso.",
  },
  {
    icon: "Users",
    title: "Delegas con confianza",
    body: "Procesos documentados, roles claros, métricas definidas. Tu equipo sabe exactamente qué hacer.",
  },
  {
    icon: "Rocket",
    title: "Escalabilidad real",
    body: "Tu empresa puede duplicar ventas sin duplicar tu carga de trabajo. La estructura lo permite.",
  },
] as const;

type Metric = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  context: string;
};

export const METRICS: readonly Metric[] = [
  {
    value: 23,
    suffix: "h",
    label: "Horas semanales recuperadas",
    context: "en promedio tras el día 90",
  },
  {
    value: 40,
    suffix: "%",
    prefix: "+",
    label: "Mejora en márgenes operativos",
    context: "a los 6 meses",
  },
  {
    value: 90,
    suffix: "d",
    label: "Para sistemas de autonomía",
    context: "tiempo promedio de implementación",
  },
];

export const STATS_HERO = [
  { value: "+200", label: "Empresas transformadas desde 2018" },
  { value: "12", label: "Industrias atendidas" },
  { value: "94%", label: "De clientes completa el programa" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Llegué a Baumann trabajando 70 horas. A los tres meses estaba tomando café a las 10 con mi hijo sin sentir que la empresa se caía.",
    name: "Andrés M.",
    role: "Fundador",
    company: "Manufactura, 45 empleados",
  },
  {
    quote: "Pensaba que delegar era darle tareas a otros. Manuel me hizo ver que era construir un sistema. Eso cambió todo.",
    name: "Carolina R.",
    role: "CEO",
    company: "Servicios profesionales, 28 empleados",
  },
  {
    quote: "Nuestros márgenes subieron 38% en seis meses. Lo más raro es que dejé de mirar el banco todos los días.",
    name: "Esteban L.",
    role: "Director General",
    company: "Distribución, 60 empleados",
  },
  {
    quote: "El diagnóstico de 30 minutos me dolió. Me dijo cosas que sabía pero no quería escuchar. Por eso lo contraté.",
    name: "Mariana V.",
    role: "Fundadora",
    company: "Retail, 22 empleados",
  },
  {
    quote: "Pasamos de reuniones de tres horas a revisiones de quince minutos. El equipo ahora trae soluciones, no problemas.",
    name: "Juan Pablo S.",
    role: "Fundador",
    company: "Construcción, 50 empleados",
  },
  {
    quote: "Viajé tres semanas por primera vez en ocho años. Volví y la facturación estaba un 12% arriba. Eso es ORCA®.",
    name: "Felipe G.",
    role: "Socio fundador",
    company: "SaaS, 35 empleados",
  },
] as const;

export const FAQS = [
  {
    q: "¿Cuánto cuesta el programa ORCA®?",
    a: "El diagnóstico de 30 minutos es gratuito. El programa completo se cotiza en función del tamaño de tu empresa y la complejidad de la intervención. Te damos el rango exacto en el diagnóstico, sin sorpresas y sin letra chica.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Los primeros cambios operativos se notan en las primeras 4 semanas. La autonomía real del equipo se consolida hacia el día 90. No es un proceso rápido, es un proceso definido con entregables semanales.",
  },
  {
    q: "¿Esto sirve para mi industria?",
    a: "El método ORCA® aplica a empresas medianas con 15-80 empleados, sin importar la industria. Hemos trabajado en SaaS, manufactura, retail, servicios profesionales, construcción y salud. El cuello de botella del fundador es el mismo en todas.",
  },
  {
    q: "¿Y si no funciona?",
    a: "Tenemos garantía de progreso medible a los 90 días. Si tu empresa no reduce tu carga operativa de forma cuantificable, devolvemos el último mes. Hasta hoy no hemos tenido que aplicar la cláusula.",
  },
  {
    q: "¿Tengo que ser yo quien lidere la implementación?",
    a: "No. Tu rol cambia de operador a supervisor. Trabajamos directamente con tu equipo operativo. Tú participas en revisiones quincenales y decisiones estratégicas. Eso es justamente el punto del método: que dejes de operar.",
  },
  {
    q: "¿Trabajan presencial o remoto?",
    a: "Híbrido. Diagnóstico y revisiones por video. Implementación on-site según el tamaño y geografía. Tenemos clientes en LATAM y mercado angloparlante.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre Manuel", href: "#sobre-manuel" },
] as const;

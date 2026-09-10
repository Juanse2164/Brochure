import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type Language = "es" | "en"

const translations = {
  es: {
    meta: {
      title: "Juan Esteban Robles — Chatbots, Bots RPA y Cloud para tu empresa",
      description:
        "Diseño y desarrollo de chatbots, bots RPA que imitan el comportamiento humano e infraestructura en AWS. Automatización inteligente para empresas.",
    },
    nav: {
      links: ["Servicios", "Bots RPA", "Sectores", "Sobre mí"],
      cta: "Hablemos",
      themeLabel: "Cambiar tema",
      languageLabel: "Idioma",
      spanish: "Español",
      english: "English",
    },
    hero: {
      badge: "Arquitecto de Software · +6 años de experiencia",
      titleLead: "Automatización que ",
      titleAccent: "trabaja por tu empresa",
      lead:
        "Diseño chatbots inteligentes, bots RPA que imitan el comportamiento humano e infraestructura en la nube de AWS. Soluciones de software a la medida para empresas que quieren vender más y operar mejor, sin aumentar costos.",
      actions: {
        schedule: "Agenda una llamada",
        services: "Ver servicios",
      },
      stats: [
        { value: "+6 años", label: "de experiencia en software" },
        { value: "90%", label: "de ahorro en costos operativos" },
        { value: "24/7", label: "operación automatizada" },
      ],
      deck: {
        chat: {
          title: "Chatbot de ventas · WhatsApp",
          greeting: "¡Hola! Soy el asistente virtual. ¿En qué puedo ayudarte hoy?",
          userMessage: "Quiero ver camisetas en talla M",
          answer:
            "Encontré 12 camisetas disponibles en talla M. Te comparto el catálogo…",
          success: "Pedido #1024 confirmado",
        },
        rpa: {
          title: "Bots RPA",
          task: "Replicando el trabajo de una persona, más rápido y sin errores…",
          meta: "Un mes de trabajo, hecho en días",
          approved: "Aprobado",
        },
        database: {
          title: "Bases de datos",
          task: "Optimizando consultas críticas…",
          meta: "Rendimiento bajo control",
        },
        aws: {
          title: "Infraestructura en AWS",
          task: "Monitoreando recursos en la nube…",
          meta: "Seguridad y costos bajo control",
          icons: ["Disco duro", "Red", "CloudWatch"],
        },
        custom: {
          title: "Desarrollo a la medida",
          task: "Diseñando soluciones confiables…",
          meta: "Arquitectura escalable y patrones sólidos",
          icons: ["Arquitectura", "Patrones", "Escalabilidad", "Confiabilidad"],
        },
      },
    },
    marquee: [
      "Retail & Moda",
      "Ventas",
      "Hotelería",
      "Restaurantes",
      "Servicio al Cliente",
      "WhatsApp Business",
      "Automatización 24/7",
    ],
    services: {
      label: "Servicios",
      title: "Soluciones de automatización a la medida",
      description:
        "Tres líneas de servicio para eliminar el trabajo repetitivo, atender mejor a tus clientes y escalar tu operación.",
      cards: {
        chatbots: {
          title: "Chatbots inteligentes",
          description:
            "Diseño y desarrollo de chatbots que automatizan conversaciones y flujos de negocio de principio a fin: ventas, reservas, pedidos y atención al cliente.",
          items: [
            "Flujos de venta y catálogo de productos",
            "Reservas, pedidos y cotizaciones automáticas",
            "Atención al cliente 24/7",
            "Integración con WhatsApp y tus sistemas actuales",
          ],
        },
        rpa: {
          title: "Bots RPA",
          descriptionBefore: "Bots que ",
          descriptionStrong: "imitan el comportamiento humano en un computador",
          descriptionAfter:
            ": navegan, hacen clic, llenan formularios y mueven datos entre sistemas, igual que una persona, pero sin cansarse ni equivocarse.",
          items: [
            "Automatiza sin necesidad de APIs ni integraciones",
            "Entrada y migración masiva de datos",
            "Extracción de información de sitios web",
            "Operación continua, rápida y sin errores",
          ],
          tag: "El más innovador",
          link: "Conoce cómo funciona",
        },
        aws: {
          title: "Infraestructura en AWS",
          description:
            "Administración de tu infraestructura en la nube de Amazon: servidores, bases de datos, despliegues y monitoreo, con foco en seguridad y optimización de costos.",
          items: [
            "Arquitectura y despliegue de aplicaciones en AWS",
            "Optimización de costos en la nube",
            "Seguridad, respaldos y alta disponibilidad",
            "Monitoreo y escalabilidad bajo demanda",
          ],
        },
      },
    },
    rpa: {
      label: "Automatización Robótica de Procesos",
      titleLead: "Un bot que usa el computador ",
      titleAccent: "como lo haría una persona",
      introBefore:
        "La RPA (Robotic Process Automation) consiste en bots de software que operan las aplicaciones de tu empresa ",
      introStrong: "imitando el comportamiento humano",
      introAfter:
        ": abren el navegador, inician sesión, hacen clic, leen pantallas, copian información y llenan formularios. Estos bots controlan navegadores reales con una precisión milimétrica.",
      secondParagraph:
        "¿La mejor parte? No necesitas cambiar tus sistemas ni contratar integraciones costosas. Si una persona puede hacerlo en un computador, un bot RPA puede hacerlo más rápido, sin pausas y sin errores.",
      chips: [
        "Sin cambios en tus sistemas",
        "Cero errores humanos",
        "Trabaja 24/7",
        "Retorno de inversión en semanas",
      ],
      steps: [
        {
          num: "1",
          title: "Observa",
          text: "El bot abre la aplicación web o el sistema de tu empresa, igual que lo haría un operario.",
        },
        {
          num: "2",
          title: "Ejecuta",
          text: "Hace clic, escribe, navega y completa las tareas paso a paso, con la lógica de tu negocio.",
        },
        {
          num: "3",
          title: "Entrega",
          text: "Guarda los resultados, genera reportes y notifica cuando termina. Tú solo revisas.",
        },
      ],
      quoteBefore: "Procesos que antes tomaban ",
      quoteStrongFirst: "un mes de trabajo manual",
      quoteMiddle: " se completan en ",
      quoteStrongSecond: "tres días",
    },
    sectors: {
      label: "Experiencia comprobada",
      title: "Sectores que ya he automatizado",
      description:
        "He construido flujos conversacionales y automatizaciones para empresas reales en estos sectores.",
      items: [
        {
          title: "Retail & Moda",
          text: "Flujos de venta de ropa por chat: catálogo, tallas, pedidos y cierre de venta automático.",
        },
        {
          title: "Ventas",
          text: "Cotizaciones, seguimiento de clientes y embudos de venta que convierten sin intervención humana.",
        },
        {
          title: "Hotelería",
          text: "Reservas, disponibilidad y atención a huéspedes respondida al instante, a cualquier hora.",
        },
        {
          title: "Restaurantes",
          text: "Toma de pedidos, reservas de mesas y menú digital directamente desde el chat.",
        },
        {
          title: "Servicio al Cliente",
          text: "Respuestas instantáneas 24/7 que reducen la carga de tu equipo y mejoran la experiencia.",
        },
      ],
    },
    about: {
      card: {
        name: "Juan Esteban Robles Chanagá",
        role: "Arquitecto de Software · Ingeniero Full Stack",
        location: "Colombia",
        certifications: [
          "Certificación en Cálculo para Inteligencia Artificial",
          "Inglés C1 Advanced",
          "Linux",
          "SQL",
        ],
      },
      label: "Sobre mí",
      title: "Ingeniería seria, resultados medibles",
      firstParagraph:
        "Soy Arquitecto de Software y Tech Lead con más de 6 años construyendo soluciones empresariales: he liderado equipos de desarrollo, modernizado sistemas legacy e integrado inteligencia artificial generativa (OpenAI, Gemini, Anthropic, DeepSeek) en procesos de negocio reales.",
      secondParagraph: "Construyo sistemas que reducen costos y se pueden medir.",
      results: [
        {
          value: "<1 segundo",
          text: "de tiempo de respuesta de un chatbot, 24/7. Una atención instantánea que ningún humano puede sostener.",
        },
        {
          value: "1 mes → 3 días",
          text: "en la migración de 2.000 registros, reemplazando el trabajo manual de 5 personas.",
        },
        {
          value: "10s → <1s",
          text: "de mejora en tiempos de carga críticos mediante optimización de bases de datos.",
        },
      ],
    },
    contact: {
      title: "¿Listo para automatizar tu empresa?",
      description:
        "Cuéntame qué proceso le quita tiempo a tu equipo y te propongo cómo automatizarlo. La primera conversación no tiene ningún costo.",
      whatsapp: "Escríbeme por WhatsApp",
      email: "juanse2164@hotmail.com",
      linkedin: "Conecta conmigo en LinkedIn",
      whatsappUrl:
        "https://wa.me/573015459744?text=Hola%20Juan%2C%20quiero%20automatizar%20procesos%20en%20mi%20empresa",
    },
    footer: {
      copyright: "© 2026 Juan Esteban Robles Chanagá",
      services: "Automatización · Chatbots · RPA · AWS",
    },
  },
  en: {
    meta: {
      title: "Juan Esteban Robles — Chatbots, RPA Bots and Cloud for your business",
      description:
        "Design and development of chatbots, RPA bots that imitate human behavior, and AWS infrastructure. Intelligent automation for businesses.",
    },
    nav: {
      links: ["Services", "RPA Bots", "Industries", "About me"],
      cta: "Let's talk",
      themeLabel: "Change theme",
      languageLabel: "Language",
      spanish: "Spanish",
      english: "English",
    },
    hero: {
      badge: "Software Architect · 6+ years of experience",
      titleLead: "Automation that ",
      titleAccent: "works for your business",
      lead:
        "I design intelligent chatbots, RPA bots that imitate human behavior, and AWS cloud infrastructure. Tailored software solutions for companies that want to sell more and operate better, without increasing costs.",
      actions: {
        schedule: "Schedule a call",
        services: "View services",
      },
      stats: [
        { value: "6+ years", label: "of software experience" },
        { value: "90%", label: "in operational cost savings" },
        { value: "24/7", label: "automated operation" },
      ],
      deck: {
        chat: {
          title: "Sales chatbot · WhatsApp",
          greeting: "Hi! I'm the virtual assistant. How can I help you today?",
          userMessage: "I want to see T-shirts in size M",
          answer:
            "I found 12 T-shirts available in size M. I'm sharing the catalog with you…",
          success: "Order #1024 confirmed",
        },
        rpa: {
          title: "RPA Bots",
          task: "Replicating a person's work, faster and without errors…",
          meta: "1,842 / 2,000 · One month of work, done in days",
          approved: "Approved",
        },
        database: {
          title: "Databases",
          task: "Optimizing critical queries…",
          meta: "Performance under control",
        },
        aws: {
          title: "AWS infrastructure",
          task: "Monitoring cloud resources…",
          meta: "Security and costs under control",
          icons: ["Hard drive", "Network", "CloudWatch"],
        },
        custom: {
          title: "Custom development",
          task: "Designing reliable solutions…",
          meta: "Scalable architecture and solid patterns",
          icons: ["Architecture", "Patterns", "Scalability", "Reliability"],
        },
      },
    },
    marquee: [
      "Retail & Fashion",
      "Sales",
      "Hospitality",
      "Restaurants",
      "Customer Service",
      "WhatsApp Business",
      "Automation 24/7",
    ],
    services: {
      label: "Services",
      title: "Custom automation solutions",
      description:
        "Three service lines to eliminate repetitive work, serve your customers better, and scale your operation.",
      cards: {
        chatbots: {
          title: "Intelligent chatbots",
          description:
            "I design and develop chatbots that automate conversations and business flows from start to finish: sales, reservations, orders, and customer service.",
          items: [
            "Sales flows and product catalogs",
            "Automatic reservations, orders, and quotes",
            "24/7 customer service",
            "Integration with WhatsApp and your current systems",
          ],
        },
        rpa: {
          title: "RPA bots",
          descriptionBefore: "Bots that ",
          descriptionStrong: "imitate human behavior on a computer",
          descriptionAfter:
            ": browse, click, fill out forms, and move data between systems, just like a person, but without getting tired or making mistakes.",
          items: [
            "Automate without APIs or integrations",
            "Bulk data entry and migration",
            "Information extraction from websites",
            "Continuous, fast, error-free operation",
          ],
          tag: "The most innovative",
          link: "See how it works",
        },
        aws: {
          title: "AWS infrastructure",
          description:
            "Management of your Amazon cloud infrastructure: servers, databases, deployments, and monitoring, with a focus on security and cost optimization.",
          items: [
            "Application architecture and deployment on AWS",
            "Cloud cost optimization",
            "Security, backups, and high availability",
            "Monitoring and on-demand scalability",
          ],
        },
      },
    },
    rpa: {
      label: "Robotic Process Automation",
      titleLead: "A bot that uses a computer ",
      titleAccent: "the way a person would",
      introBefore:
        "RPA (Robotic Process Automation) consists of software bots that operate your company's applications ",
      introStrong: "imitating human behavior",
      introAfter:
        ": they open the browser, log in, click, read screens, copy information, and fill out forms. These bots control real browsers with millimeter precision.",
      secondParagraph:
        "The best part? You don't need to change your systems or hire expensive integrations. If a person can do it on a computer, an RPA bot can do it faster, without pauses and without errors.",
      chips: [
        "No changes to your systems",
        "Zero human errors",
        "Works 24/7",
        "Return on investment in weeks",
      ],
      steps: [
        {
          num: "1",
          title: "Observe",
          text: "The bot opens your company's web application or system, just as an operator would.",
        },
        {
          num: "2",
          title: "Execute",
          text: "It clicks, types, navigates, and completes tasks step by step, following your business logic.",
        },
        {
          num: "3",
          title: "Deliver",
          text: "It saves results, generates reports, and notifies you when it finishes. You only review.",
        },
      ],
      quoteBefore: "Processes that used to take ",
      quoteStrongFirst: "one month of manual work",
      quoteMiddle: " are completed in ",
      quoteStrongSecond: "three days",
    },
    sectors: {
      label: "Proven experience",
      title: "Industries I have already automated",
      description:
        "I have built conversational flows and automations for real companies in these industries.",
      items: [
        {
          title: "Retail & Fashion",
          text: "Clothing sales flows by chat: catalog, sizes, orders, and automatic sales closing.",
        },
        {
          title: "Sales",
          text: "Quotes, customer follow-up, and sales funnels that convert without human intervention.",
        },
        {
          title: "Hospitality",
          text: "Reservations, availability, and guest service answered instantly, at any time.",
        },
        {
          title: "Restaurants",
          text: "Order taking, table reservations, and digital menu directly from the chat.",
        },
        {
          title: "Customer Service",
          text: "Instant 24/7 responses that reduce your team's workload and improve the experience.",
        },
      ],
    },
    about: {
      card: {
        name: "Juan Esteban Robles Chanagá",
        role: "Software Architect · Full Stack Engineer",
        location: "Colombia",
        certifications: [
          "Certification in Calculus for Artificial Intelligence",
          "English C1 Advanced",
          "Linux",
          "SQL",
        ],
      },
      label: "About me",
      title: "Serious engineering, measurable results",
      firstParagraph:
        "I am a Software Architect and Tech Lead with more than 6 years building enterprise solutions: I have led development teams, modernized legacy systems, and integrated generative artificial intelligence (OpenAI, Gemini, Anthropic, DeepSeek) into real business processes.",
      secondParagraph: "I build systems that reduce costs and can be measured.",
      results: [
        {
          value: "<1 second",
          text: "chatbot response time, 24/7. Instant support that no human can sustain.",
        },
        {
          value: "1 month → 3 days",
          text: "in the migration of 2,000 records, replacing the manual work of 5 people.",
        },
        {
          value: "10s → <1s",
          text: "improvement in critical load times through database optimization.",
        },
      ],
    },
    contact: {
      title: "Ready to automate your business?",
      description:
        "Tell me which process takes time away from your team and I'll suggest how to automate it. The first conversation is completely free.",
      whatsapp: "Message me on WhatsApp",
      email: "juanse2164@hotmail.com",
      linkedin: "Connect with me on LinkedIn",
      whatsappUrl:
        "https://wa.me/573015459744?text=Hello%20Juan%2C%20I%20want%20to%20automate%20processes%20in%20my%20company",
    },
    footer: {
      copyright: "© 2026 Juan Esteban Robles Chanagá",
      services: "Automation · Chatbots · RPA · AWS",
    },
  },
} as const

type Copy = (typeof translations)["es"]

interface LanguageContextValue {
  language: Language
  copy: Copy
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LANGUAGE_COOKIE = "brochure_language"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30

const ENGLISH_SPEAKING_COUNTRIES = new Set([
  "AG",
  "AU",
  "BB",
  "BS",
  "BZ",
  "BW",
  "CA",
  "DM",
  "FJ",
  "GB",
  "GD",
  "GH",
  "GM",
  "GY",
  "IE",
  "IN",
  "JM",
  "KE",
  "KN",
  "LC",
  "LR",
  "LS",
  "MT",
  "MU",
  "MW",
  "NA",
  "NG",
  "NZ",
  "PG",
  "PH",
  "SB",
  "SG",
  "SL",
  "SZ",
  "TT",
  "US",
  "VC",
  "ZA",
  "ZM",
  "ZW",
])

function readLanguageCookie(): Language | null {
  if (typeof document === "undefined") return null

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${LANGUAGE_COOKIE}=`))
  const value = cookie?.split("=")[1]

  return value === "es" || value === "en" ? value : null
}

function writeLanguageCookie(language: Language) {
  document.cookie = `${LANGUAGE_COOKIE}=${language}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`
}

async function detectLanguageFromIp(): Promise<Language> {
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), 4000)

  try {
    const response = await fetch("https://ipapi.co/json/", {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    })

    if (!response.ok) return "es"

    const data = (await response.json()) as { country_code?: string }
    const countryCode = data.country_code?.toUpperCase()

    return countryCode && ENGLISH_SPEAKING_COUNTRIES.has(countryCode)
      ? "en"
      : "es"
  } catch {
    return "es"
  } finally {
    window.clearTimeout(timeoutId)
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const initialCookie = readLanguageCookie()
  const [language, setLanguageState] = useState<Language>(initialCookie ?? "es")
  const userSelected = useRef(false)

  useEffect(() => {
    if (readLanguageCookie()) return

    let active = true

    void detectLanguageFromIp().then((detectedLanguage) => {
      if (!active || userSelected.current || readLanguageCookie()) return
      setLanguageState(detectedLanguage)
      writeLanguageCookie(detectedLanguage)
    })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const copy = translations[language]
    document.documentElement.lang = language
    document.title = copy.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description)
  }, [language])

  function setLanguage(languageToSet: Language) {
    userSelected.current = true
    setLanguageState(languageToSet)
    writeLanguageCookie(languageToSet)
  }

  const copy = translations[language] as Copy

  return (
    <LanguageContext.Provider
      value={{ language, copy, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}

(() => {
  'use strict';
  const pairs = [
    ['About', 'Sobre m\u00ed'], ['Experience', 'Experiencia'], ['Skills', 'Habilidades'], ['Pricing', 'Servicios'], ['Certifications', 'Certificaciones'], ['Projects', 'Proyectos'], ['Testimonials', 'Referencias'], ['Contact', 'Contacto'],
    ['Resume', 'Curr\u00edculum'], ['Introduction', 'Introducci\u00f3n'], ['Soy Mauricio ...', 'I am Mauricio ...'], ['Creo', 'I build'], ['software', 'software'], ['inteligente.', 'intelligent.'],
    ['Full-Stack Developer', 'Desarrollador Full-Stack'], ['Data Analyst', 'Analista de datos'], ['AI & Chatbot Developer', 'Desarrollador de IA y chatbots'], ["Formaciones listadas","Certificates listed"], ["Professional links","Enlaces profesionales"],
    ['Interactive code terminal. Move your pointer to tilt the panel.', 'Terminal de c\u00f3digo interactiva. Mueve el puntero para inclinarla.'],
    ['Mauricio Morales - Systems Engineer', 'Mauricio Morales - Ingeniero de Sistemas'], ["Mi Teleferico: work schedules and Kostick test","Mi Teleférico: horarios y Test Kostick"], ["La Paz city government: AMI, citizen services, and SGEO+","GAM La Paz: AMI, atención y SGEO+"], ["Molina Com: financial and credit risk analysis","Molina Com: análisis y riesgo crediticio"], ['# code. data. intelligent solutions.', '# c\u00f3digo. datos. soluciones inteligentes.'],
    ['Explore technologies', 'Explorar tecnolog\u00edas'], ["Tecnologías de desarrollo","Development technologies"], ['The developer behind the code', 'El desarrollador detr\u00e1s del c\u00f3digo'],
    ["I am Mauricio Gonzalo Morales Fernandez, a Systems Engineer in La Paz, Bolivia. I build Full-Stack solutions with C# .NET, Angular, Flutter, NestJS, and Node.js, covering everything from business logic and APIs to functional interfaces and microservice architectures.","Soy Mauricio Gonzalo Morales Fernandez, Ingeniero de Sistemas en La Paz, Bolivia. Desarrollo soluciones Full-Stack con C# .NET, Angular, Flutter, NestJS y Node.js, desde la lógica de negocio y las APIs hasta interfaces funcionales y arquitecturas de microservicios."],
    ["I combine database management, analytics, and artificial intelligence to solve practical problems. I work with SQL, Python, Excel, and Power BI, and have built scheduling systems, psychological assessment platforms, institutional chatbots, and a financial and credit risk analysis platform.","Combino gestión de bases de datos, análisis e inteligencia artificial para resolver problemas concretos. Trabajo con SQL, Python, Excel y Power BI; he desarrollado sistemas de horarios, evaluaciones psicológicas, chatbots institucionales y una plataforma de análisis financiero y riesgo crediticio."],
    ["Trayectoria según el currículum","Career highlights"], ["organizaciones","organizations"], ['worked with', 'con las que trabaj\u00e9'], ["proyectos","projects"], ['descritos', 'described'], ["año de","year of"], ['experience', 'experiencia'], ["formaciones","certificates"], ['listed', 'listadas'], ['Worked with', 'He trabajado con'], ["Proyecto de grado","Thesis project"], ['Back to the top of my portfolio', 'Volver al inicio de mi portafolio'],
    ['Work experience', 'Experiencia laboral'], ['Building software solutions across enterprise systems, automation, data and intelligent digital services.', 'Desarrollo soluciones de software para sistemas empresariales, automatizaci\u00f3n, datos y servicios digitales inteligentes.'], ['Professional experience', 'Experiencia profesional'],
    ['What I bring to a project', 'Lo que aporto a un proyecto'], ['Combino desarrollo Full-Stack, bases de datos, an\u00e1lisis de datos e inteligencia artificial para crear soluciones completas.', 'I combine Full-Stack development, databases, data analysis, and artificial intelligence to build complete solutions.'], ["Áreas y tecnologías","Areas and technologies"],
    ['Freelance packages', 'Servicios freelance'], ['Practical software, automation, AI and data solutions shaped around your goals. Every project is scoped individually.', 'Soluciones pr\u00e1cticas de software, automatizaci\u00f3n, IA y datos, adaptadas a tus objetivos. Cada proyecto se define individualmente.'], ['Web & Software Development', 'Desarrollo web y de software'], ['Full-Stack development for web applications and business systems.', 'Desarrollo Full-Stack de aplicaciones web y sistemas empresariales.'], ['Enterprise applications', 'Aplicaciones empresariales'], ['REST APIs and integrations', 'APIs REST e integraciones'], ['Administrative dashboards', 'Paneles administrativos'], ['System maintenance and evolution', 'Mantenimiento y evoluci\u00f3n de sistemas'], ['AI & Automation Solutions', 'Soluciones de IA y automatizaci\u00f3n'], ['Practical automation and intelligent services for real workflows.', 'Automatizaci\u00f3n pr\u00e1ctica y servicios inteligentes para procesos reales.'], ['Chatbots and conversational flows', 'Chatbots y flujos conversacionales'], ['Automation and integrations', 'Automatizaci\u00f3n e integraciones'], ['Node.js and REST APIs', 'Node.js y APIs REST'], ['AI and data processing', 'IA y procesamiento de datos'], ['Data & Business Intelligence', 'Datos e inteligencia de negocios'], ['Reliable data foundations and reporting that support decisions.', 'Bases de datos confiables e informes que facilitan la toma de decisiones.'], ['Database design and SQL', 'Dise\u00f1o de bases de datos y SQL'], ['Power BI dashboards', 'Paneles de Power BI'], ['Excel and information processing', 'Excel y procesamiento de informaci\u00f3n'], ['Analysis and reporting', 'An\u00e1lisis e informes'], ['Custom quote', 'Cotizaci\u00f3n personalizada'], ["Let's talk", 'Hablemos'], ['Most requested', 'M\u00e1s solicitado'],
    ['Certifications', 'Certificaciones'], ['Ongoing learning across software, databases, artificial intelligence, business intelligence and data analysis.', 'Formaci\u00f3n continua en software, bases de datos, inteligencia artificial, inteligencia de negocios y an\u00e1lisis de datos.'], ['Filter certifications', 'Filtrar certificaciones'], ['ALL', 'TODAS'], ['OTHER', 'OTROS'], ['July 2025', 'Julio 2025'], ['June 2025', 'Junio 2025'], ['April 2025', 'Abril 2025'], ['March 2025', 'Marzo 2025'], ['February 2025', 'Febrero 2025'], ['50 academic hours', '50 horas acad\u00e9micas'], ['488 hours', '488 horas'], ['350 hours', '350 horas'], ['40 hours', '40 horas'], ['25 hours', '25 horas'], ['180 hours total', '180 horas en total'],
    ['AI for customer service on websites and in call centers', 'Desarrollo de I.A. para la atenci\u00f3n al cliente en p\u00e1ginas web y call center', 'Desarrollo de I.A. para la atenci\u00c3\u00b3n al cliente en p\u00c3\u00a1ginas web y call center'], ['Credit Risk Management', 'Gesti\u00f3n de Riesgos Crediticios', 'Gesti\u00c3\u00b3n de Riesgos Crediticios'], ['Database Management, Business Intelligence, and AI', 'Gesti\u00f3n de Base de Datos, Inteligencia de Negocios e IA', 'Gesti\u00c3\u00b3n de Base de Datos, Inteligencia de Negocios e IA'], ['Predictive Analytics with Python and Machine Learning', 'An\u00e1lisis Predictivo con Python y Machine Learning', 'An\u00c3\u00a1lisis Predictivo con Python y Machine Learning'], ['Database Management for Business Intelligence with MongoDB', 'Gesti\u00f3n de Base de Datos para Inteligencia de Negocios con MongoDB', 'Gesti\u00c3\u00b3n de Base de Datos para Inteligencia de Negocios con MongoDB'], ['Data Exploration and Visualization with Power BI', 'Exploraci\u00f3n y Visualizaci\u00f3n de Datos con Power BI', 'Exploraci\u00c3\u00b3n y Visualizaci\u00c3\u00b3n de Datos con Power BI'], ['Excel y Google Sheet Aplicado a Inteligencia de Negocios y Decisiones', 'Excel and Google Sheets for Business Intelligence and Decision Making'], ['Fundamentos de Inteligencia de Negocios y Big Data', 'Business Intelligence and Big Data Fundamentals'], ['Expert Training', 'Formaci\u00f3n de Expertos', 'Formaci\u00c3\u00b3n de Expertos'], ['Credit Risk Management', 'Gesti\u00f3n de Riesgos Crediticios'],
    ['Featured projects', 'Proyectos destacados'], ['Collection of software, automation, enterprise systems and intelligent solutions I have designed and developed.', 'Selecci\u00f3n de soluciones de software, automatizaci\u00f3n, sistemas empresariales e inteligencia que he dise\u00f1ado y desarrollado.'], ['Filter projects', 'Filtrar proyectos'], ['FULL-STACK', 'FULL-STACK'], ['AI & CHATBOTS', 'IA Y CHATBOTS'], ['ENTERPRISE SYSTEMS', 'SISTEMAS EMPRESARIALES'], ['DATA & ML', 'DATOS Y ML'], ['AUTOMATION', 'AUTOMATIZACI\u00d3N'], ['Details \u2192', 'Detalles \u2192'], ['Details', 'Detalles'],
    ['Financial Risk & Credit Analysis Platform', 'Plataforma de an\u00e1lisis financiero y riesgo crediticio'], ['A web platform for financial analysis and credit risk evaluation, digitizing processes previously handled in Excel and automating strategic reports.', 'Plataforma web de an\u00e1lisis financiero y evaluaci\u00f3n de riesgo crediticio que digitaliza procesos antes realizados en Excel y automatiza informes estrat\u00e9gicos.'], ['Financial analysis and credit risk evaluation', 'An\u00e1lisis financiero y evaluaci\u00f3n del riesgo crediticio'], ['Authentication, user management and audit trails', 'Autenticaci\u00f3n, gesti\u00f3n de usuarios y auditor\u00eda'], ['Dashboards and PDF / Excel exports', 'Paneles y exportaciones a PDF / Excel'], ['Machine learning models for solvency estimation and risk classification', 'Modelos de machine learning para estimar solvencia y clasificar riesgos'],
    ['Work Schedule Management System', 'Sistema de gesti\u00f3n de horarios laborales'], ['An internal system for work schedule planning, shift coordination and administrative automation.', 'Sistema interno para planificar horarios, coordinar turnos y automatizar tareas administrativas.'], ['Dynamic day and shift selection', 'Selecci\u00f3n din\u00e1mica de d\u00edas y turnos'], ['Geolocation and automatic branch assignment', 'Geolocalizaci\u00f3n y asignaci\u00f3n autom\u00e1tica de sucursales'], ['Roles, permissions and CRUD workflows', 'Roles, permisos y flujos CRUD'], ['Logs, auditing and traceability', 'Registros, auditor\u00eda y trazabilidad'],
    ['Kostick Psychological Evaluation Platform', 'Plataforma de evaluaci\u00f3n psicol\u00f3gica Kostick'], ['A digital platform for psychological evaluation based on the Kostick test.', 'Plataforma digital de evaluaci\u00f3n psicol\u00f3gica basada en el test Kostick.'], ['Questionnaires, responses, results and history', 'Cuestionarios, respuestas, resultados e historial'], ['Access management and test business logic', 'Gesti\u00f3n de accesos y l\u00f3gica del test'], ['Dashboards and dynamic charts', 'Paneles y gr\u00e1ficos din\u00e1micos'], ['Excel and PDF reports', 'Informes en Excel y PDF'],
    ['AMI \u2014 Intelligent Municipal Agent', 'AMI \u2014 Agente Municipal Inteligente', 'AMI \u00e2\u20ac\u201d Agente Municipal Inteligente'], ['An institutional chatbot that automates citizen support through WhatsApp.', 'Chatbot institucional que automatiza la atenci\u00f3n ciudadana por WhatsApp.'], ['Frequently asked questions', 'Preguntas frecuentes'], ['Assisted navigation of municipal services', 'Navegaci\u00f3n asistida de servicios municipales'], ['Intelligent request routing', 'Derivaci\u00f3n inteligente de solicitudes'], ['Automated citizen support', 'Atenci\u00f3n ciudadana automatizada'], ['Centralized Citizen Service Platform', 'Plataforma centralizada de atenci\u00f3n ciudadana'], ['A centralized citizen service system intended for the six municipal secretariats.', 'Sistema centralizado de atenci\u00f3n ciudadana para las seis secretar\u00edas municipales.'], ['Service queues and automatic assignment', 'Colas de atenci\u00f3n y asignaci\u00f3n autom\u00e1tica'], ['Citizen requests', 'Solicitudes ciudadanas'], ['Escalation to human agents', 'Derivaci\u00f3n a agentes humanos'], ['Chatbot integration', 'Integraci\u00f3n con chatbot'], ['SGEO+ \u2014 Public Works Management System', 'SGEO+ \u2014 Sistema de gesti\u00f3n de obras p\u00fablicas'], ['Contributed to a public works management system comprising approximately 15 functional modules.', 'Contribu\u00ed a un sistema de gesti\u00f3n de obras p\u00fablicas con aproximadamente 15 m\u00f3dulos funcionales.'], ['Requirements analysis and database design', 'An\u00e1lisis de requerimientos y dise\u00f1o de bases de datos'], ['Backend and frontend development', 'Desarrollo Backend y Frontend'], ['Project tracking and progress control', 'Seguimiento y control de avances'], ['Document management and administrative reports', 'Gesti\u00f3n documental e informes administrativos'],
    ['Trusted by people', 'La confianza de quienes'], ["I've worked with.", 'han trabajado conmigo.'], ['Professional references are available in my r\u00e9sum\u00e9.', 'Puedes solicitar mis referencias profesionales en mi curr\u00edculum.'], ['Professional references', 'Referencias profesionales'], ['Previous references', 'Referencias anteriores'], ['Next references', 'Referencias siguientes'], ['Professional reference listed in my r\u00e9sum\u00e9.', 'Referencia profesional disponible en mi curr\u00edculum.'], ['Analista de Tecnolog\u00eda', 'Technology Analyst'], ['Responsable de desarrollo de sistemas de informaci\u00f3n', 'Information Systems Development Lead'], ['Gerente administrativo financiero', 'Administrative and Finance Manager'],
    ['Let\u2019s build something', 'Construyamos algo'], ['Have a project in mind, or just want to talk about AI and software? My inbox is open.', '\u00bfTienes un proyecto en mente o quieres conversar sobre IA y software? Escr\u00edbeme.'], ['Contact details', 'Datos de contacto'], ['Phone', 'Tel\u00e9fono'], ['Location', 'Ubicaci\u00f3n'], ['Start a conversation', 'Iniciemos una conversaci\u00f3n'], ['Name', 'Nombre'], ['Email', 'Correo'], ['Message', 'Mensaje'], ['Send message', 'Enviar mensaje'], ['Your email app will open with the message ready to send.', 'Se abrir\u00e1 tu aplicaci\u00f3n de correo con el mensaje listo para enviar.'], ['Your email app should open with the message ready to send. Sending remains under your control.', 'Se abrir\u00e1 tu aplicaci\u00f3n de correo con el mensaje listo para enviar.'], ['Please enter your name.', 'Escribe tu nombre.'], ['Enter a valid email address.', 'Escribe un correo electr\u00f3nico v\u00e1lido.'], ['Please enter a message.', 'Escribe tu mensaje.'], ['Please correct the highlighted fields.', 'Corrige los campos marcados.'], ['LinkedIn \u2197', 'LinkedIn \u2197'],
    ['Have a project in mind?', '\u00bfTienes un proyecto en mente?'], ['Got an idea worth shipping?', '\u00bfTienes una idea lista para hacerse realidad?'], ['Let\u2019s build it together.', 'Construy\u00e1mosla juntos.'], ["I'm open to interesting freelance collaborations, software projects and opportunities.", 'Estoy disponible para colaboraciones freelance, proyectos de software y nuevas oportunidades.'], ['Say hello', 'Escr\u00edbeme'], ['Request my r\u00e9sum\u00e9', 'Solicita mi curr\u00edculum'], ['Back to top', 'Volver arriba'], ['Footer', 'Pie de p\u00e1gina'], ['Portfolio', 'Portafolio'], ['scroll', 'Desliza'], ['GitHub: enlace pendiente', 'GitHub link pending'], ['GitHub de Mauricio Morales', 'Mauricio Morales on GitHub'], ['LinkedIn de Mauricio Morales', 'Mauricio Morales on LinkedIn'], ['Enviar correo a Mauricio Morales', 'Email Mauricio Morales'], ['Mi portafolio', 'My portfolio'], ['Volver al inicio', 'Back to top'], ['Certificate image viewer', 'Visor de certificados'], ['Highlights', 'Aspectos destacados'], ['Technologies', 'Tecnolog\u00edas'], ['Close certificate', 'Cerrar certificado'], ['Close project details', 'Cerrar detalles del proyecto'], ['Previous', 'Anterior'], ['Next', 'Siguiente'], ['No project screenshot is available in the current portfolio assets.', 'No hay una captura del proyecto entre los archivos actuales del portafolio.'], ['Preview unavailable.', 'Vista previa no disponible.'], ['October 2025', 'Octubre 2025'], ['Switch to English', 'Cambiar a ingl\u00e9s'], ['Switch to Spanish', 'Cambiar a espa\u00f1ol'], ['English', 'Ingl\u00e9s'], ['Espa\u00f1ol', 'Spanish']
  ];
  const maps = { en: new Map(), es: new Map() };
  pairs.push(
    ['Software / HR internship', 'Práctica de software y Recursos Humanos', 'Internship Â· Software / HR'],
    ['Software and chatbot internship', 'Práctica de software y chatbots', 'Internship Â· Software & Chatbots'],
    ['IT professional experience', 'Experiencia profesional en TI', 'Professional experience Â· IT'],
    ['Software Developer / Human Resources', 'Desarrollador de Software / Recursos Humanos'],
    ['Software and Chatbot Developer', 'Desarrollador de Software y Chatbots'],
    ['IT Systems Technician', 'Técnico en Sistemas Informáticos', 'TÃ©cnico en Sistemas InformÃ¡ticos'],
    ['September 2025 – March 2026', 'septiembre 2025 – marzo 2026', 'septiembre 2025 â€“ marzo 2026'],
    ['August 2025 – March 2026', 'agosto 2025 – marzo 2026', 'agosto 2025 â€“ marzo 2026'],
    ['January 2025 – February 2026', 'enero 2025 – febrero 2026', 'enero 2025 â€“ febrero 2026'],
    ['I designed and developed internal Human Resources solutions, administrative automation, and digital assessment tools using C# and .NET.', 'Diseño y desarrollo soluciones internas para Recursos Humanos, automatización administrativa y evaluaciones digitales con C# y .NET.', 'DiseÃ±o y desarrollo de soluciones internas para Recursos Humanos, automatizaciÃ³n administrativa y digitalizaciÃ³n de evaluaciones con C# y .NET.'],
    ['Work schedule system', 'Sistema de horarios'],
    ['Shift planning with day selection, geolocation-based branch assignment, and Google Maps API integration. Includes roles, permissions, admin and staff profiles, CRUD operations, logs, auditing, and traceability.', 'Gestión y planificación de turnos con selección de días, asignación de sucursal por geolocalización e integración con Google Maps API. Incluye roles, permisos, perfiles de administrador y personal, operaciones CRUD, registros, auditoría y trazabilidad.', 'GestiÃ³n y planificaciÃ³n de turnos con selecciÃ³n de dÃ­as, asignaciÃ³n de sucursal por geolocalizaciÃ³n e integraciÃ³n con Google Maps API. Incluye roles y permisos, perfiles de administrador y personal, operaciones CRUD, logs, auditorÃ­a y trazabilidad.'],
    ['Kostick test', 'Test de Kostick'],
    ['Web-based psychological assessment platform. Worked with specialists to analyze the method, business rules, and requirements. Includes users, questionnaires, responses, results, history, access controls, dashboards, charts, and Excel and PDF exports.', 'Plataforma web de evaluación psicológica. Analicé el método, las reglas de negocio y los requerimientos con especialistas. Incluye usuarios, cuestionarios, respuestas, resultados, historial, accesos, paneles, gráficos y exportación a Excel y PDF.', 'Plataforma web de evaluaciÃ³n psicolÃ³gica: anÃ¡lisis del mÃ©todo, reglas de negocio y requerimientos con especialistas. Incluye usuarios, cuestionarios, respuestas, resultados, historial, accesos, dashboards, grÃ¡ficos y exportaciÃ³n a Excel y PDF.'],
    ['I developed digital services for citizens, automation, institutional chatbots, and municipal management systems.', 'Desarrollé soluciones digitales para la atención ciudadana, automatización, chatbots institucionales y sistemas de gestión municipal.', 'Desarrollo de soluciones digitales para atenciÃ³n ciudadana, automatizaciÃ³n, chatbots institucionales y sistemas de gestiÃ³n municipal.'],
    ['AMI – Intelligent Municipal Agent', 'AMI – Agente Municipal Inteligente', 'AMI Â· Agente Municipal Inteligente'],
    ['I helped design and implement an institutional WhatsApp chatbot for FAQs, guided navigation of municipal services, and request routing.', 'Participé en el diseño e implementación de un chatbot institucional para WhatsApp, consultas frecuentes, navegación asistida de servicios municipales y derivación de solicitudes.', 'ParticipÃ© en el diseÃ±o e implementaciÃ³n del chatbot institucional para atenciÃ³n por WhatsApp, consultas frecuentes, navegaciÃ³n asistida de servicios municipales y derivaciÃ³n de solicitudes.'],
    ['Centralized citizen services', 'Atención ciudadana centralizada', 'AtenciÃ³n ciudadana centralizada'],
    ['I developed features for six municipal secretariats, including service queues, automatic assignment, and chatbot escalation to human agents.', 'Desarrollé funcionalidades para seis Secretarías Municipales, con colas de atención, asignación automática y escalamiento a agentes humanos mediante chatbot.', 'DesarrollÃ© funcionalidades para las seis SecretarÃ­as Municipales, con colas de atenciÃ³n, asignaciÃ³n automÃ¡tica y escalamiento a agentes humanos mediante chatbot.'],
    ['I contributed to a public works management system with about 15 modules, covering requirements analysis, database design, backend and frontend development, progress tracking, document management, and reporting.', 'Participé en un sistema de gestión de obras públicas con unos 15 módulos. Realicé análisis de requerimientos, diseño de bases de datos, desarrollo Backend y Frontend, seguimiento, control de avances, gestión documental e informes.', 'ParticipÃ© en el sistema de gestiÃ³n de obras pÃºblicas, compuesto por aproximadamente 15 mÃ³dulos. RealicÃ© anÃ¡lisis de requerimientos, diseÃ±o de base de datos, desarrollo Backend y Frontend, seguimiento, control de avances, gestiÃ³n documental y reportes.'],
    ['Provided technical support, built web solutions, and analyzed information to support technology and business operations.', 'Brindé soporte técnico, desarrollé soluciones web y analicé información para apoyar las operaciones tecnológicas y comerciales.', 'Soporte tÃ©cnico, desarrollo de soluciones web y anÃ¡lisis de informaciÃ³n para apoyar las operaciones tecnolÃ³gicas y comerciales.'],
    ['Responsibilities', 'Responsabilidades'],
    ['Built web solutions to requirements; supported users; maintained equipment and printers; analyzed monthly sales and business activity to support decisions.', 'Desarrollé soluciones web según requerimientos, brindé soporte a usuarios y mantenimiento de equipos e impresoras; analicé ventas e información comercial para apoyar decisiones.', 'ProgramaciÃ³n y soluciones web segÃºn requerimientos; soporte a usuarios, mantenimiento preventivo y correctivo de equipos e impresoras; anÃ¡lisis mensual de ventas, procesamiento de informaciÃ³n, seguimiento comercial y apoyo a la toma de decisiones.'],
    ['Full-Stack and Backend', 'Full-Stack y Backend'], ['Frontend and Mobile', 'Frontend y móviles'], ['Data and Databases', 'Datos y bases de datos'], ['AI, Data Science and Cloud', 'IA, ciencia de datos y Cloud'],
    ['Enterprise applications, business logic, backend services, APIs, and scalable solutions.', 'Aplicaciones empresariales, lógica de negocio, servicios Backend, APIs y soluciones escalables.', 'Aplicaciones empresariales, lÃ³gica de negocio, servicios Backend, APIs y soluciones escalables.'],
    ['Web interfaces, responsive applications, and cross-platform experiences.', 'Interfaces web, aplicaciones responsive y experiencias multiplataforma.'],
    ['Database modeling and administration, queries, analytics, reporting, and visualization.', 'Modelado y administración de bases de datos, consultas, análisis, informes y visualización.', 'Modelado y administraciÃ³n de bases de datos, consultas, anÃ¡lisis, reporting y visualizaciÃ³n.'],
    ['Artificial intelligence, predictive analytics, data processing, chatbots, and cloud and DevOps infrastructure.', 'Inteligencia artificial, análisis predictivo, procesamiento de datos, chatbots e infraestructura Cloud/DevOps.', 'Inteligencia artificial, anÃ¡lisis predictivo, procesamiento de datos, chatbots e infraestructura Cloud/DevOps.'],
    ['Proficiency: 100%', 'Dominio: 100%'], ['AI for customer service on websites and in call centers', 'Desarrollo de I.A. para la atención al cliente en páginas web y call center'],
    ['I am Mauricio ...', 'Soy Mauricio ...'], ['I build', 'Creo'], ['intelligent.', 'inteligente.']
  );
  for (const [english, spanish, legacy] of pairs) {
    maps.en.set(spanish, english);
    maps.es.set(english, spanish);
    if (legacy) { maps.en.set(legacy, english); maps.es.set(legacy, spanish); }
  }
  function registerEnglishSpanish(english, spanish, legacy) {
    maps.en.delete(english);
    maps.es.delete(spanish);
    maps.en.set(spanish, english);
    maps.es.set(english, spanish);
    if (legacy) { maps.en.set(legacy, english); maps.es.set(legacy, spanish); }
  }
  [
    ['Systems Engineer in La Paz, Bolivia. I build Full-Stack solutions, microservice architectures, and AI-powered applications. I turn data into decisions and build software from backend to interface.', 'Ingeniero de Sistemas en La Paz, Bolivia. Desarrollo soluciones Full-Stack, arquitecturas de microservicios y aplicaciones con inteligencia artificial. Transformo datos en decisiones y construyo software desde el backend hasta la interfaz.'],
    ['Resume highlights', 'Cifras del currículum'], ['Year of experience', 'Año de experiencia'], ['Projects delivered', 'Proyectos descritos'], ['Certificates listed', 'Formaciones listadas'], ['Professional links', 'Enlaces profesionales'],
    ['Mi Teleferico: work schedules and Kostick test', 'Mi Teleférico: horarios y Test Kostick'], ['La Paz city government: AMI, citizen services, and SGEO+', 'GAM La Paz: AMI, atención y SGEO+'], ['Molina Com: financial and credit risk analysis', 'Molina Com: análisis y riesgo crediticio'],
    ['I am Mauricio Gonzalo Morales Fernandez, a Systems Engineer in La Paz, Bolivia. I build Full-Stack solutions with C# .NET, Angular, Flutter, NestJS, and Node.js, covering everything from business logic and APIs to functional interfaces and microservice architectures.', 'Soy Mauricio Gonzalo Morales Fernandez, Ingeniero de Sistemas en La Paz, Bolivia. Desarrollo soluciones Full-Stack con C# .NET, Angular, Flutter, NestJS y Node.js, desde la lógica de negocio y las APIs hasta interfaces funcionales y arquitecturas de microservicios.'],
    ['I combine database management, analytics, and artificial intelligence to solve practical problems. I work with SQL, Python, Excel, and Power BI, and have built scheduling systems, psychological assessment platforms, institutional chatbots, and a financial and credit risk analysis platform.', 'Combino gestión de bases de datos, análisis e inteligencia artificial para resolver problemas concretos. Trabajo con SQL, Python, Excel y Power BI; he desarrollado sistemas de horarios, evaluaciones psicológicas, chatbots institucionales y una plataforma de análisis financiero y riesgo crediticio.'],
    ['Career highlights', 'Trayectoria según el currículum'], ['organizations', 'organizaciones'], ['projects', 'proyectos'], ['described', 'descritos'], ['year of', 'año de'], ['experience', 'experiencia'], ['certificates', 'formaciones'], ['listed', 'listadas'], ['Thesis project', 'Proyecto de grado'],
    ['Development technologies', 'Tecnologías de desarrollo'], ['Areas and technologies', 'Áreas y tecnologías'],
    ['I combine Full-Stack development, databases, data analysis, and artificial intelligence to build complete solutions.', 'Combino desarrollo Full-Stack, bases de datos, análisis de datos e inteligencia artificial para crear soluciones completas.'],
    ['Technology Analyst', 'Analista de Tecnología'], ['Information Systems Development Lead', 'Responsable de desarrollo de sistemas de información'], ['Administrative and Finance Manager', 'Gerente administrativo financiero'],
    ['Excel and Google Sheets for Business Intelligence and Decision Making', 'Excel y Google Sheet Aplicado a Inteligencia de Negocios y Decisiones'], ['Business Intelligence and Big Data Fundamentals', 'Fundamentos de Inteligencia de Negocios y Big Data'],
    ['I build', 'Creo'], ['intelligent.', 'inteligente.'],
    ['About me', 'Sobre m\u00ed', 'Sobre m\u00c3\u00ad'],
    ['The developer behind the code', 'El desarrollador detr\u00e1s del c\u00f3digo', 'El desarrollador detr\u00c3\u00a1s del c\u00c3\u00b3digo'],
    ['Year of experience', 'A\u00f1o de experiencia', 'A\u00c3\u00b1o de experiencia'],
    ['I am Mauricio Gonzalo Morales Fernandez, a Systems Engineer in La Paz, Bolivia. I build Full-Stack solutions with C# .NET, Angular, Flutter, NestJS, and Node.js, covering everything from business logic and APIs to functional interfaces and microservice architectures.', 'Soy Mauricio Gonzalo Morales Fernandez, Ingeniero de Sistemas en La Paz, Bolivia. Desarrollo soluciones Full-Stack con C# .NET, Angular, Flutter, NestJS y Node.js, desde la l\u00f3gica de negocio y las APIs hasta interfaces funcionales y arquitecturas de microservicios.', 'Soy Mauricio Gonzalo Morales Fernandez, Ingeniero de Sistemas en La Paz, Bolivia. Desarrollo soluciones Full-Stack con C# .NET, Angular, Flutter, NestJS y Node.js, desde la l\u00c3\u00b3gica de negocio y las APIs hasta interfaces funcionales y arquitecturas de microservicios.'],
    ['I combine database management, analytics, and artificial intelligence to solve practical problems. I work with SQL, Python, Excel, and Power BI, and have built scheduling systems, psychological assessment platforms, institutional chatbots, and a financial and credit risk analysis platform.', 'Combino gesti\u00f3n de bases de datos, an\u00e1lisis e inteligencia artificial para resolver problemas concretos. Trabajo con SQL, Python, Excel y Power BI; he desarrollado sistemas de horarios, evaluaciones psicol\u00f3gicas, chatbots institucionales y una plataforma de an\u00e1lisis financiero y riesgo crediticio.', 'Combino gesti\u00c3\u00b3n de bases de datos, an\u00c3\u00a1lisis e inteligencia artificial para resolver problemas concretos. Trabajo con SQL, Python, Excel y Power BI; he desarrollado sistemas de horarios, evaluaciones psicol\u00c3\u00b3gicas, chatbots institucionales y una plataforma de an\u00c3\u00a1lisis financiero y riesgo crediticio.'],
    ['Technology Analyst', 'Analista de Tecnolog\u00eda', 'Analista de Tecnolog\u00c3\u00ada'],
    ['Information Systems Development Lead', 'Responsable de desarrollo de sistemas de informaci\u00f3n', 'Responsable de desarrollo de sistemas de informaci\u00c3\u00b3n'],
    ['Mi Telef\u00e9rico', 'Mi Telef\u00e9rico', 'Mi Telef\u00c3\u00a9rico'],
    ['Gobierno Aut\u00f3nomo Municipal de La Paz', 'Gobierno Aut\u00f3nomo Municipal de La Paz', 'Gobierno Aut\u00c3\u00b3nomo Municipal de La Paz'],
    ['Hugo Navia C\u00e1ceres', 'Hugo Navia C\u00e1ceres', 'Hugo Navia C\u00c3\u00a1ceres'],
    ['Career highlights', 'Trayectoria seg\u00fan el curr\u00edculum', 'Trayectoria seg\u00fan el curr\u00edculum'],
    ['Resume highlights', 'Cifras del curr\u00edculum', 'Cifras del curr\u00c3\u00adculum'],
    ['Explore technologies', 'Explorar tecnolog\u00edas', 'Explorar tecnolog\u00c3\u00adas'],
    ['Development technologies', 'Tecnolog\u00edas de desarrollo', 'Tecnolog\u00c3\u00adas de desarrollo'],
    ['Areas and technologies', '\u00c1reas y tecnolog\u00edas', '\u00c3\u0081reas y tecnolog\u00c3\u00adas'],
    ['I combine Full-Stack development, databases, data analysis, and artificial intelligence to build complete solutions.', 'Combino desarrollo Full-Stack, bases de datos, an\u00e1lisis de datos e inteligencia artificial para crear soluciones completas.', 'Combino desarrollo Full-Stack, bases de datos, an\u00c3\u00a1lisis de datos e inteligencia artificial para crear soluciones completas.'],
    ['Proficiency', 'Dominio'], ['booting mauricio.portfolio', 'iniciando mauricio.portfolio'], ['year of', 'a\u00f1o de', 'a\u00c3\u00b1o de'],
    ['Mauricio Morales, home', 'Mauricio Morales, inicio'], ['LinkedIn ?', 'LinkedIn ?', 'LinkedIn \u00e2\u2020\u2014'],
    ['I am Mauricio ...', 'Soy Mauricio ...'], ['I build', 'Creo'], ['intelligent.', 'inteligente.']
  ].forEach(([english, spanish, legacy]) => registerEnglishSpanish(english, spanish, legacy));
  let stored = 'es';
  try { stored = localStorage.getItem('portfolio-language') || 'es'; } catch (_) {}
  let language = stored === 'en' ? 'en' : 'es';
  document.documentElement.lang = language;
  function updateMetadata() {
    document.title = language === 'es' ? 'Mauricio Morales \u00b7 Ingenier\u00eda de Sistemas' : 'Mauricio Morales \u00b7 Systems Engineering';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'es'
      ? 'Mauricio Gonzalo Morales Fernandez. Ingenier\u00eda de Sistemas, desarrollo Full-Stack, an\u00e1lisis de datos e inteligencia artificial. La Paz, Bolivia.'
      : 'Mauricio Gonzalo Morales Fernandez. Systems Engineering, Full-Stack development, data analysis, and artificial intelligence. La Paz, Bolivia.';
  }
  updateMetadata();
  function translateNode(node) {
    const current = node.nodeValue;
    const leading = current.match(/^\s*/)[0];
    const trailing = current.match(/\s*$/)[0];
    const core = current.slice(leading.length, current.length - trailing.length);
    const translation = maps[language].get(core);
    if (translation && translation !== core) node.nodeValue = leading + translation + trailing;
  }
  function translateAttribute(value) {
    if (maps[language].has(value)) return maps[language].get(value);
    const prefixes = language === 'es'
      ? [['View certificate: ', 'Ver certificado: '], ['Certificate preview: ', 'Vista previa del certificado: '], ['Preview unavailable. ', 'Vista previa no disponible. ']]
      : [['Ver certificado: ', 'View certificate: '], ['Vista previa del certificado: ', 'Certificate preview: '], ['Vista previa no disponible. ', 'Preview unavailable. ']];
    for (const [from, to] of prefixes) {
      if (value.startsWith(from)) {
        const tail = value.slice(from.length);
        const direct = maps[language].get(tail) || tail;
        return to + direct;
      }
    }
    const count = value.match(/^(\d+) (certifications|projects)$/i);
    if (count) return language === 'es' ? `${count[1]} ${count[2].toLowerCase() === 'projects' ? 'proyectos' : 'certificaciones'}` : `${count[1]} ${count[2].toLowerCase()}`;
    return value;
  }
  function translateTree(root) {
    if (root.nodeType === Node.TEXT_NODE) { translateNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) translateNode(textNode);
    if (root.querySelectorAll) {
      root.querySelectorAll('[aria-label], [title], [placeholder], [alt]').forEach(element => {
        for (const attr of ['aria-label', 'title', 'placeholder', 'alt']) {
          const value = element.getAttribute(attr);
          if (value) { const translated = translateAttribute(value); if (translated !== value) element.setAttribute(attr, translated); }
        }
      });
    }
  }
  translateTree(document);
  const toggle = document.getElementById('language-toggle');
  if (toggle) {
    toggle.textContent = language === 'es' ? 'EN' : 'ES';
    function updateToggle() {
      toggle.textContent = language === 'es' ? 'EN' : 'ES';
      toggle.setAttribute('aria-label', language === 'es' ? 'Cambiar a ingl\u00e9s' : 'Switch to Spanish');
      toggle.title = language === 'es' ? 'Cambiar a ingl\u00e9s' : 'Switch to Spanish';
    }
    updateToggle();
    toggle.addEventListener('click', () => {
      language = language === 'es' ? 'en' : 'es';
      try { localStorage.setItem('portfolio-language', language); } catch (_) {}
      document.documentElement.lang = language;
      window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: language }));
      updateMetadata();
      translateTree(document);
      updateToggle();
    });
  }
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') translateNode(record.target);
      record.addedNodes.forEach(node => translateTree(node));
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  window.PORTFOLIO_I18N = { language, translate: value => maps[language].get(value) || value };
})();

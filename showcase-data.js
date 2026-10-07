(() => {
  'use strict';
  window.PORTFOLIO_SHOWCASE = Object.freeze({
    pricing: [
      { title: 'Web & Software Development', description: 'Full-Stack development for web applications and business systems.', features: ['Enterprise applications', 'REST APIs and integrations', 'Administrative dashboards', 'System maintenance and evolution'] },
      { title: 'AI & Automation Solutions', description: 'Practical automation and intelligent services for real workflows.', features: ['Chatbots and conversational flows', 'Automation and integrations', 'Node.js and REST APIs', 'AI and data processing'], featured: true },
      { title: 'Data & Business Intelligence', description: 'Reliable data foundations and reporting that support decisions.', features: ['Database design and SQL', 'Power BI dashboards', 'Excel and information processing', 'Analysis and reporting'] }
    ],
    certifications: [
      { id: 'ai-customer-service', title: 'Desarrollo de I.A. para la atención al cliente en páginas web y call center', issuer: 'Colegio de Ingenieros de Sistemas', date: 'October 2025', sortDate: '2025-10', hours: '50 academic hours', categories: ['OTHER'], shortIssuer: 'CIS' },
      { id: 'credit-risk', title: 'Gestión de Riesgos Crediticios', issuer: 'GEM and Microsoft / Florida Global University', date: 'July 2025', sortDate: '2025-07', hours: '488 hours', categories: ['MICROSOFT', 'OTHER'], shortIssuer: 'GEM · Microsoft' },
      { id: 'database-bi-ai', title: 'Gestión de Base de Datos, Inteligencia de Negocios e IA', issuer: 'CIIP LATAM', date: 'July 2025', sortDate: '2025-07', hours: '350 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'predictive-python', title: 'Análisis Predictivo con Python y Machine Learning', issuer: 'CIIP LATAM', date: 'July 2025', sortDate: '2025-07', hours: '40 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'mongodb-bi', title: 'Gestión de Base de Datos para Inteligencia de Negocios con MongoDB', issuer: 'CIIP LATAM', date: 'June 2025', sortDate: '2025-06', hours: '40 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'power-bi', title: 'Exploración y Visualización de Datos con Power BI', issuer: 'CIIP LATAM', date: 'June 2025', sortDate: '2025-06', hours: '40 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'huawei-data', title: 'Data Management and Analysis', issuer: 'Huawei', date: 'June 2025', sortDate: '2025-06', hours: '40 hours', categories: ['HUAWEI'], shortIssuer: 'HUAWEI' },
      { id: 'huawei-ai', title: 'Artificial Intelligence HCIA', issuer: 'Huawei', date: 'June 2025', sortDate: '2025-06', hours: '40 hours', categories: ['HUAWEI'], shortIssuer: 'HUAWEI' },
      { id: 'excel-sheets-bi', title: 'Excel y Google Sheet Aplicado a Inteligencia de Negocios y Decisiones', issuer: 'CIIP LATAM', date: 'April 2025', sortDate: '2025-04', hours: '40 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'bi-big-data', title: 'Fundamentos de Inteligencia de Negocios y Big Data', issuer: 'CIIP LATAM', date: 'March 2025', sortDate: '2025-03', hours: '40 hours', categories: ['CIIP LATAM'], shortIssuer: 'CIIP LATAM' },
      { id: 'sql-mysql', title: 'Experto en Base de Datos SQL & MySQL', issuer: 'Formación de Expertos', date: 'February 2025', sortDate: '2025-02', hours: '25 hours', categories: ['OTHER'], shortIssuer: 'Formación de Expertos' },
      { id: 'oracle-database', title: 'Experto en Oracle Database', issuer: 'Oracle Academy', date: 'February 2025', sortDate: '2025-02', hours: '180 hours total', programs: ['Database Foundations', 'Database Design', 'Database Programming'], categories: ['ORACLE'], shortIssuer: 'ORACLE ACADEMY' }
    ],
    projects: [
      { id: 'financial-risk', title: 'Financial Risk & Credit Analysis Platform', organization: 'Molina Com', description: 'A web platform for financial analysis and credit risk evaluation, digitizing processes previously handled in Excel and automating strategic reports.', features: ['Financial analysis and credit risk evaluation', 'Authentication, user management and audit trails', 'Dashboards and PDF / Excel exports', 'Machine learning models for solvency estimation and risk classification'], technologies: ['Laravel 11', 'Vue 3', 'Inertia.js', 'MySQL', 'Machine Learning'], categories: ['FULL-STACK', 'DATA & ML'] },
      { id: 'work-schedules', title: 'Work Schedule Management System', organization: 'Mi Teleférico', description: 'An internal system for work schedule planning, shift coordination and administrative automation.', features: ['Dynamic day and shift selection', 'Geolocation and automatic branch assignment', 'Roles, permissions and CRUD workflows', 'Logs, auditing and traceability'], technologies: ['C#', '.NET', 'Google Maps API'], categories: ['FULL-STACK', 'ENTERPRISE SYSTEMS'] },
      { id: 'kostick', title: 'Kostick Psychological Evaluation Platform', organization: 'Mi Teleférico', description: 'A digital platform for psychological evaluation based on the Kostick test.', features: ['Questionnaires, responses, results and history', 'Access management and test business logic', 'Dashboards and dynamic charts', 'Excel and PDF reports'], technologies: ['.NET', 'Dashboards', 'Excel', 'PDF'], categories: ['FULL-STACK', 'ENTERPRISE SYSTEMS'] },
      { id: 'ami', title: 'AMI — Agente Municipal Inteligente', organization: 'Gobierno Autónomo Municipal de La Paz', description: 'An institutional chatbot that automates citizen support through WhatsApp.', features: ['Frequently asked questions', 'Assisted navigation of municipal services', 'Intelligent request routing', 'Automated citizen support'], technologies: ['Node.js', 'Laravel', 'REST API', 'WhatsApp', 'Chatbots'], categories: ['AI & CHATBOTS', 'AUTOMATION'] },
      { id: 'citizen-service', title: 'Centralized Citizen Service Platform', organization: 'Gobierno Autónomo Municipal de La Paz', description: 'A centralized citizen service system intended for the six municipal secretariats.', features: ['Service queues and automatic assignment', 'Citizen requests', 'Escalation to human agents', 'Chatbot integration'], technologies: [], categories: ['ENTERPRISE SYSTEMS', 'AUTOMATION'] },
      { id: 'sgeo', title: 'SGEO+ — Public Works Management System', organization: 'Gobierno Autónomo Municipal de La Paz', description: 'Contributed to a public works management system comprising approximately 15 functional modules.', features: ['Requirements analysis and database design', 'Backend and frontend development', 'Project tracking and progress control', 'Document management and administrative reports'], technologies: [], categories: ['FULL-STACK', 'ENTERPRISE SYSTEMS'] }
    ],
    references: [
      { name: 'Lic. Hugo Navia Cáceres', role: 'Analista de Tecnología', organization: 'BNB Valores' },
      { name: 'Ing. Ángel Bruno Laura Calliconde', role: 'Responsable de desarrollo de sistemas de información', organization: 'Gobierno Autónomo Municipal de La Paz' },
      { name: 'Lic. Fabio Cabrera Flores', role: 'Gerente administrativo financiero', organization: 'Mi Teleférico' }
    ]
  });
})();

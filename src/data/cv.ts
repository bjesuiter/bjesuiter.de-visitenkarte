export type ResumeLocale = "de" | "en";

export interface ResumeFact {
  label: string;
  value: string;
}

export interface ResumeLink {
  label: string;
  href: string;
}

export interface ResumeSkillSublistItem {
  label: string;
  items: string[];
}

export interface ResumeSkillChipItem {
  text: string;
  chip: string;
}

export type ResumeSkillItem =
  | string
  | ResumeSkillSublistItem
  | ResumeSkillChipItem;

export interface ResumeSkillCategory {
  title: string;
  items: ResumeSkillItem[];
}

export interface ResumeProjectStackItem {
  label: string;
  value: string;
}

export interface ResumeProject {
  id: string;
  period: string;
  sector: string;
  title: string;
  summary: string[];
  highlights: string[];
  duration?: string;
  teamSize?: string;
  roles: string[];
  stack: ResumeProjectStackItem[];
}

export interface ResumeNavigationContent {
  backLabel: string;
  downloadLabel: string;
  printLabel: string;
  languageSwitchLabel: string;
}

// NOTE: The localized intro block is not stored in this data file.
// It is rendered directly in the Astro template: src/components/CVIntro.astro
export interface ResumeContent {
  pageTitle: string;
  pageDescription: string;
  badge: string;
  heading: string;
  navigation: ResumeNavigationContent;
  contactTitle: string;
  factsTitle: string;
  industriesTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  projectsIntro: string;
  highlightsTitle: string;
  stackTitle: string;
  rolesLabel: string;
  durationLabel: string;
  teamSizeLabel: string;
  printHint: string;
  facts: ResumeFact[];
  contactLinks: ResumeLink[];
  industries: string[];
  skillCategories: ResumeSkillCategory[];
  projects: ResumeProject[];
}

const resumeDe: ResumeContent = {
  pageTitle: "Benjamin Jesuiter · Lebenslauf",
  pageDescription:
    "Vollständiger Lebenslauf von Benjamin Jesuiter mit Projektchronik, Kompetenzen und Branchenerfahrung.",
  badge: "Lebenslauf · Projektchronik",
  heading: "Benjamin Jesuiter",
  navigation: {
    backLabel: "Zurück zur Startseite",
    downloadLabel: "Download als PDF",
    printLabel: "Drucken",
    languageSwitchLabel: "View CV in English",
  },
  contactTitle: "Links",
  factsTitle: "Zur Person",
  industriesTitle: "Branchen",
  skillsTitle: "IT-Kenntnisse",
  projectsTitle: "Projektchronik",
  projectsIntro:
    "Auszug meiner wichtigsten Projekte seit 2014 – mit Fokus auf Rollen, Verantwortlichkeiten und technischem Umfeld.",
  highlightsTitle: "Aufgaben & Erfolge",
  stackTitle: "Technischer Kontext",
  rolesLabel: "Rollen",
  durationLabel: "Projektdauer",
  teamSizeLabel: "Teamgröße",
  printHint:
    "Download öffnet den Browser-Dialog zum Speichern als PDF mit dem Website-Look. Drucken nutzt automatisch eine helle, tintensparende Variante mit demselben Layout.",
  facts: [
    { label: "Beruf", value: "Senior Software Developer & Consultant" },
    { label: "Jahrgang", value: "1994" },
    {
      label: "Ausbildung",
      value:
        "Bachelor of Science Informatik, Staatliche Studienakademie Leipzig (10/2013 – 02/2017)",
    },
    {
      label: "Abschlussarbeit",
      value:
        "Konzeption und Implementierung eines Kommunikationsmoduls für eine Android-Applikation zum Datenaustausch mit einem Server-Backend",
    },
    { label: "Abschlussnote", value: "2,1" },
    {
      label: "Sprachen",
      value: "Deutsch (Muttersprache), Englisch (flüssig)",
    },
    {
      label: "Zertifikat",
      value: "AWS Architect Associate (09/2018 – 09/2020)",
    },
    { label: "IT-Erfahrung seit", value: "2008" },
    { label: "IT-Projekterfahrung seit", value: "2014" },
  ],
  contactLinks: [
    { label: "Website", href: "https://bjesuiter.de" },
    { label: "Consulting", href: "https://consulting.jesuiter.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bjesuiter" },
    { label: "GitHub", href: "https://github.com/bjesuiter" },
  ],
  industries: [
    "Finance",
    "Travel",
    "Softwareentwicklung",
    "Industrie / Produktion",
    "E-Mobilität",
    "Schienengüterverkehr",
    "Warentransportsicherung",
    "Informationstechnologie",
    "Forschung",
    "IT-Netzwerkinfrastruktur",
  ],
  skillCategories: [
    {
      title: "Projektstart & Setup",
      items: [
        "Anforderungsanalyse",
        "Projektsetup mit Git",
        "Monorepos mit Nx, npm workspaces, bun workspaces und TypeScript path aliases",
        "Git-Workflows wie GitFlow und OneFlow",
        "GitLab, GitHub, Gitea und Bitbucket",
      ],
    },
    {
      title: "Entwicklungsumgebung",
      items: [
        "macOS",
        "Desktop Linux: Ubuntu, Debian",
        "Windows + cmder",
        "VSCode / Cursor",
      ],
    },
    {
      title: "Coding Agents & LLMs",
      items: [
        {
          label: "Coding Agents",
          items: [
            "OpenCode + oh-my-opencode",
            "codex-cli",
            "pi-agent (pi.dev)",
          ],
        },
        {
          label: "Models tried & used",
          items: [
            "Claude Sonnet 4.1, 4.5, Opus 4.5, 4.6",
            "GPT 5.2 Codex, 5.3 Codex and 5.4",
          ],
        },
      ],
    },
    {
      title: "Server-Entwicklung",
      items: [
        "Node.js, Bun, Deno",
        "Express, Elysia",
        "RESTful Architektur",
        "Event Driven Design",
        "WebSockets: plain und mit tRPC",
        "Drizzle ORM + Drizzle Kit",
        "Turso und PlanetScale",
      ],
    },
    {
      title: "Frontend-Entwicklung",
      items: [
        "Vite",
        "Angular (AngularJS 1 bis Angular 20)",
        "SolidJS",
        "TanStack Query, DB, Router & Start",
        "RxJS",
        "Microfrontends mit Angular Elements & Web Components",
        "Progressive Web Apps",
        "StencilJS",
        "CSS3 & Tailwind CSS",
        { text: "Angular Material", chip: "legacy" },
        { text: "PrimeNG 17", chip: "legacy" },
      ],
    },
    {
      title: "Programmiersprachen",
      items: [
        "TypeScript",
        "JavaScript",
        "Rust",
        { text: "Java", chip: "legacy" },
        "Shell / Bash / Fish",
      ],
    },
    {
      title: "CI/CD & DevOps",
      items: [
        "Buddy.Works",
        "GitLab Pipelines",
        "GitHub Actions",
        "Jenkins",
        "Docker Compose",
        "Ansible",
      ],
    },
    {
      title: "Projektorganisation & Dokumentation",
      items: [
        "Jira",
        "GitLab Boards",
        "KanBoard",
        "Scrum",
        "Confluence",
        "Markdown",
        "Excalidraw",
        "draw.io",
        "Figma",
      ],
    },
    {
      title: "Deployment & Selfhosting",
      items: [
        "nginx",
        "Deno Deploy",
        "AWS Cloud (EC2, VPC, EKS, RDS, IAM, Lambda, API Gateway)",
        "Railway",
        "Linux-Server (Ubuntu, Debian, Alpine)",
        "Traefik",
        "Nextcloud",
        "Vaultwarden",
        "Plex",
        "Netcup, Hetzner, do.de, hosting.de",
      ],
    },
  ],
  projects: [
    {
      id: "network-infrastructure",
      period: "10/2023 – 04/2025",
      sector: "IT-Netzwerkinfrastruktur",
      title:
        "Lead of Product Development für eine Administrationsplattform für Netzwerkressourcen",
      summary: [
        "Im Rahmen eines Rollenwechsels aus dem Consulting in eine produktorientierte Organisation übernahm ich die Produktverantwortung für die Administrationsplattform eines IT-Dienstleisters.",
        "Über die Plattform werden E-Mail-Dienste, Backup-Management, virtuelle Server, Domains, Zertifikate, virtuelle Desktops und kundenspezifische Spezialentwicklungen verwaltet und automatisiert bereitgestellt.",
      ],
      highlights: [
        "Modernisierung der Frontend-Bestandteile von Angular 11 auf Angular 19.",
        "Einführung separater Dev- und Staging-Umgebungen für das Frontend, um Produktionstests zu vermeiden.",
        "Einführung von Mock Service Worker für API-unabhängige Frontend-Tests.",
        "Reduktion externer Abhängigkeiten und Aktualisierung veralteter Libraries zur Zukunftssicherung des Produkts.",
        "Vereinfachung der Frontend-Codestruktur für bessere Wartbarkeit.",
        "Planung und Architektur neuer Kundenanforderungen inklusive visueller Mockups in Figma.",
        "Technische Leitung eines Frontend-Entwicklers und eines Windows-Plattform-Entwicklers.",
        "Steuerung der Produktentwicklung eines neuen VPN-Tools sowie bessere Abstimmung zwischen Entwicklung und Kundenservice durch neue Austauschformate wie ein Engineering-Meeting.",
      ],
      duration: "1 Jahr 7 Monate",
      teamSize: "9",
      roles: [
        "Tech Lead",
        "API Architect",
        "Frontend Architect",
        "Frontend Developer",
      ],
      stack: [
        { label: "Tools", value: "Figma, nginx" },
        {
          label: "Sonstiges",
          value: "Node.js, Rust (selbst geschriebener SSH File Uploader)",
        },
        { label: "Buildtools", value: "GitLab Pipelines" },
        { label: "Methoden/Prozesse", value: "Architektur" },
        { label: "Dokumentation", value: "Markdown in Obsidian" },
        {
          label: "Frameworks",
          value: "Angular 11 → 19, TanStack Query, Tailwind CSS, RxJS",
        },
        { label: "Programmiersprachen", value: "TypeScript" },
      ],
    },
    {
      id: "finance-overlays",
      period: "06/2021 – 12/2023",
      sector: "Finance",
      title:
        "System interaktiver Overlays zur Einholung von Zustimmungen und Änderungen",
      summary: [
        "Nach einer BGH-Entscheidung mussten Zustimmungen zu AGB- und Vertragsänderungen explizit eingeholt werden. Dafür wurde ein zentrales, modular aufgebautes Overlay-System entwickelt, das Kundinnen und Kunden direkt nach dem Login führt.",
        "Aus dieser Basis entstanden zusätzlich Overlay-Management, Zustimmungsmanagement für Kundinnen und Kunden sowie ein Banker-Frontend für telefonische oder stellvertretende Betreuung.",
      ],
      highlights: [
        "Technische Konzeption des gesamten Systems gemeinsam mit Fachseite und Business Analysis.",
        "Entwurf eines Overlay-Prozesses, der verschiedene Overlay-Module beliebiger Teams orchestrieren kann.",
        "Konzeption der APIs für Login-Anzeige, Zustimmungsabruf und Nutzung in Kunden- und Banker-Oberflächen.",
        "Technische Implementierung der Kernbestandteile des Overlay-Systems und der Kommunikation zwischen Overlay-Host und Modulen anderer Teams.",
        "Entwicklung einer CLI als lokale Testumgebung für andere Teams inklusive Emulation zentraler Portal-UI-Bestandteile.",
        "Koordination der Implementierung mit Portalrahmen-, Mobile-App- und Fachteams.",
        "Technische Leitung von bis zu vier Frontend-Entwicklern.",
      ],
      duration: "1 Jahr 11 Monate",
      teamSize: "16",
      roles: [
        "System Architect",
        "Frontend Architect",
        "Frontend Developer",
        "Tech Lead",
      ],
      stack: [
        {
          label: "Tools",
          value:
            "OpenShift 4, Nexus, npm, Jira, Bitbucket, Git, VS Code, Docker",
        },
        { label: "Sonstiges", value: "Node.js" },
        { label: "Buildtools", value: "Jenkins" },
        { label: "Methoden/Prozesse", value: "Architektur" },
        {
          label: "Dokumentation",
          value: "Confluence, OpenAPI Specification (Swagger)",
        },
        {
          label: "Frameworks",
          value: "Angular 10 → 16, RxJS, ngneat/elf",
        },
        { label: "Programmiersprachen", value: "TypeScript" },
      ],
    },
    {
      id: "finance-access-management",
      period: "09/2020 – 05/2021",
      sector: "Finance",
      title: "Teil-WebApp Zugriffsverwaltung einer Onlinebanking-Plattform",
      summary: [
        "Ziel der WebApp war die transparente Darstellung aller Berechtigungen, die ein Kunde innerhalb der Plattform, im Rahmen von PSD2 oder über Drittanbieter erteilt hatte.",
        "Darüber hinaus wurden alle Zugriffe auf Kontodaten oder Zahlungsauslösungen protokolliert und für Privatkundinnen und -kunden nachvollziehbar visualisiert.",
      ],
      highlights: [
        "Weiterentwicklung und Performance-Optimierung der Angular-WebApp.",
        "Darstellung komplexer Geschäftsvorfälle aus PSD2 und weiteren API-basierten Zahlungsdiensten.",
      ],
      duration: "9 Monate",
      teamSize: "11",
      roles: ["Technical Lead", "Frontend Developer", "Architect"],
      stack: [
        {
          label: "Tools",
          value: "OpenShift, Nexus, npm, Jira, Bitbucket, Git, VS Code",
        },
        { label: "Buildtools", value: "Jenkins" },
        { label: "Methoden/Prozesse", value: "Architektur" },
        { label: "Frameworks", value: "Angular 8, Angular 11, Angular 12" },
        { label: "Dokumentation", value: "Confluence" },
        { label: "Sonstiges", value: "Node.js" },
      ],
    },
    {
      id: "travel-aws-migration",
      period: "07/2020 – 09/2020",
      sector: "Travel",
      title:
        "On-Premise-zu-AWS-Cloud-Migration für einen Au-pair-Reiseanbieter",
      summary: [
        "Der Kunde betrieb seine Dienste on-premise und wollte Skalierungsvorteile sowie agilere Betriebsprozesse durch eine Migration in die AWS Cloud nutzen.",
        "Dazu gehörten EC2-Instanzen für DNS- und E-Mail-Strukturen, ein EKS-Cluster für Hauptanwendungen sowie Datenbanken in Amazon RDS.",
      ],
      highlights: [
        "Ausarbeitung der benötigten AWS-Services für den Kunden.",
        "Konzeption einer AWS-VPC-Struktur mit den relevanten Diensten.",
        "Aufsetzen von Infrastructure-as-Code mit CloudFormation inklusive Layered Architecture und Update-Mechanismen.",
        "Einrichtung eines AWS-Kubernetes-Clusters.",
      ],
      duration: "3 Monate",
      teamSize: "3",
      roles: ["AWS Architect"],
      stack: [
        {
          label: "Cloud Technologies",
          value: "AWS Cloud, AWS EKS, AWS CloudFormation",
        },
        { label: "Methoden/Prozesse", value: "Cloud Architecture" },
      ],
    },
    {
      id: "gerrit-to-gitea",
      period: "05/2020 – 07/2020",
      sector: "Softwareentwicklung",
      title: "Migration von Gerrit VCS zu Gitea",
      summary: [
        "Das bestehende Versionsverwaltungssystem Gerrit sollte durch Gitea ersetzt werden, um moderneren Git-Workflows näherzukommen und die Zusammenarbeit mit zeitgemäßer CI/CD zu erleichtern.",
      ],
      highlights: [
        "Entwurf eines Git-Workflows inklusive Branching- und Versionierungssystem für den unternehmensweiten Einsatz.",
        "Umzug bestehender Projekte von Gerrit zu Gitea.",
        "Migration der CI/CD-Setups, die zuvor eng an Gerrit und Jenkins gekoppelt waren.",
      ],
      duration: "3 Monate",
      teamSize: "2",
      roles: ["Software Engineer"],
      stack: [
        { label: "Tools", value: "Gitea, Gerrit, Git" },
        { label: "Buildtools", value: "Jenkins" },
        { label: "Allgemeine Kenntnisse", value: "Git Workflows" },
        { label: "Methoden/Prozesse", value: "CI/CD" },
      ],
    },
    {
      id: "bi-dashboard-monitoring",
      period: "03/2019 – 04/2020",
      sector: "Industrie / Produktion",
      title:
        "Cross-Plattform BI-Dashboard & Monitoring für einen Maschinenhersteller",
      summary: [
        "Die Hauptapplikation war ein BI-Dashboard zur Visualisierung operativer Performance-Daten von Metallverarbeitungsmaschinen.",
        "Über Azure IoT Hub wurden Statusdaten an die Cloud übertragen, mit Azure Stream Analytics verarbeitet und in Azure SQL gespeichert. Darauf aufbauend entstanden weitere Anwendungen für OEE-Reporting, Fehlerkategorisierung und Stammdatenpflege.",
      ],
      highlights: [
        "Integration neuer Widgets in eine Ionic-1- / Angular-1-Dashboard-App.",
        "Implementierung einer komplexen Stencil-Web-Component zur Konfiguration eines Schichtsystems für Maschinen.",
        "System- und Softwarearchitektur der Reporting-App mit JasperReports IO Server.",
        "Softwareentwicklung für UI und Logik der Reporting-App.",
        "UI-Entwicklung für Tracking-App und Tracking-Server.",
        "Begleitung der Tool-Migration von Jira, Confluence und Bitbucket auf die Systeme des Kunden.",
      ],
      duration: "1 Jahr 2 Monate",
      teamSize: "2",
      roles: ["Softwarearchitekt", "Softwareentwickler"],
      stack: [
        {
          label: "Frameworks",
          value:
            "Ionic 1, Angular 1, Cordova, Ionic Web Components, Ionic 4/5, Capacitor, Angular 6 → 9, StencilJS, Highcharts, SCSS",
        },
        {
          label: "Cloud Technologies",
          value:
            "Azure Functions, Azure SQL, Azure Container Instances, Azure Container Registry, Azure IoT",
        },
        {
          label: "Entwicklungsumgebungen",
          value: "IntelliJ, WebStorm, Visual Studio Code",
        },
        {
          label: "Tools",
          value:
            "Jira, Bitbucket, Docker, GitHub, DBeaver, Jaspersoft Studio, npm",
        },
        { label: "Dokumentation", value: "Confluence" },
        { label: "Server", value: "JasperReports IO" },
        { label: "DC/Netzwerke", value: "WebSockets, SSH" },
        { label: "Sonstiges", value: "Angular Material" },
        {
          label: "Programmiersprachen",
          value: "JavaScript, TypeScript, ES6",
        },
        { label: "Betriebssysteme", value: "macOS" },
        { label: "Methoden/Prozesse", value: "CI/CD, Web Components, DevOps" },
        { label: "Buildtools", value: "Buddy.Works" },
      ],
    },
    {
      id: "e-mobility-load-management",
      period: "09/2019 – 12/2019",
      sector: "E-Mobilität",
      title:
        "Architektur einer Cloud-Infrastruktur für ein Elektrizitäts-Lastmanagement-System in AWS",
      summary: [
        "Für ein Lastmanagement-System von Ladeinfrastruktur musste eine Cloud-native AWS-Architektur geplant und umgesetzt werden, die auf dynamische Lastgrenzen und laufend eingehende Verbrauchsdaten reagieren kann.",
        "Ziel war eine intelligente Lastverteilung im Stromnetz unter Nutzung automatischer Skalierung in der Cloud.",
      ],
      highlights: [
        "Definition der eingesetzten AWS-Services.",
        "Unterstützung der Frontend-Entwicklung bei der Integration der AWS-Frontend-SDKs in eine Angular-App.",
        "Unterstützung der Backend-Entwicklung bei der konsistenten Verbindung der AWS-Dienste.",
        "Einrichtung des AWS-Rechtemanagements.",
      ],
      duration: "4 Monate",
      teamSize: "4",
      roles: ["Systemarchitekt", "Softwareentwickler"],
      stack: [
        { label: "Service", value: "AWS Lambda" },
        {
          label: "Cloud Technologies",
          value:
            "AWS IAM, AWS DynamoDB, AWS Cognito, AWS EventBridge, AWS API Gateway",
        },
        { label: "Frameworks", value: "Serverless Framework" },
        { label: "Entwicklungsumgebungen", value: "IntelliJ, WebStorm" },
        { label: "Programmiersprachen", value: "Shell (Bash), Java 7" },
        {
          label: "Methoden/Prozesse",
          value:
            "RESTful Architektur und Webservices, Event Driven Design, funktionale Programmierung, Cloud Architecture, Cloud Computing",
        },
        { label: "Betriebssysteme", value: "macOS" },
        { label: "DC/Netzwerke", value: "SSH" },
        { label: "Tools", value: "npm" },
      ],
    },
    {
      id: "remote-service-app",
      period: "07/2018 – 02/2019",
      sector: "Industrie / Produktion",
      title: "Remote Service Application für ein Maschinenbauunternehmen",
      summary: [
        "In diesem Projekt entstand eine Remote-Service-Web-Anwendung für die Support-Abteilung eines Maschinenbauunternehmens.",
        "Die Web-App sollte Kundinnen und Kunden per Chat, Audio oder Video mit dem Support verbinden und gleichzeitig umfangreiche Maschinen- und Kundendaten zur Fehleranalyse anzeigen.",
      ],
      highlights: [
        "Implementierung komplexer Highcharts-Widgets zur Darstellung von Maschinen-Statusereignissen auf einer Zeitleiste.",
        "Modularisierung der Angular-Anwendungsarchitektur.",
        "Aufbau eines agilen Entwicklungsworkflows im Team des Kunden.",
      ],
      duration: "8 Monate",
      teamSize: "6 – 8",
      roles: ["Softwareentwickler", "Softwarearchitekt", "Consultant"],
      stack: [
        { label: "Frameworks", value: "Highcharts, Angular, Node.js" },
        { label: "Sonstiges", value: "Angular Material" },
        {
          label: "Methoden/Prozesse",
          value: "Agile Methoden (Scrum), RESTful Architektur und Webservices",
        },
        { label: "Tools", value: "Jira, GitHub, npm" },
        { label: "Dokumentation", value: "Confluence" },
        {
          label: "Entwicklungsumgebungen",
          value: "IntelliJ, WebStorm, Visual Studio Code",
        },
        { label: "Programmiersprachen", value: "TypeScript, JavaScript, ES6" },
        { label: "Betriebssysteme", value: "macOS" },
      ],
    },
    {
      id: "railway-monitoring",
      period: "02/2017 – 05/2018",
      sector: "Schienengüterverkehr",
      title: "Railway Monitoring Systems",
      summary: [
        "Ziel war die Entwicklung eines Systems zur automatischen Analyse des Betriebszustands von Güterwaggons mittels High-Speed-Kameras, Mikrofonen und weiterer Sensorik in und neben den Gleisen.",
        "Die Daten wurden von Edge-Computing-Devices in die Cloud übertragen, dort organisiert und angereichert und anschließend in einem differenzierten Web-Dashboard für verschiedene Nutzergruppen dargestellt.",
      ],
      highlights: [
        "Architektur der drei Teilbereiche Datensammlung, Datenaufbereitung und Datenbereitstellung.",
        "Optimierung und Ausbau der Development-Workflows hin zu einer vollständig automatisierten DevOps-Umgebung.",
        "Implementierung einer Node.js-App für die Datensammlung auf einem Raspberry Pi als Edge-Computing-Device.",
        "Implementierung eines Docker-basierten Node.js-Backends mit Express und Sequelize.",
      ],
      duration: "1 Jahr 4 Monate",
      teamSize: "2 – 6",
      roles: [
        "Softwarearchitekt",
        "Teilsystemarchitektur",
        "Softwareentwickler",
      ],
      stack: [
        {
          label: "Frameworks",
          value: "Sequelize, ExpressJS, Node.js, Angular, Socket.IO, AngularJS",
        },
        {
          label: "Betriebssysteme",
          value: "Balena Cloud (ehemals Resin.io), macOS",
        },
        {
          label: "Cloud Technologies",
          value:
            "Azure SQL, Azure App Services, Azure Container Instances, Azure Container Registry, Azure Virtual Machines, Azure",
        },
        { label: "Tools", value: "Bitbucket, Jira, DBeaver, npm" },
        { label: "Dokumentation", value: "Confluence" },
        {
          label: "Methoden/Prozesse",
          value:
            "Agile Methoden (Scrum), RESTful Architektur und Webservices, Event Driven Design, CI/CD, DevOps",
        },
        {
          label: "Entwicklungsumgebungen",
          value: "IntelliJ, WebStorm, IntelliJ IDEA",
        },
        { label: "Programmiersprachen", value: "TypeScript, JavaScript, ES6" },
        { label: "Buildtools", value: "Buddy.Works" },
        { label: "Sonstiges", value: "Docker Compose" },
        { label: "Application Server", value: "Webservices" },
      ],
    },
    {
      id: "gold-trade-app",
      period: "03/2016 – 02/2017",
      sector: "Warentransportsicherung",
      title: "App für zertifizierten Goldhandel für die Republik Kongo",
      summary: [
        "Für den Goldhandel im Kongo wurde eine Lösung entwickelt, die mithilfe von Plastiktüten mit integriertem NFC-Chip die Handelshistorie und Eigenschaften einer Goldmenge nachvollziehbar speichert.",
        "Mit einer App lässt sich dadurch feststellen, ob Gold fehlt und ob die Lieferkette vollständig rückverfolgbar ist – als Grundlage für eine ethische Zertifizierung des Handels.",
      ],
      highlights: ["NFC-Implementierungen.", "Android-UI-Entwicklung."],
      duration: "1 Jahr",
      teamSize: "3",
      roles: ["Softwareentwickler"],
      stack: [
        { label: "Betriebssysteme", value: "Android, Windows" },
        { label: "Frameworks", value: "Android 5.x" },
        { label: "Programmiersprachen", value: "Java 7" },
        { label: "Entwicklungsumgebungen", value: "Android Studio" },
      ],
    },
    {
      id: "gps-tracking-portal",
      period: "10/2015 – 02/2017",
      sector: "Informationstechnologie",
      title: "Neuentwicklung einer Android-App für ein GPS-Ortungsportal",
      summary: [
        "Ein veralteter Android-Client für ein proprietäres GPS-Ortungsportal der ibes AG wurde durch eine native Neuentwicklung ersetzt.",
      ],
      highlights: [
        "Android-UI-Entwicklung.",
        "App-Architektur.",
        "API-Architektur.",
        "Entwicklung einer eigenen Android-Komponente zur Anzeige einer proprietären Kartenansicht aus Image-Tiles.",
      ],
      duration: "1 Jahr 5 Monate",
      teamSize: "2",
      roles: ["Softwarearchitekt", "API Architect", "Hauptentwickler"],
      stack: [
        { label: "Betriebssysteme", value: "Android, Windows" },
        { label: "Entwicklungsumgebungen", value: "Android Studio" },
        {
          label: "Methoden/Prozesse",
          value: "RESTful Architektur und Webservices",
        },
      ],
    },
    {
      id: "modern-software-development",
      period: "10/2014 – 09/2016",
      sector: "Informationstechnologie",
      title: "Einführung moderner Softwareentwicklung",
      summary: [
        "Einführung moderner Softwareentwicklungspraktiken bei einem IT-Softwareunternehmen.",
      ],
      highlights: [
        "Ablösung von Netzlaufwerken durch Git-basierte Code-Versionierung.",
        "Einrichtung eines GitLab-Servers für unternehmensweite Versionsverwaltung.",
        "Einführung von Artifactory zur einfachen Verteilung von Code-Artefakten zwischen Projekten.",
      ],
      duration: "2 Jahre",
      teamSize: "2",
      roles: ["Consultant"],
      stack: [
        { label: "Tools", value: "GitLab, GitLab CI, Git" },
        { label: "Methoden/Prozesse", value: "Git Flow, CI/CD" },
        { label: "Buildtools", value: "Artifactory" },
        { label: "Betriebssysteme", value: "Linux" },
        { label: "DC/Netzwerke", value: "SSH" },
      ],
    },
    {
      id: "gps-raw-data-research",
      period: "10/2014 – 09/2016",
      sector: "Forschung",
      title: "Applikationsentwicklung GPS-Rohdaten-Verarbeitung",
      summary: [
        "Programmierung eines Tools zum Einlesen und Verarbeiten von GPS-Rohdaten in einer Kooperation zwischen der ibes AG und dem Fraunhofer-Institut.",
      ],
      highlights: [
        "Entwicklung der kompletten App-UI.",
        "Implementierung mehrerer Kommunikationsprotokolle für verschiedene GPS-Empfänger.",
        "App-Logik zur Aggregation und Umformung von GPS-Rohdaten in ein Industriestandardformat.",
        "Besonderes Feature: direktes Schreiben eingehender Daten auf die Festplatte ohne Zwischenspeicherung im RAM.",
      ],
      duration: "2 Jahre",
      teamSize: "1",
      roles: ["Softwarearchitekt", "Softwareentwickler"],
      stack: [
        { label: "Betriebssysteme", value: "Windows" },
        { label: "Frameworks", value: "GPS, .NET" },
        {
          label: "Entwicklungsumgebungen",
          value: "Visual Studio 2008, Visual Studio 2010",
        },
        {
          label: "Tools",
          value: "Visual Studio 2015, ReSharper for Visual Studio",
        },
        { label: "Methoden/Prozesse", value: "Event Driven Design" },
        { label: "Programmiersprachen", value: "C#, .NET 4" },
      ],
    },
  ],
};

const resumeEn: ResumeContent = {
  pageTitle: "Benjamin Jesuiter · CV",
  pageDescription:
    "Full CV of Benjamin Jesuiter with project history, skills, and industry experience.",
  badge: "CV · Project history",
  heading: "Benjamin Jesuiter",
  navigation: {
    backLabel: "Back to homepage",
    downloadLabel: "Download PDF",
    printLabel: "Print",
    languageSwitchLabel: "Zur deutschen Version",
  },
  contactTitle: "Links",
  factsTitle: "Profile",
  industriesTitle: "Industries",
  skillsTitle: "IT skills",
  projectsTitle: "Project history",
  projectsIntro: "An overview of most of my professional project work.",
  highlightsTitle: "Responsibilities & Outcomes",
  stackTitle: "Technical Context",
  rolesLabel: "Roles",
  durationLabel: "Project duration",
  teamSizeLabel: "Team size",
  printHint:
    "Download opens the browser flow for saving a PDF with the site styling. Print automatically switches to a bright, ink-friendly version with the same layout.",
  facts: [
    { label: "Role", value: "Senior Software Engineer & Consultant" },
    { label: "Year of birth", value: "1994" },
    {
      label: "Education",
      value:
        "Bachelor of Science in Computer Science, Leipzig University of Cooperative Education / BA Leipzig (10/2013 – 02/2017)",
    },
    {
      label: "Thesis",
      value:
        "Design and implementation of a communication module for an Android application to exchange data with a server backend",
    },
    { label: "Final grade", value: "2.1" },
    {
      label: "Languages",
      value: "German (native), English (fluent)",
    },
    {
      label: "Certificate",
      value: "AWS Architect Associate (09/2018 – 09/2020)",
    },
    { label: "IT experience since", value: "2008" },
    { label: "Project experience since", value: "2014" },
  ],
  contactLinks: [
    { label: "Website", href: "https://bjesuiter.de" },
    { label: "Consulting", href: "https://consulting.jesuiter.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bjesuiter" },
    { label: "GitHub", href: "https://github.com/bjesuiter" },
  ],
  industries: [
    "Finance",
    "Travel",
    "Software development",
    "Industry / manufacturing",
    "E-mobility",
    "Rail freight",
    "Cargo transport security",
    "Information technology",
    "Research",
    "IT network infrastructure",
  ],
  skillCategories: [
    {
      title: "Project setup",
      items: [
        "Requirements analysis",
        "Project setup with Git",
        "Monorepos with Nx, npm workspaces, bun workspaces, and TypeScript path aliases",
        "Git workflows such as GitFlow and OneFlow",
        "GitLab, GitHub, Gitea, and Bitbucket",
      ],
    },
    {
      title: "Development environment",
      items: [
        "macOS",
        "Desktop Linux: Ubuntu, Debian",
        "Windows + cmder",
        "VSCode / Cursor",
      ],
    },
    {
      title: "Coding Agents & LLMs",
      items: [
        {
          label: "Coding Agents",
          items: [
            "OpenCode + oh-my-opencode",
            "codex-cli",
            "pi-agent (pi.dev)",
          ],
        },
        {
          label: "Models tried & used",
          items: [
            "Claude Sonnet 4.1, 4.5, Opus 4.5, 4.6",
            "GPT 5.2 Codex, 5.3 Codex and 5.4",
          ],
        },
      ],
    },
    {
      title: "Server-side development",
      items: [
        "Node.js, Bun, Deno",
        "Express, Elysia",
        "RESTful architecture",
        "Event-driven design",
        "Websockets: plain and with tRPC",
        "Drizzle ORM + Drizzle Kit",
        "Turso and PlanetScale",
      ],
    },
    {
      title: "Frontend development",
      items: [
        "Vite",
        "Angular (AngularJS 1 to Angular 20)",
        "SolidJS",
        "TanStack Query, DB, Router & Start",
        "RxJS",
        "Microfrontends with Angular Elements & Web Components",
        "Progressive Web Apps",
        "StencilJS",
        "CSS3 & Tailwind CSS",
        { text: "Angular Material", chip: "legacy" },
        { text: "PrimeNG 17", chip: "legacy" },
      ],
    },
    {
      title: "Programming languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Rust",
        { text: "Java", chip: "legacy" },
        "Shell / Bash / Fish",
      ],
    },
    {
      title: "CI/CD & DevOps",
      items: [
        "Buddy.Works",
        "GitLab Pipelines",
        "GitHub Actions",
        "Jenkins",
        "Docker Compose",
        "Ansible",
      ],
    },
    {
      title: "Project organization & documentation",
      items: [
        "Jira",
        "GitLab Boards",
        "KanBoard",
        "Scrum",
        "Confluence",
        "Markdown",
        "Excalidraw",
        "draw.io",
        "Figma",
      ],
    },
    {
      title: "Deployment & self-hosting",
      items: [
        "nginx",
        "Deno Deploy",
        "AWS Cloud (EC2, VPC, EKS, RDS, IAM, Lambda, API Gateway)",
        "Railway",
        "Linux servers (Ubuntu, Debian, Alpine)",
        "Traefik",
        "Nextcloud",
        "Vaultwarden",
        "Plex",
        "Netcup, Hetzner, do.de, hosting.de",
      ],
    },
  ],
  projects: [
    {
      id: "network-infrastructure",
      period: "10/2023 – 04/2025",
      sector: "IT network infrastructure",
      title:
        "Lead of product development for an administration platform for network resources",
      summary: [
        "After moving from consulting into a product-focused organization, I took ownership of the administration platform used by an IT service provider.",
        "The platform provisions and manages email services, backup management, virtual servers, domains, certificates, virtual desktops, and customer-specific solutions while automating the related operational workflows.",
      ],
      highlights: [
        "Modernized the frontend from Angular 11 to Angular 19.",
        "Introduced dedicated development and staging environments to avoid testing in production.",
        "Introduced Mock Service Worker to enable frontend testing independent of the backend API.",
        "Reduced dependency on external libraries and updated outdated packages to improve long-term maintainability.",
        "Simplified the frontend code structure to improve maintainability.",
        "Planned new customer-facing features and architecture, including visual mockups in Figma.",
        "Provided technical leadership for a frontend developer and a Windows platform developer.",
        "Oversaw the product development of a new VPN tool and improved collaboration between engineering and customer service through new exchange formats such as an engineering meeting.",
      ],
      duration: "1 year 7 months",
      teamSize: "9",
      roles: [
        "Tech Lead",
        "API Architect",
        "Frontend Architect",
        "Frontend Developer",
      ],
      stack: [
        { label: "Tools", value: "Figma, nginx" },
        {
          label: "Other",
          value: "Node.js, Rust (custom SSH file uploader)",
        },
        { label: "Build tooling", value: "GitLab Pipelines" },
        { label: "Methods / process", value: "Architecture" },
        { label: "Documentation", value: "Markdown in Obsidian" },
        {
          label: "Frameworks",
          value: "Angular 11 → 19, TanStack Query, Tailwind CSS, RxJS",
        },
        { label: "Programming languages", value: "TypeScript" },
      ],
    },
    {
      id: "finance-overlays",
      period: "06/2021 – 12/2023",
      sector: "Finance",
      title:
        "Interactive overlay system for collecting consents and change confirmations",
      summary: [
        "After a German Federal Court ruling invalidated implicit acceptance of changed banking terms, a new system was needed to collect explicit customer consent.",
        "A central modular overlay platform was created to guide customers immediately after login. This later expanded into overlay management, customer consent management, and a banker-facing consent management interface.",
      ],
      highlights: [
        "Designed the overall technical concept together with business analysis and domain stakeholders.",
        "Designed the post-login overlay process so that teams could plug in their own overlay modules.",
        "Defined APIs for module display after login and for retrieving consent data in both customer and banker flows.",
        "Implemented the core parts of the overlay system and the communication between the overlay host and modules from other teams.",
        "Built a CLI-based local test environment for other teams, including an emulation of key portal UI capabilities.",
        "Coordinated implementation work across the portal framework, mobile app, and domain teams.",
        "Provided technical leadership for up to four frontend developers.",
      ],
      duration: "1 year 11 months",
      teamSize: "16",
      roles: [
        "System Architect",
        "Frontend Architect",
        "Frontend Developer",
        "Tech Lead",
      ],
      stack: [
        {
          label: "Tools",
          value:
            "OpenShift 4, Nexus, npm, Jira, Bitbucket, Git, VS Code, Docker",
        },
        { label: "Other", value: "Node.js" },
        { label: "Build tooling", value: "Jenkins" },
        { label: "Methods / process", value: "Architecture" },
        {
          label: "Documentation",
          value: "Confluence, OpenAPI Specification (Swagger)",
        },
        {
          label: "Frameworks",
          value: "Angular 10 → 16, RxJS, ngneat/elf",
        },
        { label: "Programming languages", value: "TypeScript" },
      ],
    },
    {
      id: "finance-access-management",
      period: "09/2020 – 05/2021",
      sector: "Finance",
      title: "Access management sub-web app for an online banking platform",
      summary: [
        "The goal of the web app was to show all permissions granted by a customer inside the platform, under PSD2, or through third-party providers.",
        "It also logged and visualized all third-party access to account data or payment initiation events for private banking users.",
      ],
      highlights: [
        "Improved, optimized, and further developed the Angular web app.",
        "Implemented UI and logic for complex business processes related to PSD2 and additional API-based payment service providers.",
      ],
      duration: "9 months",
      teamSize: "11",
      roles: ["Technical Lead", "Frontend Developer", "Architect"],
      stack: [
        {
          label: "Tools",
          value: "OpenShift, Nexus, npm, Jira, Bitbucket, Git, VS Code",
        },
        { label: "Build tooling", value: "Jenkins" },
        { label: "Methods / process", value: "Architecture" },
        { label: "Frameworks", value: "Angular 8, Angular 11, Angular 12" },
        { label: "Documentation", value: "Confluence" },
        { label: "Other", value: "Node.js" },
      ],
    },
    {
      id: "travel-aws-migration",
      period: "07/2020 – 09/2020",
      sector: "Travel",
      title: "On-premise to AWS cloud migration for an au pair travel company",
      summary: [
        "The customer operated its services on-premise and wanted to move to AWS to gain scalability and work more flexibly.",
        "The target setup included EC2 instances for DNS and email services, an EKS cluster for the main applications, and databases in Amazon RDS.",
      ],
      highlights: [
        "Identified the AWS services required for the customer landscape.",
        "Designed the AWS VPC setup.",
        "Implemented infrastructure as code with CloudFormation, including a layered architecture and automated updates.",
        "Set up an AWS Kubernetes cluster.",
      ],
      duration: "3 months",
      teamSize: "3",
      roles: ["AWS Architect"],
      stack: [
        {
          label: "Cloud technologies",
          value: "AWS Cloud, AWS EKS, AWS CloudFormation",
        },
        { label: "Methods / process", value: "Cloud architecture" },
      ],
    },
    {
      id: "gerrit-to-gitea",
      period: "05/2020 – 07/2020",
      sector: "Software development",
      title: "Migration from Gerrit VCS to Gitea",
      summary: [
        "The existing Gerrit-based version control setup was replaced with Gitea in order to align better with modern Git workflows and more contemporary CI/CD practices.",
      ],
      highlights: [
        "Designed a Git workflow including branching and versioning conventions for internal use.",
        "Migrated projects from Gerrit to Gitea.",
        "Migrated CI/CD setups that had previously been tightly coupled to Gerrit and Jenkins.",
      ],
      duration: "3 months",
      teamSize: "2",
      roles: ["Software Engineer"],
      stack: [
        { label: "Tools", value: "Gitea, Gerrit, Git" },
        { label: "Build tooling", value: "Jenkins" },
        { label: "General knowledge", value: "Git workflows" },
        { label: "Methods / process", value: "CI/CD" },
      ],
    },
    {
      id: "bi-dashboard-monitoring",
      period: "03/2019 – 04/2020",
      sector: "Industry / manufacturing",
      title:
        "Cross-platform BI dashboard and monitoring for a machine manufacturer",
      summary: [
        "The main application in this project was a BI dashboard for visualizing operational performance data from metal-processing machines.",
        "Machine status data was sent through Azure IoT Hub, processed via Azure Stream Analytics, stored in Azure SQL, and then made available through a REST API. The project later expanded to include OEE reporting, a tracking app for operators, and a back-office web application.",
      ],
      highlights: [
        "Integrated new widgets into an Ionic 1 / Angular 1 dashboard app.",
        "Built a complex Stencil web component for configuring machine shift systems.",
        "Designed the system and software architecture for the reporting app based on JasperReports IO.",
        "Implemented UI and application logic for the reporting app.",
        "Worked on the UI of both the tracking app and the tracking server.",
        "Supported the migration of Jira, Confluence, and Bitbucket processes to the customer environment.",
      ],
      duration: "1 year 2 months",
      teamSize: "2",
      roles: ["Software Architect", "Software Developer"],
      stack: [
        {
          label: "Frameworks",
          value:
            "Ionic 1, Angular 1, Cordova, Ionic Web Components, Ionic 4/5, Capacitor, Angular 6 → 9, StencilJS, Highcharts, SCSS",
        },
        {
          label: "Cloud technologies",
          value:
            "Azure Functions, Azure SQL, Azure Container Instances, Azure Container Registry, Azure IoT",
        },
        {
          label: "Development environments",
          value: "IntelliJ, WebStorm, Visual Studio Code",
        },
        {
          label: "Tools",
          value:
            "Jira, Bitbucket, Docker, GitHub, DBeaver, Jaspersoft Studio, npm",
        },
        { label: "Documentation", value: "Confluence" },
        { label: "Server", value: "JasperReports IO" },
        { label: "Networking", value: "WebSockets, SSH" },
        { label: "Other", value: "Angular Material" },
        {
          label: "Programming languages",
          value: "JavaScript, TypeScript, ES6",
        },
        { label: "Operating systems", value: "macOS" },
        { label: "Methods / process", value: "CI/CD, web components, DevOps" },
        { label: "Build tooling", value: "Buddy.Works" },
      ],
    },
    {
      id: "e-mobility-load-management",
      period: "09/2019 – 12/2019",
      sector: "E-mobility",
      title:
        "Architecture of an AWS cloud infrastructure for electric load management",
      summary: [
        "This project focused on a load management system for charging infrastructure, planned as a cloud-native AWS application.",
        "The system had to react to changing power limits from utility providers and to incoming consumption data from charging stations while taking advantage of automatic scaling in the cloud.",
      ],
      highlights: [
        "Defined the AWS services used by the solution.",
        "Supported frontend development with AWS frontend SDK integration in an Angular app.",
        "Supported backend development in connecting the AWS services into a coherent overall architecture.",
        "Set up AWS identity and access management.",
      ],
      duration: "4 months",
      teamSize: "4",
      roles: ["System Architect", "Software Developer"],
      stack: [
        { label: "Service", value: "AWS Lambda" },
        {
          label: "Cloud technologies",
          value:
            "AWS IAM, AWS DynamoDB, AWS Cognito, AWS EventBridge, AWS API Gateway",
        },
        { label: "Frameworks", value: "Serverless Framework" },
        { label: "Development environments", value: "IntelliJ, WebStorm" },
        { label: "Programming languages", value: "Shell (Bash), Java 7" },
        {
          label: "Methods / process",
          value:
            "RESTful architecture and web services, event-driven design, functional programming, cloud architecture, cloud computing",
        },
        { label: "Operating systems", value: "macOS" },
        { label: "Networking", value: "SSH" },
        { label: "Tools", value: "npm" },
      ],
    },
    {
      id: "remote-service-app",
      period: "07/2018 – 02/2019",
      sector: "Industry / manufacturing",
      title: "Remote service application for a machinery company",
      summary: [
        "This project delivered a remote service web application for the support department of a machinery manufacturer.",
        "The application connected customers with support staff through chat, audio, or video while also presenting extensive customer and machine data to help diagnose issues more quickly.",
      ],
      highlights: [
        "Implemented complex Highcharts widgets to visualize machine status events on a timeline.",
        "Modularized the Angular application architecture.",
        "Established an agile development workflow in the customer team.",
      ],
      duration: "8 months",
      teamSize: "6 – 8",
      roles: ["Software Developer", "Software Architect", "Consultant"],
      stack: [
        { label: "Frameworks", value: "Highcharts, Angular, Node.js" },
        { label: "Other", value: "Angular Material" },
        {
          label: "Methods / process",
          value: "Agile methods (Scrum), RESTful architecture and web services",
        },
        { label: "Tools", value: "Jira, GitHub, npm" },
        { label: "Documentation", value: "Confluence" },
        {
          label: "Development environments",
          value: "IntelliJ, WebStorm, Visual Studio Code",
        },
        {
          label: "Programming languages",
          value: "TypeScript, JavaScript, ES6",
        },
        { label: "Operating systems", value: "macOS" },
      ],
    },
    {
      id: "railway-monitoring",
      period: "02/2017 – 05/2018",
      sector: "Rail freight",
      title: "Railway monitoring systems",
      summary: [
        "The goal of this project was to build a system that automatically analyzes the operating condition of freight wagons using high-speed cameras, microphones, and other sensors placed in and beside the tracks.",
        "Edge computing devices uploaded the data to the cloud, where it was organized and enriched before being shown in a differentiated dashboard for multiple user groups.",
      ],
      highlights: [
        "Designed the architecture for data collection, data processing, and data delivery.",
        "Improved and expanded the development workflows into a fully automated DevOps environment.",
        "Implemented a Node.js data collection app on Raspberry Pi devices used as edge computing nodes.",
        "Implemented a Docker-based Node.js backend with Express and Sequelize.",
      ],
      duration: "1 year 4 months",
      teamSize: "2 – 6",
      roles: [
        "Software Architect",
        "Subsystem Architect",
        "Software Developer",
      ],
      stack: [
        {
          label: "Frameworks",
          value: "Sequelize, ExpressJS, Node.js, Angular, Socket.IO, AngularJS",
        },
        {
          label: "Operating systems",
          value: "Balena Cloud (formerly Resin.io), macOS",
        },
        {
          label: "Cloud technologies",
          value:
            "Azure SQL, Azure App Services, Azure Container Instances, Azure Container Registry, Azure Virtual Machines, Azure",
        },
        { label: "Tools", value: "Bitbucket, Jira, DBeaver, npm" },
        { label: "Documentation", value: "Confluence" },
        {
          label: "Methods / process",
          value:
            "Agile methods (Scrum), RESTful architecture and web services, event-driven design, CI/CD, DevOps",
        },
        {
          label: "Development environments",
          value: "IntelliJ, WebStorm, IntelliJ IDEA",
        },
        {
          label: "Programming languages",
          value: "TypeScript, JavaScript, ES6",
        },
        { label: "Build tooling", value: "Buddy.Works" },
        { label: "Other", value: "Docker Compose" },
        { label: "Application server", value: "Web services" },
      ],
    },
    {
      id: "gold-trade-app",
      period: "03/2016 – 02/2017",
      sector: "Cargo transport security",
      title:
        "Application for certified gold trading in the Republic of the Congo",
      summary: [
        "This project addressed the issue of missing gold along the trading route by using plastic bags with integrated NFC chips.",
        "The chip stored the trading history and metadata of a specific quantity of gold, allowing the app to verify completeness and enable traceability for ethical certification.",
      ],
      highlights: ["Implemented NFC features.", "Built the Android UI."],
      duration: "1 year",
      teamSize: "3",
      roles: ["Software Developer"],
      stack: [
        { label: "Operating systems", value: "Android, Windows" },
        { label: "Frameworks", value: "Android 5.x" },
        { label: "Programming languages", value: "Java 7" },
        { label: "Development environments", value: "Android Studio" },
      ],
    },
    {
      id: "gps-tracking-portal",
      period: "10/2015 – 02/2017",
      sector: "Information technology",
      title: "Complete rebuild of an Android app for a GPS tracking portal",
      summary: [
        "A legacy Android client for a proprietary GPS tracking portal from ibes AG was replaced with a newly built native Android app.",
      ],
      highlights: [
        "Developed the Android UI.",
        "Defined the app architecture.",
        "Defined the API architecture.",
        "Built a custom Android component for displaying a proprietary map composed of image tiles.",
      ],
      duration: "1 year 5 months",
      teamSize: "2",
      roles: ["Software Architect", "API Architect", "Lead Developer"],
      stack: [
        { label: "Operating systems", value: "Android, Windows" },
        { label: "Development environments", value: "Android Studio" },
        {
          label: "Methods / process",
          value: "RESTful architecture and web services",
        },
      ],
    },
    {
      id: "modern-software-development",
      period: "10/2014 – 09/2016",
      sector: "Information technology",
      title: "Introduction of modern software development practices",
      summary: [
        "Introduced modern software engineering practices in an IT software company.",
      ],
      highlights: [
        "Replaced shared network drives with Git-based version control.",
        "Set up a GitLab server for company-wide source code management.",
        "Introduced Artifactory to simplify sharing code artifacts between projects.",
      ],
      duration: "2 years",
      teamSize: "2",
      roles: ["Consultant"],
      stack: [
        { label: "Tools", value: "GitLab, GitLab CI, Git" },
        { label: "Methods / process", value: "Git Flow, CI/CD" },
        { label: "Build tooling", value: "Artifactory" },
        { label: "Operating systems", value: "Linux" },
        { label: "Networking", value: "SSH" },
      ],
    },
    {
      id: "gps-raw-data-research",
      period: "10/2014 – 09/2016",
      sector: "Research",
      title: "Application development for GPS raw data processing",
      summary: [
        "Built a tool for reading and processing GPS raw data as part of a cooperation between ibes AG and the Fraunhofer Institute.",
      ],
      highlights: [
        "Built the complete application UI.",
        "Implemented several communication protocols for different GPS receivers.",
        "Implemented application logic to aggregate and transform raw GPS data into an industry-standard format.",
        "Delivered a special feature that wrote incoming data directly to disk without buffering it in RAM.",
      ],
      duration: "2 years",
      teamSize: "1",
      roles: ["Software Architect", "Software Developer"],
      stack: [
        { label: "Operating systems", value: "Windows" },
        { label: "Frameworks", value: "GPS, .NET" },
        {
          label: "Development environments",
          value: "Visual Studio 2008, Visual Studio 2010",
        },
        {
          label: "Tools",
          value: "Visual Studio 2015, ReSharper for Visual Studio",
        },
        { label: "Methods / process", value: "Event-driven design" },
        { label: "Programming languages", value: "C#, .NET 4" },
      ],
    },
  ],
};

export const localizedResumeContent: Record<ResumeLocale, ResumeContent> = {
  de: resumeDe,
  en: resumeEn,
};

export function getLocalizedResumeContent(locale: ResumeLocale = "de") {
  return localizedResumeContent[locale];
}

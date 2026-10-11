export const LANGUAGES = ['en', 'fr'];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    hero: {
      status: 'Available for new opportunities',
      role: 'Full-Stack Developer',
      stack: 'Laravel · GO . Javascript · React',
      summary:
        'Full-Stack Developer with 3+ years of experience building production web applications, APIs, integrations and cloud infrastructure. Specialized in PHP/Laravel, Node.js, React and modern backend systems.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'View my work',
      location: 'Monastir, Tunisia',
      remote: 'Open to remote',
    },
    about: {
      eyebrow: 'About',
      title: 'Building reliable products, end to end',
      intro:
        'I design, build and maintain web applications from requirements to production — backend, frontend, APIs and infrastructure. I care about systems that stay fast, secure and easy to evolve.',
      educationLabel: 'Education',
      degree: 'Master of Software Engineering',
      school: 'Higher Institute of Informatics and Mathematics of Monastir',
      eduDates: 'Sep 2021 – Dec 2023',
      eduDescription: 'Specialized in software design, development and modern web technologies.',
      stats: [
        { label: 'Production experience', text: 'Building and maintaining web applications used in production.' },
        { label: 'Multi-client delivery', text: 'CRM, e-commerce and corporate platforms for a range of clients.' },
        { label: 'Reliability', text: 'Improved uptime and stability of VPS-hosted applications.' },
        { label: 'Cost efficiency', text: 'Lower infrastructure costs through cloud optimization.' },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where I have worked',
      jobs: [
        {
          role: 'Full-Stack Developer',
          company: 'E-BUILD',
          period: 'Aug 2024 – Present',
          summary:
            'I build and evolve the web platforms client businesses run on — CRMs, online stores and corporate sites — from first requirement to production.',
          points: [
            'Deliver features end to end with Laravel and React, turning business needs into tools teams actually use.',
            'Keep client applications fast and available by hardening and monitoring VPS infrastructure, sharply reducing downtime.',
            'Connect platforms to the services businesses rely on — Stripe payments, REST APIs and third-party tools — automating manual work.',
            'Build real-time experiences with Laravel Reverb, Pusher and WebSockets, so users see updates instantly.',
            'Work directly with clients and cross-functional teams to scope, prioritize and ship what matters most.',
          ],
          tags: ['Laravel', 'React', 'Stripe', 'Laravel Reverb', 'WebSockets', 'VPS'],
        },
        {
          role: 'Backend Developer',
          company: 'SASTEC TN',
          period: 'Jun 2023 – Aug 2024',
          summary: 'Strengthened backend systems: faster media processing, leaner infrastructure and safer services.',
          points: [
            'Redesigned the media processing pipeline, making video encoding markedly faster.',
            'Migrated the cloud storage architecture, lowering monthly infrastructure costs without sacrificing reliability.',
            'Hardened security and reliability across client backend systems.',
            'Led a system migration and wrote clear API documentation that helped the team move faster.',
            'Mentored new developers, getting them productive on the team’s tools and processes quickly.',
          ],
          tags: ['Go', 'Symfony', 'HonoJS', 'GraphQL', 'FFmpeg', 'Docker', 'Kubernetes', 'Cloudflare', 'AWS S3', 'Cloudflare R2'],
        },
        {
          role: 'Freelance Developer',
          company: 'Independent',
          period: 'Jan 2021 – Present',
          summary:
            'I help businesses launch and run their web applications — one point of contact from idea to deployment.',
          points: [
            'Design, build and maintain client web applications, including e-commerce, e-learning and online ticketing platforms.',
            'Own the full project lifecycle: requirements, development, deployment and long-term maintenance.',
            'Set up secure VPS and cloud environments with authentication, access control and automated deployment pipelines.',
            'Integrate online payments and third-party services to deliver complete user journeys.',
          ],
          tags: ['Laravel', 'React', 'Vue.js', 'MySQL', 'Docker'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      description:
        'Applications and technical projects across backend systems, full-stack development, APIs and cloud infrastructure.',
      // visit: 'Visit',
      code: 'Code',
      items: [
        {
          name: 'Shopin',
          type: 'Marketplace',
          status: 'In production',
          description:
            'Marketplace platform with product management, authentication, user verification, favorites, notifications, real-time features and third-party integrations.',
          tags: ['Laravel', 'MySQL', 'REST API', 'Livewire', 'Docker'],
          url: 'https://shopin.ebuild.website',
        },
        {
          name: 'Delivery Management',
          type: 'Logistics',
          status: 'In production',
          description:
            'Logistics platform for managing shipments, delivery workflows, returns, exchanges, payment states and integrations with external delivery providers.',
          tags: ['Laravel', 'MySQL', 'REST APIs', 'Docker', 'VPS'],
        },
        {
          name: 'EduNest',
          type: 'E-learning',
          status: 'In production',
          description:
            'AI-enhanced e-learning platform built around students, instructors and courses, featuring AI-assisted flashcards, planning and personalized learning.',
          tags: ['React', 'Node.js', 'Express', 'Prisma', 'AI'],
        },
        // {
        //   name: 'Nutrixel',
        //   type: 'E-commerce',
        //   status: 'Web project',
        //   description:
        //     'E-commerce storefront for natural nutritional supplements, focused on product presentation, user experience and a clean responsive design.',
        //   tags: ['React', 'JavaScript', 'Responsive UI'],
        // },
        {
          name: 'EazyTick',
          type: 'Event ticketing',
          status: 'Web platform',
          description:
            'Event ticketing platform covering event creation, ticket sales with online payment, organizer management and QR-code based event access.',
          tags: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Online payments'],
        },
      ],
      more: {
        title: 'More on GitHub',
        description: 'Experiments, prototypes and other development projects.',
        cta: 'Browse repositories',
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools and expertise',
      groups: [
        { title: 'Backend', items: ['PHP', 'Laravel', 'Symfony', 'Go', 'Node.js', 'Express.js', 'HonoJS'] },
        { title: 'Frontend', items: ['JavaScript', 'React.js', 'Next.js', 'AngularJS'] },
        { title: 'Data & APIs', items: ['MySQL', 'Prisma', 'GraphQL', 'REST APIs', 'Swagger / OpenAPI'] },
        { title: 'Cloud & DevOps', items: ['Docker', 'AWS S3', 'Cloudflare', 'CI/CD', 'Git', 'GitHub'] },
      ],
      softTitle: 'Soft skills',
      soft: ['Leadership', 'Team collaboration', 'Mentoring', 'Problem solving', 'Communication', 'Adaptability'],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'French', level: 'Fluent' },
      ],
      extraTitle: 'Beyond work',
      extra: [
        {
          title: 'Microsoft Club – ISIMA',
          date: 'Sep 2021 – Sep 2022',
          text: 'Led training sessions in software development and computer networking for club members.',
        },
        {
          title: 'Technical blogging',
          text: 'Wrote a technical blog with tutorials, project walkthroughs and programming insights.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      text:
        "I'm open to Full-Stack, Backend and Laravel opportunities, including remote positions. If you need a developer who can build, deploy and maintain production applications, I'd be happy to talk.",
      email: 'Email me',
      linkedin: 'LinkedIn',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      locationLabel: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      language: 'Langue',
    },
    hero: {
      status: 'Disponible pour de nouvelles opportunités',
      role: 'Développeuse Full-Stack',
      stack: 'Laravel · GO · Javascript · React',
      summary:
        "Développeuse Full-Stack avec plus de 3 ans d'expérience dans la conception d'applications web en production, d'API, d'intégrations et d'infrastructures cloud. Spécialisée en PHP/Laravel, Node.js, React et systèmes backend modernes.",
      ctaPrimary: 'Me contacter',
      ctaSecondary: 'Voir mes projets',
      location: 'Monastir, Tunisie',
      remote: 'Ouverte au télétravail',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Des produits fiables, de bout en bout',
      intro:
        "Je conçois, développe et maintiens des applications web, du recueil des besoins à la mise en production : backend, frontend, API et infrastructure. Je privilégie des systèmes rapides, sécurisés et faciles à faire évoluer.",
      educationLabel: 'Formation',
      degree: 'Master en Génie Logiciel',
      school: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
      eduDates: 'Sep 2021 – Déc 2023',
      eduDescription: 'Spécialisation en conception logicielle, développement et technologies web modernes.',
      stats: [
        { label: 'Expérience en production', text: "Conception et maintenance d'applications web utilisées en production." },
        { label: 'Projets multi-clients', text: 'CRM, plateformes e-commerce et sites corporate pour différents clients.' },
        { label: 'Fiabilité', text: 'Disponibilité et stabilité accrues des applications hébergées sur VPS.' },
        { label: 'Maîtrise des coûts', text: "Coûts d'infrastructure réduits grâce à l'optimisation cloud." },
      ],
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Parcours professionnel',
      jobs: [
        {
          role: 'Développeuse Full-Stack',
          company: 'E-BUILD',
          period: 'Août 2024 – Présent',
          summary:
            "Je conçois et fais évoluer les plateformes web sur lesquelles reposent les activités de nos clients — CRM, boutiques en ligne et sites corporate — du premier besoin à la mise en production.",
          points: [
            'Livraison de fonctionnalités de bout en bout avec Laravel et React, transformant les besoins métier en outils réellement adoptés.',
            'Fiabilisation et supervision des infrastructures VPS pour des applications clients rapides et disponibles, avec une indisponibilité fortement réduite.',
            'Connexion des plateformes aux services essentiels — paiements Stripe, API REST et outils tiers — pour automatiser les tâches manuelles.',
            "Conception d'expériences temps réel avec Laravel Reverb, Pusher et WebSockets : les utilisateurs voient les mises à jour instantanément.",
            "Collaboration directe avec les clients et les équipes pluridisciplinaires pour cadrer, prioriser et livrer l'essentiel.",
          ],
          tags: ['Laravel', 'React', 'Stripe', 'Laravel Reverb', 'WebSockets', 'VPS'],
        },
        {
          role: 'Développeuse Backend',
          company: 'SASTEC TN',
          period: 'Juin 2023 – Août 2024',
          summary: 'Renforcement des systèmes backend : traitement média plus rapide, infrastructure allégée et services plus sûrs.',
          points: [
            "Refonte du pipeline de traitement média, rendant l'encodage vidéo nettement plus rapide.",
            "Migration de l'architecture de stockage cloud, réduisant les coûts d'infrastructure mensuels sans compromettre la fiabilité.",
            'Renforcement de la sécurité et de la fiabilité des systèmes backend clients.',
            "Pilotage d'une migration système et rédaction d'une documentation API claire qui a accéléré le travail de l'équipe.",
            "Mentorat des nouveaux développeurs, rapidement opérationnels sur les outils et processus de l'équipe.",
          ],
          tags: ['Go', 'Symfony', 'HonoJS', 'GraphQL', 'FFmpeg', 'Docker', 'Kubernetes', 'Cloudflare', 'AWS S3', 'Cloudflare R2'],
        },
        {
          role: 'Développeuse Freelance',
          company: 'Indépendante',
          period: 'Jan 2021 – Présent',
          summary:
            "J'accompagne les entreprises dans le lancement et la gestion de leurs applications web — un interlocuteur unique, de l'idée au déploiement.",
          points: [
            "Conception, développement et maintenance d'applications web clients : e-commerce, e-learning et billetterie en ligne.",
            'Gestion complète des projets : recueil des besoins, développement, déploiement et maintenance sur le long terme.',
            "Mise en place d'environnements VPS et cloud sécurisés, avec authentification, gestion des accès et pipelines de déploiement automatisés.",
            'Intégration du paiement en ligne et de services tiers pour des parcours utilisateurs complets.',
          ],
          tags: ['Laravel', 'React', 'Vue.js', 'MySQL', 'Docker'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Réalisations choisies',
      description:
        'Applications et projets techniques couvrant les systèmes backend, le développement full-stack, les API et l’infrastructure cloud.',
      // visit: 'Voir',
      code: 'Code',
      items: [
        {
          name: 'Shopin',
          type: 'Marketplace',
          status: 'En production',
          description:
            'Plateforme marketplace avec gestion des produits, authentification, vérification des utilisateurs, favoris, notifications, temps réel et intégrations tierces.',
          tags: ['Laravel', 'MySQL', 'REST API', 'Livewire', 'Docker'],
          url: 'https://shopin.ebuild.website',
        },
        {
          name: 'Delivery Management',
          type: 'Logistique',
          status: 'En production',
          description:
            'Plateforme logistique pour gérer les expéditions, les flux de livraison, les retours, les échanges, les statuts de paiement et les intégrations avec des transporteurs externes.',
          tags: ['Laravel', 'MySQL', 'REST APIs', 'Docker', 'VPS'],
        },
        {
          name: 'EduNest',
          type: 'E-learning',
          status: 'En production',
          description:
            "Plateforme e-learning enrichie par l'IA, pensée pour les étudiants, les formateurs et les cours, avec flashcards, planification et apprentissage personnalisé assistés par IA.",
          tags: ['React', 'Node.js', 'Express', 'Prisma', 'IA'],
        },
        // {
        //   name: 'Nutrixel',
        //   type: 'E-commerce',
        //   status: 'Projet web',
        //   description:
        //     "Boutique en ligne de compléments nutritionnels naturels, axée sur la présentation des produits, l'expérience utilisateur et un design responsive épuré.",
        //   tags: ['React', 'JavaScript', 'UI responsive'],
        // },
        {
          name: 'EazyTick',
          type: 'Billetterie',
          status: 'Plateforme web',
          description:
            "Plateforme de billetterie couvrant la création d'événements, la vente de billets avec paiement en ligne, la gestion des organisateurs et le contrôle d'accès par QR code.",
          tags: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Paiement en ligne'],
        },
      ],
      more: {
        title: 'Plus sur GitHub',
        description: 'Expérimentations, prototypes et autres projets de développement.',
        cta: 'Voir les dépôts',
      },
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Outils et expertise',
      groups: [
        { title: 'Backend', items: ['PHP', 'Laravel', 'Symfony', 'Go', 'Node.js', 'Express.js', 'HonoJS'] },
        { title: 'Frontend', items: ['JavaScript', 'React.js', 'Next.js', 'AngularJS'] },
        { title: 'Données & API', items: ['MySQL', 'Prisma', 'GraphQL', 'REST APIs', 'Swagger / OpenAPI'] },
        { title: 'Cloud & DevOps', items: ['Docker', 'AWS S3', 'Cloudflare', 'CI/CD', 'Git', 'GitHub'] },
      ],
      softTitle: 'Savoir-être',
      soft: ['Leadership', "Travail d'équipe", 'Mentorat', 'Résolution de problèmes', 'Communication', 'Adaptabilité'],
      languagesTitle: 'Langues',
      languages: [
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Anglais', level: 'Courant' },
        { name: 'Français', level: 'Courant' },
      ],
      extraTitle: 'En dehors du travail',
      extra: [
        {
          title: 'Microsoft Club – ISIMA',
          date: 'Sep 2021 – Sep 2022',
          text: 'Animation de sessions de formation en développement logiciel et réseaux informatiques pour les membres du club.',
        },
        {
          title: 'Blog technique',
          text: "Rédaction d'un blog technique : tutoriels, retours d'expérience et réflexions sur le développement.",
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons ensemble',
      text:
        "Je suis ouverte aux opportunités Full-Stack, Backend et Laravel, y compris en télétravail. Si vous cherchez une développeuse capable de concevoir, déployer et maintenir des applications en production, échangeons.",
      email: "M'écrire",
      linkedin: 'LinkedIn',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      locationLabel: 'Localisation',
    },
    footer: {
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut',
    },
  },
};

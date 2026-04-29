// ─────────────────────────────────────────────────────────────
// KRISHNA PATEL PORTFOLIO — CONTENT DATA
// All structured content for the portfolio, centralized here
// ─────────────────────────────────────────────────────────────

// ─── VENTURES ──────────────────────────────────────────────────

export interface Venture {
  name: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  tags: string[];
  featured?: boolean;
  category: 'tech' | 'science' | 'media' | 'agriculture' | 'energy';
  image?: string;
  link?: string;
}

export const VENTURES: Venture[] = [
  {
    name: 'The Utility Company, LLC',
    image: '/images/medallions/tuc.png',
    role: 'Founder',
    period: '2021 – Present',
    location: 'Albuquerque, NM',
    description:
      'Holding company and infrastructure for a proposed network state. Parent entity for a constellation of subsidiaries innovating across blockchain, manufacturing, agriculture, real estate, sports, and creative economies.',
    details: [
      'Architected and implemented the technical foundation for a decentralized Network State, overseeing 10+ active subsidiaries.',
      'Authored the complete codebase for proprietary blockchain resource management protocols and digital governance frameworks.',
      'Published and distributed "The Utility Network" book series (8 volumes) establishing the theoretical physics and economics of the ecosystem.',
      'Actively maintain an ecosystem of over 60 GitHub repositories across all enterprise and Web3 subsidiaries.',
    ],
    tags: ['Blockchain', 'Infrastructure', 'Network State', 'Publishing', 'Holding Company'],
    featured: true,
    category: 'tech',
    link: 'https://theutilitycompany.co',
  },
  {
    name: 'BasaltHQ',
    image: 'https://storage.googleapis.com/tgl_cdn/images/Medallions/BasaltM.png',
    role: 'Founder & Chairman',
    period: '2023 – Present',
    location: 'Albuquerque, NM',
    description:
      'AI-Assisted Universal ERP Platform empowering Main Street with Fortune 500 technology. Four integrated products serving diverse business verticals.',
    details: [
      'Engineered the entire multi-tenant SaaS architecture from scratch using Next.js, MongoDB, and Tailwind CSS.',
      'Built production-grade multi-agent AI systems (AutoGen v0.4) and low-latency WebRTC voice agents for enterprise ERP/CRM.',
      'Developed and deployed the BasaltSurge Web3 commerce protocol and BasaltVigil AI legal-ops platform.',
      'Single-handedly manage the continuous integration and full-stack deployment pipelines across the entire product suite.',
    ],
    tags: ['Next.js', 'AutoGen v0.4', 'WebRTC', 'MongoDB', 'Solidity', 'Thirdweb'],
    featured: true,
    category: 'tech',
    link: 'https://basalthq.com',
  },
  {
    name: 'Imursi Ethomics, LLC',
    image: '/imursi-symbol-logo.png',
    role: 'Founder',
    period: '2019 – Present',
    location: 'Albuquerque, NM',
    description:
      'Developing high-throughput behavior tracking systems using video and ultrasound for biological research. Building tools for the next generation of ethomics.',
    details: [
      'Designed, 3D-printed, and assembled custom hardware devices for high-throughput Drosophila behavioral tracking.',
      'Wrote Python and R-based software architectures for real-time tracking (Ethoscope) and closed-loop virtual reality (PiVR).',
      'Engineered a programmable peristaltic pump system for precise, automated pharmacological delivery in biological experiments.',
      'Integrated comprehensive data pipelines leveraging machine vision and Rethomics for large-scale academic research.',
    ],
    tags: ['Ethoscope', 'PiVR', 'Python', 'Raspberry Pi', 'R', 'Rethomics'],
    featured: true,
    category: 'science',
  },
  {
    name: 'Requiem Electric, LLC',
    image: '/images/medallions/requiem-electric.png',
    role: 'Founder',
    period: '2022 – Present',
    location: 'Albuquerque, NM',
    description:
      'Designs, installs, and operates renewable energy and electric vehicle charging systems for commercial and multi-family residential clients.',
    details: [
      'Developed a smart-contract-enabled cooperative framework for decentralized electric vehicle (EV) charging networks.',
      'Led the technical design and physical installation of renewable solar and EV infrastructure for commercial real estate.',
      'Programmed custom smart contracts to manage cooperative yield distribution and stakeholder equity.',
    ],
    tags: ['Renewable Energy', 'EV Charging', 'Solar'],
    featured: false,
    category: 'energy',
    link: 'https://theutilitycompany.co/requiem-electric',
  },
  {
    name: 'Cornucopia Robotics',
    image: '/images/medallions/cornucopia.png',
    role: 'Founder',
    period: 'Current',
    location: 'Albuquerque, NM',
    description:
      'Automated agriculture solutions for home and neighborhood use — robots capable of planting, monitoring soil, mulching, watering, fertilizing, and harvesting.',
    details: [
      'Architected the hardware and software foundations for autonomous, neighborhood-scale agricultural robotics.',
      'Built custom IoT sensor arrays and automated control systems for planting, soil monitoring, mulching, and harvesting.',
      'Developed the complete codebase for remote telemetry and robotics orchestration.',
    ],
    tags: ['Robotics', 'Agriculture', 'Automation', 'IoT'],
    featured: false,
    category: 'agriculture',
    link: 'https://theutilitycompany.co/cornucopia-robotics',
  },
  {
    name: 'The Loch Ness Botanical Society',
    image: '/images/medallions/loch-ness.png',
    role: 'Founder',
    period: 'Current',
    location: 'Albuquerque, NM',
    description:
      'Using molecular and genetic techniques to fine-tune botanicals for specific use-cases, providing access to the full gradient of genetic expression.',
    details: [
      'Developed an on-chain agricultural yield appropriation system leveraging blockchain for transparent spot sponsorship.',
      'Engineered precision hydroponic and aquaponic hardware systems, including automated shallow water culture (SWC) rigs.',
      'Programmed comprehensive tracking software for fine-tuning the genetic expression and molecular profiles of botanicals.',
    ],
    tags: ['Molecular Biology', 'Genetics', 'Botanicals'],
    featured: false,
    category: 'agriculture',
    link: 'https://thelochnessbotanicalsociety.com',
  },
  {
    name: 'The Graine Ledger, LLC',
    image: '/images/medallions/graine-ledger.png',
    role: 'Founder',
    period: '2022 – Present',
    location: 'Albuquerque, NM',
    description:
      'Leveraging genetic technologies to unlock the potential of yeast in distilling, defining chemical compounds to study structures and effects on spirits.',
    details: [
      'Created a tokenized, automated distillery platform allowing stakeholders to customize whiskey barrel yields via NFTs.',
      'Wrote all smart contracts governing fractional ownership, provenance tracking, and automated fulfillment.',
      'Integrated fermentation tracking software to study the chemical structures and effects of genetic yeast variations.',
    ],
    tags: ['Fermentation', 'Genetics', 'Chemistry'],
    featured: false,
    category: 'science',
    link: 'https://thegraineledger.com',
  },
  {
    name: "Teacher's Pet LLC",
    image: '/TpLogoV2Small.png',
    role: 'Founder & COO',
    period: '2014 – Present',
    location: 'Remote / Albuquerque',
    description:
      'Developing ML-driven apps to automate narrative-based progress reporting for educators. Wrote v1 backend in Python on Google Cloud App Engine.',
    details: [
      'Built the version 1.0 backend architecture from scratch using Python on Google Cloud App Engine.',
      'Developed machine learning and natural language generation (NLG) models to automate narrative-based progress reporting for educators.',
      'Scaled the infrastructure to support automated Individualized Education Program (IEP) generation.',
    ],
    tags: ['Python', 'NLG', 'ML', 'Google Cloud', 'EdTech'],
    featured: false,
    category: 'tech',
    link: 'https://software4teachers.com',
  },
  {
    name: 'Arthaneeti',
    image: '/images/medallions/arthaneeti.png',
    role: 'Founder',
    period: '2022 – Present',
    location: 'Albuquerque, NM',
    description:
      'An AI-powered platform designed for meaningful political and social engagement, leveraging NFTs for transparent governance and civic participation.',
    details: [
      'Architected an AI-powered platform designed to facilitate transparent political and social engagement.',
      'Wrote and deployed NFT-based civic engagement smart contracts and decentralized governance frameworks.',
      'Developed custom AI-driven policy analysis tools to track and synthesize legislative data.',
    ],
    tags: ['AI', 'NFT', 'Civic Tech', 'Governance'],
    featured: false,
    category: 'tech',
    link: 'https://arthaneeti.org',
  },
  {
    name: 'Osiris Protocol',
    image: '/images/medallions/osiris.png',
    role: 'Founder',
    period: '2023 – Present',
    location: 'Albuquerque, NM',
    description:
      'Enterprise-grade blockchain infrastructure providing onchain data pipelines, prediction markets, and token launch platforms via the OsirisFlow AMM and OsirisBond staking system.',
    details: [
      'Engineered an enterprise-grade blockchain infrastructure suite, including the OsirisFlow AMM and OsirisBond staking systems.',
      'Wrote the complete Solidity smart contract architecture for on-chain prediction markets and the Ma\'at reputation protocol.',
      'Developed the SpawnCamp token launchpad, featuring complex application builders and industry-leading anti-predatory mechanics.',
      'Currently maintain the expansive suite of Web3 SDKs and administrative dashboards on GitHub.',
    ],
    tags: ['Solidity', 'DeFi', 'AMM', 'Staking', 'Prediction Markets'],
    featured: false,
    category: 'tech',
    link: 'https://osirisprotocol.org',
  },
  {
    name: 'Vulcan Forge',
    image: '/images/medallions/vulcan-forge.png',
    role: 'Founder',
    period: '2022 – Present',
    location: 'Albuquerque, NM',
    description:
      'Revolutionizing manufacturing with tokenized 3D printing and distributed production networks. Enables decentralized fabrication and supply chain management.',
    details: [
      'Developed a decentralized fabrication protocol enabling tokenized 3D printing across a distributed production network.',
      'Built custom integrations between blockchain provenance tracking systems and physical 3D printing hardware.',
      'Programmed supply chain management interfaces to automate manufacturing order fulfillment and tracking.',
    ],
    tags: ['3D Printing', 'Manufacturing', 'Blockchain', 'Supply Chain'],
    featured: false,
    category: 'tech',
    link: 'https://theutilitycompany.co/vulcan-forge',
  },
  {
    name: 'Elysium Athletica',
    image: '/images/medallions/elysium.png',
    role: 'Founder',
    period: '2023 – Present',
    location: 'Albuquerque, NM',
    description:
      'Next-generation sports ecosystem focused on tokenized operations, athlete management, and immersive AR experiences for fans and stakeholders.',
    details: [
      'Created a next-generation sports ecosystem by writing smart contracts for tokenized athlete operations and sponsorships.',
      'Developed immersive Augmented Reality (AR) experiences for fan engagement using modern web technologies.',
      'Built the underlying data pipelines to integrate real-time sports analytics with the blockchain ecosystem.',
    ],
    tags: ['Sports Tech', 'AR', 'NFT', 'Fan Engagement'],
    featured: false,
    category: 'tech',
    link: 'https://theutilitycompany.co/elysium-athletica',
  },
  {
    name: 'DigiBazaar',
    image: '/images/medallions/digibazaar.png',
    role: 'Founder',
    period: '2022 – Present',
    location: 'Albuquerque, NM',
    description:
      'The home of the creative revolution — an NFT marketplace featuring the $2 sweep mechanism for democratic asset discovery and the democratization of digital art ownership.',
    details: [
      'Architected and deployed a comprehensive NFT marketplace featuring a proprietary $2 sweep mechanism for asset discovery.',
      'Wrote all frontend interfaces and backend smart contracts to ensure a secure, creator-first digital art platform.',
      'Implemented decentralized curation systems to democratize digital asset ownership.',
    ],
    tags: ['NFT', 'Marketplace', 'Digital Art', 'Web3'],
    featured: false,
    category: 'tech',
    link: 'https://theutilitycompany.co/digibazaar',
  },
  {
    name: 'Hyperion Realty',
    image: 'https://storage.googleapis.com/tgl_cdn/images/Medallions/HR.png',
    role: 'Founder',
    period: '2023 – Present',
    location: 'Albuquerque, NM',
    description:
      'A sovereign wealth-grade real estate acquisition protocol tokenizing physical commercial assets for fractional ownership and decentralized property management.',
    details: [
      'Developed a sovereign wealth-grade real estate acquisition protocol for tokenizing physical commercial assets.',
      'Programmed the fractional ownership smart contracts and decentralized property management dashboards.',
      'Established the technical foundation to bridge physical real estate transactions with on-chain liquidity.',
    ],
    tags: ['Real Estate', 'Tokenization', 'RWA', 'DeFi'],
    featured: false,
    category: 'tech',
    link: 'https://hyperion.theutilitycompany.co',
  },
];

// ─── MEDIA & FILM ──────────────────────────────────────────────

export interface MediaEntry {
  name: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export const MEDIA_ENTRIES: MediaEntry[] = [
  {
    name: 'RevoVision',
    role: 'CEO & Founder',
    period: '2014',
    location: 'Mumbai, India',
    description:
      'Boutique media agency focusing on international content trading. Produced press kits, analyzed marketplaces, worked with A-List Bollywood talent.',
  },
  {
    name: 'Sahara Pariwar India',
    role: 'Presenter',
    period: '2011',
    location: 'London, UK',
    description:
      'Presented plan for international broadcast content format trading division.',
  },
  {
    name: 'Krishna Patel Design & Photography',
    role: 'Freelance',
    period: '2011 – 2021',
    location: 'Mumbai / Albuquerque',
    description:
      'A decade of graphic design, web development, animation, and photography for diverse clients.',
  },
  {
    name: 'Vijay Amritraj Foundation Gala 2010',
    role: 'Producer & Technical Director',
    period: '2010 – 2011',
    location: 'Los Angeles, CA',
    description:
      'Designed execution of live taping — tennis matches and Beach Boys concert. Coordinated technical crews, camera, lighting, and sound.',
  },
  {
    name: '2Change Films / Avang Music',
    role: 'Creative Director',
    period: '2009 – 2010',
    location: 'Los Angeles, CA',
    description: 'Produced 150 music videos. Managed schedule, budget, and creative concepts.',
  },
  {
    name: 'Godboy',
    role: 'Producer & Director',
    period: '2008 – 2009',
    location: 'Houston, TX',
    description:
      'Arranged financing and managed all aspects of production. Completed pre-production in 3 weeks; marketed finished production.',
  },
  {
    name: 'PBS — Hurricane Katrina Documentary',
    role: 'Assistant Producer & Supervising Editor',
    period: '2006',
    location: 'New Orleans, LA',
    description:
      '30-minute documentary on Jazz artists after Hurricane Katrina. Monitored live broadcasts and oversaw post-production.',
  },
  {
    name: 'NIW Films',
    role: 'Producer & Technical Director',
    period: '2006 – 2007',
    location: 'Houston, TX',
    description:
      'Multi-camera productions of local sports teams. Two award-winning short films.',
  },
];

// ─── PUBLICATIONS ──────────────────────────────────────────────

export interface Publication {
  title: string;
  subtitle: string;
  series: 'utility-network' | 'meditations' | 'cinema' | 'epic' | 'academic';
  description: string;
  keyConcepts: string[];
  audience: string;
  color: string;
  cover?: string;
  link?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'The Master Work Function',
    cover: '/images/covers/master-work-function.jpeg',
    subtitle: 'A Scalar Potential for Hybrid Human–Machine Meaningful Work',
    series: 'utility-network',
    description:
      'A comprehensive technical treatise synthesizing mathematical economics, control theory, and philosophy to derive a scalar potential for Meaningful Work. Presents a 10-dimensional state space model for optimizing human-AI coexistence.',
    keyConcepts: ['Scalar Potential Theory', 'Hybrid Optimization', 'Mechanism Design'],
    audience: 'Economists, Systems Engineers, AI Researchers',
    color: '#3DD8B0',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'The Work Worth Doing',
    cover: '/images/covers/work-worth-doing.jpeg',
    subtitle: 'A Book for Everyone About Meaningful Work in the Age of AI',
    series: 'utility-network',
    description:
      'Translates The Master Work Function into a practical manifesto for every professional navigating the AI revolution. Introduces the 6-Dimension Meaning Framework and the Normie Manifesto.',
    keyConcepts: ['6-Dimension Framework', 'Normie Manifesto', 'Future-Proofing'],
    audience: 'Professionals, Students, Career Changers',
    color: '#0EA5E9',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Neuro-Mimetic Architecture',
    cover: '/images/covers/neuro-mimetic.jpeg',
    subtitle: 'Culturing the Autonomous Conglomerate',
    series: 'utility-network',
    description:
      'A radical alternative to corporate hierarchies: organizations modeled after the human brain. Details the Autonomous Conglomerate using neurobiology, graph signal processing, chaos theory, and blockchain.',
    keyConcepts: ['Bio-Inspired Design', 'Dragonfly Paradigm', 'Blockchain Nervous System'],
    audience: 'DAO Architects, Complexity Scientists, Strategists',
    color: '#8B5CF6',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Growing Companies Like Brains',
    cover: '/images/covers/growing-companies.jpeg',
    subtitle: 'The Biological Path to Infinite Scale',
    series: 'utility-network',
    description:
      'The narrative companion to Neuro-Mimetic Architecture. Uses neurodevelopment as metaphor for corporate growth through childhood, adolescence, and maturity phases.',
    keyConcepts: ['Tri-Phasic Dynamics', 'Culturing Culture', 'The Infinite Game'],
    audience: 'Founders, CEOs, Venture Capitalists',
    color: '#F59E0B',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Dynamic Phenomenology',
    cover: '/images/covers/dynamic-phenomenology.jpeg',
    subtitle: 'A Nine-Order Architecture of Experience',
    series: 'utility-network',
    description:
      'Maps consciousness using nine orders of temporal derivatives — from position through schizoanalysis. A formal system for understanding the dynamics of being human, integrating phenomenology, physics, and Eastern wisdom.',
    keyConcepts: ['Nine Orders', 'Attention as Practice', 'Integration with Physics'],
    audience: 'Philosophers, Consciousness Researchers, Systems Thinkers',
    color: '#EC4899',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'The Post-Scarcity Manifesto',
    cover: '/images/covers/post-scarcity.jpeg',
    subtitle: 'A Grand Synthesis',
    series: 'utility-network',
    description:
      'The magnum opus. Weaves together the mathematical rigor of the MWF, institutional architecture of NMA, and phenomenological depth of DP into a unified vision for civilization beyond scarcity.',
    keyConcepts: ['Scarcity Operating System', 'Post-Labor Architecture', 'Transformation Roadmap'],
    audience: 'Policy Makers, Futurists, Systems Architects',
    color: '#EF4444',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Imperial Topographies',
    cover: '/images/covers/imperial-topographies.jpeg',
    subtitle: "Milton's Paradise Lost and the Architecture of British Dominion",
    series: 'meditations',
    description:
      "Traces the arc from Milton's vision of obedience, hierarchy, and redemption to its embodiment in the pedagogical systems of the British Raj. Shows how literary form becomes political force.",
    keyConcepts: ['Topography as Ideology', 'The Arminian Turn', 'Pedagogy and Power'],
    audience: 'Literary Scholars, Historians of Empire, Postcolonial Theorists',
    color: '#D97706',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'American Transcendentalism',
    cover: '/images/covers/american-transcendentalism.jpeg',
    subtitle: 'A Meditation for the Age of Machines',
    series: 'meditations',
    description:
      'Emerson, Thoreau, and the Blockchain. A synthesis of Dynamic Phenomenology, symbolic interactionism, and technological realities — exploring how to reclaim agency in an age of algorithmic control.',
    keyConcepts: ['The Neon Cage', 'The Symbolic Order', 'Solarpunk Horizon'],
    audience: 'Philosophers, Technologists, Community Organizers',
    color: '#10B981',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Mantri (मंत्री)',
    cover: '/images/covers/mantri.jpeg',
    subtitle: 'A Political Thriller',
    series: 'cinema',
    description:
      'A Home Minister captured by militants is forced to relive memories of those his policies harmed. Structured as a mainstream Hindi cinema screenplay with six original songs and trilingual dialogue.',
    keyConcepts: ['Memory Extraction', 'Political Drama', 'Bollywood Format'],
    audience: 'Producers, Directors, Film Students',
    color: '#F97316',
    link: 'https://shop.theutilitycompany.co',
  },
  {
    title: 'Atlantis',
    cover: '/images/covers/atlantis.png',
    subtitle: 'An Epic in Three Books',
    series: 'epic',
    description:
      "4,700 lines of Miltonic blank verse spanning from before the Big Bang to the transformation of human destiny. Follows the corruption of Aethon, the discovery of Lyra, and the secret history of humanity's cosmic origin.",
    keyConcepts: ['Miltonic Blank Verse', 'Numerological Structure', 'Cosmic Scope'],
    audience: 'Lovers of Epic Poetry, Science Fiction Readers, Milton Enthusiasts',
    color: '#6366F1',
    link: 'https://shop.theutilitycompany.co',
  },
];

// ─── ACADEMIC ──────────────────────────────────────────────────

export interface AcademicEntry {
  type: 'publication' | 'presentation' | 'poster' | 'lecture';
  title: string;
  venue: string;
  date: string;
  description: string;
  doi?: string;
  authors?: string;
  link?: string;
}

export const ACADEMIC_ENTRIES: AcademicEntry[] = [
  {
    type: 'publication',
    title: 'The Master Work Function: A Scalar Potential for Hybrid Human–Machine Meaningful Work',
    venue: 'engrXiv (OSF Preprints)',
    date: 'April 2025',
    description: 'A mathematical and theoretical preprint introducing the Master Work Function, a 10-dimensional state space model and scalar potential designed to quantify and optimize meaningful work in human-AI hybrid systems.',
    doi: '10.31224/4530',
    link: 'https://doi.org/10.31224/4530',
  },
  {
    type: 'publication',
    title:
      'Stem cell-specific ecdysone signaling regulates the development and function of a Drosophila sleep homeostat',
    venue: 'Current Biology',
    date: '2024',
    description:
      'Published research on stem cell ecdysone signaling and sleep homeostasis in Drosophila melanogaster.',
    doi: 'S0960-9822(24)01231-4',
    authors: 'Wani, A.R., Chowdhury, B., Luong, J., Chaya, G.M., Patel, K., et al.',
    link: 'https://www.cell.com/current-biology/fulltext/S0960-9822(24)01231-4',
  },
  {
    type: 'lecture',
    title: 'Open-source research tools and ethomics',
    venue: 'Pueblo Brain Science Workshop (Zia Pueblo / Albuquerque)',
    date: 'May 2022',
    description:
      'Lectured on open-source tools for behavioral neuroscience research to diverse audience of researchers and students.',
  },
  {
    type: 'presentation',
    title: 'Transcription factor AP-2 and sleep behavior in Drosophila',
    venue: 'Biochemistry & Molecular Biology Research Day',
    date: 'May 2022',
    description:
      'Presented original research on the role of AP-2 transcription factor in regulating sleep behavior.',
  },
  {
    type: 'poster',
    title: 'Therapeutic applications of CRISPR-Cas9',
    venue: 'Genetics Poster Presentation',
    date: 'May 2019',
    description:
      'Explored current and future therapeutic applications of CRISPR-Cas9 gene editing technology.',
  },
  {
    type: 'presentation',
    title: 'Changes in male attraction after experiencing vaginal birth',
    venue: 'United Sociologists of the Valley',
    date: 'July 2016',
    description: 'Early research exploring intersections of biology and social behavior.',
  },
];

// ─── EDUCATION ─────────────────────────────────────────────────

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  honors?: string[];
  description?: string;
}

export const EDUCATION: Education[] = [
  {
    degree: 'Ph.D. in Mechanical Engineering & Biology (Neuroscience)',
    institution: 'University of New Mexico',
    location: 'Albuquerque, NM',
    year: '2022 – 2023',
    description:
      'Interdisciplinary research focused on reservoir computing, synchronization, and chaos theory. Discontinued to pursue entrepreneurial ventures.',
  },
  {
    degree: 'Bachelor of Science in Biochemistry',
    institution: 'University of New Mexico',
    location: 'Albuquerque, NM',
    year: '2022',
    honors: [
      'Summa Cum Laude',
      'Richard B. Loftfield Award for exemplary research',
      'Top of graduating class',
    ],
  },
  {
    degree: 'Bachelor of Arts in English Studies',
    institution: 'University of New Mexico',
    location: 'Albuquerque, NM',
    year: '2022',
    honors: [
      'Summa Cum Laude',
      'Elsie and James Demas Scholarship',
      'Top of graduating class',
    ],
  },
  {
    degree: 'Conservatory in Film Direction',
    institution: 'New York Film Academy',
    location: 'Los Angeles, CA',
    year: '2010',
  },
  {
    degree: 'Associates in Creative Arts',
    institution: 'Whistling Woods International',
    location: 'Mumbai, India',
    year: '',
  },
];

// ─── SKILLS ────────────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    name: 'Programming & Data',
    skills: [
      'Python', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'MongoDB',
      'PostgreSQL', 'MATLAB', 'R / Rethomics', 'Solidity', 'Smart Contracts',
    ],
  },
  {
    name: 'Cloud & AI',
    skills: [
      'Google Cloud', 'OpenAI API', 'Docker', 'AutoGen v0.4',
      'WebRTC Voice AI', 'Claude', 'Local LLMs', 'Generative Art',
    ],
  },
  {
    name: 'Hardware & Scientific',
    skills: [
      '3D Printing (FDM & Resin)', 'Laser CNC', 'Blender (3D Modeling)',
      'Ethoscope', 'PiVR', 'DAM System', 'Flywire Connectome',
      'Bioinformatics (Chimera)',
    ],
  },
  {
    name: 'Creative & Media',
    skills: [
      'Adobe Suite', 'Final Cut Pro', 'Logic Pro', 'After Effects',
      'Unreal Engine', 'Motion', 'InDesign', 'Premiere Pro',
    ],
  },
];

// ─── BUILDS ────────────────────────────────────────────────────

export interface Build {
  title: string;
  category: string;
  description: string;
  specs: string[];
  image?: string;
  images?: string[];
  videos?: string[];
}

export const BUILDS: Build[] = [
  {
    title: 'Ethoscope Array',
    category: 'Neuroscience',
    description:
      'High-throughput Drosophila behavior and sleep tracking system. Ethoscopes use machine vision and real-time tracking for long-duration experiments with minimal manual intervention.',
    specs: [
      'Raspberry Pi-based tracking units',
      'Infrared illumination for dark-cycle recording',
      'Machine vision tracking algorithms',
      'Multi-unit parallel experiment support',
    ],
    images: [
      '/images/ethoscopes/IMG_1020.JPEG',
      '/images/ethoscopes/IMG_1477.JPG',
      '/images/ethoscopes/IMG_2043.jpeg',
      '/images/ethoscopes/IMG_2145.jpg',
      '/images/ethoscopes/IMG_2146.jpg',
      '/images/ethoscopes/IMG_2996.JPEG',
    ],
  },
  {
    title: 'PiVR System',
    category: 'Neuroscience',
    description:
      'Raspberry Pi Virtual Reality system for closed-loop optogenetic and thermogenetic experiments on freely moving insects. Enables real-time stimulus delivery based on animal position.',
    specs: [
      'Real-time animal tracking at 30+ fps',
      'Closed-loop LED/thermal stimulus delivery',
      'Custom 3D-printed enclosures',
      'Python control software',
    ],
    images: [
      '/images/pivr/IMG_2920.JPEG',
      '/images/pivr/7E3DAE6F-5EE6-4A3D-A59B-8195097572F7.JPEG',
      '/images/pivr/Figure Final.PNG',
    ],
    videos: [
      '/images/pivr/moonwalkers.mp4',
    ],
  },
  {
    title: 'Peristaltic Pump System',
    category: 'Lab Engineering',
    description:
      'Custom-built peristaltic pump for precise fluid delivery in biological experiments. Designed for controlled drug administration in ethomics setups.',
    specs: [
      'Stepper motor-driven peristalsis',
      'Programmable flow rate control',
      'Arduino/RPi microcontroller interface',
      'Multi-channel capability',
    ],
    videos: [
      '/images/peristalticpump/pump_demo.mp4',
      '/images/peristalticpump/IMG_5332.mp4',
    ],
  },
  {
    title: 'Shallow Water Culture Grow',
    category: 'Agriculture',
    description:
      'Hydroponic shallow water culture (SWC) system for cannabis vegetation. Optimized for root oxygenation, nutrient uptake, and rapid vegetative growth.',
    specs: [
      'Aerated nutrient reservoir',
      'Net pot suspension system',
      'pH and EC monitoring',
      'LED grow lighting integration',
    ],
    images: [
      '/images/swc/IMG_1418.JPEG',
      '/images/swc/IMG_1773.JPEG',
    ],
    videos: [
      '/images/swc/IMG_0420_web.mp4',
      '/images/swc/IMG_0423_web.mp4',
      '/images/swc/IMG_0425_web.mp4',
      '/images/swc/IMG_0432_web.mp4',
      '/images/swc/IMG_0433_web.mp4',
      '/images/swc/IMG_0435_web.mp4',
      '/images/swc/IMG_1418.mp4',
      '/images/swc/IMG_1773.mp4',
    ],
  },
  {
    title: 'Seedling Propagation Station',
    category: 'Agriculture',
    description:
      'Controlled-environment seedling propagation system for starting clones and seedlings under optimized light, humidity, and temperature conditions before transplanting to vegetative growth systems.',
    specs: [
      'Humidity dome propagation trays',
      'T5 fluorescent and LED lighting',
      'Temperature-controlled heating mats',
      'Misting and clone nutrient protocols',
    ],
    videos: [
      '/images/seedlingprop/IMG_1056.mp4',
    ],
  },
  {
    title: 'Microtubule Cymatic Reservoir Computer',
    category: 'Unconventional Computing',
    description:
      'A GPU-native, neuroplastic Language Reservoir Model (LRM) built to simulate biological cytoskeletal dynamics. It features a 6,500-dimensional, 4-layer hierarchical architecture (Φ-Fast, Φ-Mid, Φ-Slow, Σ-Record) that utilizes Hebbian and Anti-Hebbian learning alongside Intrinsic Plasticity. The system uses Jaeger Conceptors to govern intentional state spaces, allowing it to translate chaotic real-time telemetry into coherent semantic responses.',
    specs: [
      '6,500-dimensional 4-layer architecture',
      'Hebbian + Anti-Hebbian learning with Oja\'s Rule',
      'Intrinsic Plasticity (gain/bias adaptation)',
      'Conceptor-gated semantic generation',
    ],
    images: [
      '/images/reservoir/nominal.png',
      '/images/reservoir/elevated.png',
      '/images/reservoir/catastrophic.png',
    ],
  },
];

// ─── RESEARCH FRAMEWORKS ───────────────────────────────────────

export interface DPFOrder {
  order: number;
  name: string;
  japanese?: string;
  derivative: string;
  theme: string;
  philosophy: string;
  practical: string;
  principle: string;
  image?: string;
}

export const DPF_ORDERS: DPFOrder[] = [
  {
    order: 0,
    name: 'Kaizen',
    japanese: '改善',
    derivative: 'x (Position)',
    theme: 'Observe',
    philosophy: "Husserl's attention to the \"now,\" Heidegger's \"thrownness\"",
    practical: 'Honest baseline assessment, SWOT, quarterly audits',
    principle: 'Continuous improvement begins with rigorous acceptance of the current state.',
    image: '/images/dpf/IMG_1011.JPG',
  },
  {
    order: 1,
    name: 'Ikigai',
    japanese: '生き甲斐',
    derivative: 'v = dx/dt (Velocity)',
    theme: 'Process',
    philosophy: "Bergson's élan vital, Aristotelian telos",
    practical: 'Strategic alignment, OKRs, kill-switches for misaligned growth',
    principle: 'Purpose-driven movement. Speed without direction is noise.',
    image: '/images/dpf/IMG_1012.JPG',
  },
  {
    order: 2,
    name: 'Shoshin',
    japanese: '初心',
    derivative: 'a = dv/dt (Acceleration)',
    theme: 'Integrate',
    philosophy: "Beginner's Mind, Platonic ascent",
    practical: 'Retrospectives, double-loop learning, market feedback',
    principle: "Cultivating the beginner's mind to allow trajectories to adapt.",
    image: '/images/dpf/IMG_1013.JPG',
  },
  {
    order: 3,
    name: 'Kintsugi',
    japanese: '金継ぎ',
    derivative: 'j = da/dt (Jerk)',
    theme: 'Observe',
    philosophy: 'Hegelian Aufhebung, episteme shifts',
    practical: 'Post-mortem gilding, valuing scars as data assets',
    principle: 'Finding beauty in the breaks. Discontinuity is a gateway.',
    image: '/images/dpf/IMG_1014.JPG',
  },
  {
    order: 4,
    name: 'Wabi-Sabi',
    japanese: '侘寂',
    derivative: 's = dj/dt (Snap)',
    theme: 'Process',
    philosophy: "Gadamer's fusion of horizons, Confucian Li",
    practical: 'Decisive action at tipping points, acceptance of transience',
    principle: 'Embracing transience and imperfection at thresholds.',
    image: '/images/dpf/wabi_sabi_square.png',
  },
  {
    order: 5,
    name: 'Shinrin-Yoku',
    japanese: '森林浴',
    derivative: 'c = ds/dt (Crackle)',
    theme: 'Integrate',
    philosophy: "Islamic Tawḥīd, Daoist Qi, Huayan Buddhism's Indra's Net",
    practical: 'Multi-scale organizational design, signal detection',
    principle: 'Immersing in the forest of complexity to discover patterns.',
    image: '/images/dpf/IMG_1016.JPG',
  },
  {
    order: 6,
    name: 'Omotenashi',
    japanese: 'おもてなし',
    derivative: 'p = dc/dt (Pop)',
    theme: 'Orchestrate',
    philosophy: 'Levinasian ethics, Buddhist Karuṇā',
    practical: 'Servant leadership, anticipatory fulfillment',
    principle: 'Wholehearted hospitality. Interdependence orchestrated.',
    image: '/images/dpf/IMG_1017.JPG',
  },
  {
    order: 7,
    name: 'Ecology',
    japanese: '生態学',
    derivative: 'Systemic Sustainability',
    theme: 'Integrate',
    philosophy: "Islamic Khalīfa, Daoist Ziran, Aristotelian telos",
    practical: 'ESG integration, long-cycle thinking',
    principle: 'To injure the web of life is to fray oneself.',
    image: '/images/dpf/IMG_1018.JPG',
  },
  {
    order: 8,
    name: 'Schizoanalysis',
    japanese: 'スキゾ分析',
    derivative: 'Creative Emergence',
    theme: 'Orchestrate',
    philosophy: "Deleuze-Guattari's Plane of Consistency, Zen Mu",
    practical: 'Hara Hachi Bu (80% capacity), 20% innovation reserve',
    principle: "Breaking yesterday's idols to stride beyond design.",
    image: '/images/dpf/IMG_1019.JPG',
  },
];

// ─── HERO DOMAINS ──────────────────────────────────────────────

export interface DomainCard {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  accent: string;
}

export const DOMAIN_CARDS: DomainCard[] = [
  {
    title: 'Research',
    subtitle: 'Theory of Intentionality · DPF · Reservoir Computing',
    href: '/research',
    icon: '◇',
    accent: '#3DD8B0',
  },
  {
    title: 'Ventures',
    subtitle: 'BasaltHQ · TUC · Imursi · Requiem Electric',
    href: '/ventures',
    icon: '△',
    accent: '#8B5CF6',
  },
  {
    title: 'Publications',
    subtitle: '8 Books · 1 Screenplay · 1 Epic · Current Biology',
    href: '/publications',
    icon: '▢',
    accent: '#F59E0B',
  },
  {
    title: 'Builds',
    subtitle: 'Ethoscope · PiVR · Peristaltic Pump · Hydroponics',
    href: '/builds',
    icon: '⬡',
    accent: '#EC4899',
  },
  {
    title: 'Design',
    subtitle: 'Interior · Graphic · Photography · Film · Animation',
    href: '/design',
    icon: '○',
    accent: '#0EA5E9',
  },
  {
    title: 'About',
    subtitle: 'Biochemistry × English · Summa Cum Laude × 2',
    href: '/about',
    icon: '◎',
    accent: '#EF4444',
  },
];

export const HERO_TEXT = 'beyond imagination';
export const HERO_SUFFIXES = ['think', 'search', 'define', 'form'];

export const ABOUT_CONTENT = {
  paragraph1: [
    { text: 'Re:Form', highlight: true },
    {
      text: ' is an award-winning progressive architecture practice and research studio based in Iran, founded by Saeed Hekmatnia in 2017. The practice is about a continuous cycle: to ',
      highlight: false,
    },
    { text: 'Re:think', highlight: true },
    { text: ' established principles, to ', highlight: false },
    { text: 'Re:search', highlight: true },
    { text: ' materials and context, and ultimately, to ', highlight: false },
    { text: 'Re:Form', highlight: true },
    {
      text: ' space. We believe in exploring geometry and structure to ',
      highlight: false,
    },
    { text: 'Re:define ', highlight: true },
    {
      text: 'and improve the humans experience.',
      highlight: false,
    },
  ],
};

export interface ResearchArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  type: string;
  size: string;
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: '1',
    title: 'The brief history and the origin of Exploded Diagram',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna eget sem euismod dignissim. Nulla elementum diam ultrices risus pharetra scelerisque. Mauris cursus interdum eros, a aliquet nibh egestas sit amet. Integer feugiat auctor sem quis dignissim.',
    date: '2023',
    type: 'Theory',
    size: 'Essay',
  },
  {
    id: '2',
    title: 'Apartemant: Ethymlogy of a type',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna eget sem euismod dignissim. Nulla elementum diam ultrices risus pharetra scelerisque. Mauris cursus interdum eros, a aliquet nibh egestas sit amet. Integer feugiat auctor sem quis dignissim.',
    date: '2022',
    type: 'History',
    size: 'Paper',
  },
  {
    id: '3',
    title: 'GEOMETRY & VOID IN PERSIAN ARCHITECTURE',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna eget sem euismod dignissim. Nulla elementum diam ultrices risus pharetra scelerisque. Mauris cursus interdum eros, a aliquet nibh egestas sit amet. Integer feugiat auctor sem quis dignissim.',
    date: '2021',
    type: 'Analysis',
    size: 'Thesis',
  },
];

export interface Project {
  id: string;
  title: string;
  image: string;
  images: string[];
  category: string;
  size: string;
  status: string;
  video?: string;
  description: string;
  year: string;
  location: string;
  area?: string;
  client?: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Exploded Diagram Model',
    image: 'https://picsum.photos/800/800?random=1',
    images: [
      'https://picsum.photos/1200/800?random=10',
      'https://picsum.photos/1200/800?random=11',
      'https://picsum.photos/1200/800?random=12',
      'https://picsum.photos/1200/800?random=13',
    ],
    category: 'Cultural',
    size: 'L',
    status: 'Concept',
    video: '/video/video_2025-12-06_14-33-14.mp4',
    description:
      'An exploration of spatial decomposition through architectural elements. This project investigates how traditional building components can be reimagined as independent sculptural forms, creating a dialogue between structure and void.',
    year: '2024',
    location: 'Tehran, Iran',
    area: '2,500 sqm',
  },
  {
    id: '2',
    title: 'Void Residence',
    image: 'https://picsum.photos/800/800?random=2',
    images: [
      'https://picsum.photos/1200/800?random=20',
      'https://picsum.photos/1200/800?random=21',
      'https://picsum.photos/1200/800?random=22',
      'https://picsum.photos/1200/800?random=23',
    ],
    category: 'Residential',
    size: 'M',
    status: 'Built',
    description:
      'A residential project that celebrates emptiness as the primary design element. The house is organized around a series of voids that bring light deep into the living spaces while maintaining privacy from the urban context.',
    year: '2023',
    location: 'Qom, Iran',
    area: '450 sqm',
    client: 'Private',
  },
  {
    id: '3',
    title: 'Urban Weaver',
    image: 'https://picsum.photos/800/800?random=3',
    images: [
      'https://picsum.photos/1200/800?random=30',
      'https://picsum.photos/1200/800?random=31',
      'https://picsum.photos/1200/800?random=32',
      'https://picsum.photos/1200/800?random=33',
    ],
    category: 'Public',
    size: 'XL',
    status: 'Competition',
    description:
      'A proposal for urban regeneration that weaves together fragmented city fabric. The design creates a network of public spaces, green corridors, and mixed-use buildings that reconnect isolated neighborhoods.',
    year: '2024',
    location: 'Isfahan, Iran',
    area: '15,000 sqm',
  },
  {
    id: '4',
    title: 'Linear Pavilion',
    image: 'https://picsum.photos/800/800?random=4',
    images: [
      'https://picsum.photos/1200/800?random=40',
      'https://picsum.photos/1200/800?random=41',
      'https://picsum.photos/1200/800?random=42',
    ],
    category: 'Installation',
    size: 'S',
    status: 'Built',
    description:
      'A temporary installation exploring the relationship between geometry and perception. The pavilion uses a simple linear structure to create complex spatial experiences as visitors move through it.',
    year: '2022',
    location: 'Tehran, Iran',
    area: '120 sqm',
  },
  {
    id: '5',
    title: 'Brick Garden House',
    image: 'https://picsum.photos/800/800?random=5',
    images: [
      'https://picsum.photos/1200/800?random=50',
      'https://picsum.photos/1200/800?random=51',
      'https://picsum.photos/1200/800?random=52',
      'https://picsum.photos/1200/800?random=53',
    ],
    category: 'Residential',
    size: 'M',
    status: 'Built',
    description:
      'A courtyard house that reinterprets traditional Persian garden architecture. The design uses local brick as the primary material, creating a warm and textured environment that ages gracefully with time.',
    year: '2021',
    location: 'Kashan, Iran',
    area: '380 sqm',
    client: 'Private',
  },
  {
    id: '6',
    title: 'Floating Museum',
    image: 'https://picsum.photos/800/800?random=6',
    images: [
      'https://picsum.photos/1200/800?random=60',
      'https://picsum.photos/1200/800?random=61',
      'https://picsum.photos/1200/800?random=62',
    ],
    category: 'Cultural',
    size: 'L',
    status: 'Concept',
    description:
      'A museum concept that hovers above the landscape, minimizing its footprint while maximizing its visual impact. The design creates a journey through art and architecture that begins before entering the building.',
    year: '2024',
    location: 'Shiraz, Iran',
    area: '8,000 sqm',
  },
];

export const CONTACT_INFO = {
  address: 'No. 43, Hedayat 2, Hedayat St., Sharak Qods, Qom, Iran',
  phone: '+982532850836',
  emails: [
    {
      label: 'General, publication , exhibition (English / Persian) :',
      email: 'press@reform.center',
    },
    {
      label: 'internship & employment (Persian / English) :',
      email: 'work@reform.center',
    },
    {
      label: 'Order project :',
      email: 'Order@reform.center',
    },
  ],
};

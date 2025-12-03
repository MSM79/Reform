export const HERO_TEXT = 'beyond imagination';

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
      text: ' space. We believe in exploring geometry and structure to Re:define and improve the humans experience.',
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
  category: string;
  size: string;
  status: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Exploded Diagram Model',
    image: 'https://picsum.photos/800/800?random=1',
    category: 'Cultural',
    size: 'L',
    status: 'Concept',
  },
  {
    id: '2',
    title: 'Void Residence',
    image: 'https://picsum.photos/800/800?random=2',
    category: 'Residential',
    size: 'M',
    status: 'Built',
  },
  {
    id: '3',
    title: 'Urban Weaver',
    image: 'https://picsum.photos/800/800?random=3',
    category: 'Public',
    size: 'XL',
    status: 'Competition',
  },
  {
    id: '4',
    title: 'Linear Pavilion',
    image: 'https://picsum.photos/800/800?random=4',
    category: 'Installation',
    size: 'S',
    status: 'Built',
  },
  {
    id: '5',
    title: 'Urban Weaver',
    image: 'https://picsum.photos/800/800?random=3',
    category: 'Public',
    size: 'XL',
    status: 'Competition',
  },
  {
    id: '6',
    title: 'Linear Pavilion',
    image: 'https://picsum.photos/800/800?random=4',
    category: 'Installation',
    size: 'S',
    status: 'Built',
  },
];

export const CONTACT_INFO = {
  address: 'No. 43, Hedayat 2, Hedayat St., Sharak Qods, Qom, Iran',
  phone: '+982532850836',
  emails: [
    {
      label: 'General, publication , exhibition (English / Persian) :',
      email: 'press@reformpractice.ir',
    },
    {
      label: 'internship & employment (Persian / English) :',
      email: 'work@reformpractice.ir',
    },
    {
      label: 'Order project :',
      email: 'Order@reformpractice.ir',
    },
  ],
};

import { useState } from 'react';

export interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  size: string;
  status: string;
}
const MOCK_PROJECTS: Project[] = [
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

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'Built' | 'Concept'>('all');

  const filteredProjects =
    filter === 'all'
      ? MOCK_PROJECTS
      : MOCK_PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 container mx-auto px-6 md:px-12">
      {/* Filters mimicking the PDF visual style "Size Type status" */}
      <div className="flex gap-6 mb-8 text-sm text-gray-500 font-mono border-b pb-2 border-gray-200">
        <span className="cursor-pointer hover:text-black transition-colors">
          Size
        </span>
        <span className="cursor-pointer hover:text-black transition-colors">
          Type
        </span>
        <div className="flex gap-2">
          <span className="text-black font-semibold">status:</span>
          <button
            onClick={() => setFilter('all')}
            className={`hover:text-black ${
              filter === 'all' ? 'text-black underline' : ''
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('Built')}
            className={`hover:text-black ${
              filter === 'Built' ? 'text-black underline' : ''
            }`}
          >
            Built
          </button>
          <button
            onClick={() => setFilter('Concept')}
            className={`hover:text-black ${
              filter === 'Concept' ? 'text-black underline' : ''
            }`}
          >
            Concept
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-lg font-bold">{project.title}</h3>
              <p className="text-white/80 text-sm">
                {project.status} • {project.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

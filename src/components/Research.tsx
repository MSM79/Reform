export interface ResearchArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  type: string;
  size: string;
}

const ARTICLES: ResearchArticle[] = [
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

export const Research = () => {
  return (
    <section id="research" className="py-20 container mx-auto px-6 md:px-12">
      {/* Filters */}
      <div className="flex gap-6 mb-12 text-sm text-gray-500 font-mono border-b pb-2 border-gray-200">
        <span className="cursor-pointer hover:text-black">Size</span>
        <span className="cursor-pointer hover:text-black">Type</span>
        <span className="cursor-pointer hover:text-black">Date</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {ARTICLES.map((article) => (
          <article key={article.id} className="flex flex-col">
            <h3 className="text-lg italic font-serif font-bold mb-4 leading-snug min-h-[3rem]">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              {article.content}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 uppercase tracking-widest">
              <span>{article.type}</span>
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

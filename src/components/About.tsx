import { ABOUT_CONTENT } from '../data/content';
import { BlurReveal } from './BlurReveal';

export const About = () => {
  return (
    <BlurReveal>
      <div className="w-full xl:w-3/4 max-w-6xl md:text-2xl xl:text-3xl font-light leading-relaxed text-justify xl:text-left text-gray-800">
        <p>
          {ABOUT_CONTENT.paragraph1.map((segment, index) => (
            <span
              key={index}
              className={segment.highlight ? 'font-semibold italic' : ''}
            >
              {segment.text}
            </span>
          ))}
        </p>
      </div>
    </BlurReveal>
  );
};

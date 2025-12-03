import {
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-6 md:px-12 mb-20"
    >
      <h2 className="text-xl font-bold mb-12 uppercase tracking-wider">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm md:text-base">
        {/* Labels Column */}
        <div className="md:col-span-2 font-bold tracking-widest uppercase text-reform-black space-y-6">
          <p>ADDRESS:</p>
          <p>PHONE:</p>
          <p>E M A I L:</p>
        </div>

        {/* Values Column */}
        <div className="md:col-span-6 space-y-6 text-gray-700 italic font-light">
          <p>{CONTACT_INFO.address}</p>
          <p>{CONTACT_INFO.phone}</p>

          <div className="space-y-4">
            <p>
              If you would like to contact us, please send an e-mail to one of
              the following addresses:
            </p>

            <div className="not-italic space-y-1">
              {CONTACT_INFO.emails.map((item, index) => (
                <p key={index}>
                  <span className="italic text-gray-500">{item.label}</span>{' '}
                  <br />
                  <a
                    href={`mailto:${item.email}`}
                    className="hover:text-black underline"
                  >
                    {item.email}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Empty space or Map could go here in future */}
        <div className="md:col-span-4"></div>
      </div>

      {/* Social Icons */}
      <div className="mt-20 flex space-x-4">
        <a
          href="#"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Instagram size={16} />
        </a>
        <a
          href="#"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Twitter size={16} />
        </a>
        <a
          href="#"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="#"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Mail size={16} />
        </a>
        <a
          href="#"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <MessageCircle size={16} />
        </a>
      </div>
    </section>
  );
};

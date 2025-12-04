import { motion } from 'framer-motion';
import {
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

const blurRevealVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  },
};

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-6 md:px-12 mb-20"
    >
      {/* <BlurReveal>
        <h2 className="text-xl font-bold mb-12 uppercase tracking-wider">
          Contact
        </h2>
      </BlurReveal> */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm md:text-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
      >
        {/* Labels Column */}
        <motion.div
          className="md:col-span-2 font-bold tracking-widest uppercase text-reform-black space-y-6"
          variants={blurRevealVariants}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>ADDRESS:</p>
          <p>PHONE:</p>
          <p>E M A I L:</p>
        </motion.div>

        {/* Values Column */}
        <motion.div
          className="md:col-span-6 space-y-6 text-gray-700 italic font-light"
          variants={blurRevealVariants}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        {/* Empty space or Map could go here in future */}
        <div className="md:col-span-4"></div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-20 flex space-x-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={blurRevealVariants}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>
    </section>
  );
};

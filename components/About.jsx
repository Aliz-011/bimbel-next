import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <section className="py-4 lg:py-12 px-4 lg:px-16 bg-slate-900">
      <div className="px-2 lg:px-4 py-2.5">
        <div
          viewport={{ once: false }}
          className="border border-t-0 border-b-0 border-dashed border-gray-500 text-center px-6 md:px-44 py-8 md:py-40 space-y-4"
        >
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="font-bold text-4xl text-white"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              ilearnjpr.com
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
            }}
            className="text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            debitis suscipit maxime aut voluptas eligendi quibusdam dolor quas,
            quo deserunt, unde at voluptatibus. Ea, modi?
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

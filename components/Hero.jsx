import { motion } from 'framer-motion';
import React from 'react';
import {
  HiOutlineChatAlt2,
  HiOutlineBadgeCheck,
  HiOutlineClock,
} from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-16 h-fit md:h-[80vh]">
      <div className="grid md:grid-cols-2 px-2 md:px-4 py-2.5 gap-16 md:gap-8">
        {/* left */}
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight sm:leading-snug">
            Study At
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              iLearnAcademy
            </span>
            With High
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Experience
            </span>{' '}
            Tutors
          </h2>
          <p className="text-gray-600 mt-4 mb-8">
            Simple & and straightforward teaching based on what really matter
            most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <motion.button
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
                }}
                className="btn-primary w-full"
              >
                Get Started Now
              </motion.button>
            </a>
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
              }}
              className="btn-secondary"
            >
              View Courses
            </motion.button>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          className="relative w-full max-w-full flex flex-col justify-center"
        >
          {/* balls */}
          <div className="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="hidden md:block absolute top-0 -right-4 w-72 h-72 bg-yellow-400 animation-delay-2000 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="hidden md:block absolute -bottom-8 left-20 w-72 h-72 bg-red-400 animation-delay-4000 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />

          {/* why us */}
          <div className="relative flex flex-col gap-5">
            <div className="rounded-lg p-5 bg-[rgba(255,255,255,0.8)] border-[rgba(255,255,255,0.25)] backdrop-blur-sm border flex items-center gap-8">
              <div className="rounded-full h-fit w-fit bg-blue-400 p-2">
                <HiOutlineChatAlt2 className="text-2xl text-white" />
              </div>
              <h2 className="font-semibold text-xl">Expert Coaching Support</h2>
            </div>
            <div className="rounded-lg p-5 bg-[rgba(255,255,255,0.8)] border-[rgba(255,255,255,0.25)] backdrop-blur-sm border flex items-center gap-8">
              <div className="rounded-full h-fit w-fit bg-green-400 p-2">
                <HiOutlineBadgeCheck className="text-2xl text-white" />
              </div>
              <h2 className="font-semibold text-xl">Real-world experience</h2>
            </div>
            <div className="rounded-lg p-5 bg-[rgba(255,255,255,0.8)] border-[rgba(255,255,255,0.25)] backdrop-blur-sm border flex items-center gap-8">
              <div className="rounded-full h-fit w-fit bg-blue-400 p-2">
                <HiOutlineClock className="text-2xl text-white" />
              </div>
              <h2 className="font-semibold text-xl">Pro Certificates</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

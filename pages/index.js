import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { GrUserManager, GrCalendar } from 'react-icons/gr';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { motion } from 'framer-motion';
import BuyCourses from '../components/BuyCourses';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="index page of the websiter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section className="py-4 sm:py-12 px-4 sm:px-16 bg-slate-100">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: 'spring' },
          }}
          viewport={{ once: false }}
          className="grid sm:grid-cols-2 px-2 sm:px-4 py-2.5 gap-16 sm:gap-8"
        >
          {/* image/video */}
          <div className="hidden sm:flex items-center">
            <picture>
              <img src="/vercel.svg" alt="image" />
            </picture>
          </div>

          {/* benefits */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-green-500 dark:text-gray-100 font-semibold">
                Learn Anything
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight sm:leading-snug dark:text-white">
                Benefits about Learning Expertise
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.5)] backdrop-blur-sm flex items-center gap-5"
            >
              <HiOutlineLightBulb className="w-12 h-12" />
              <div>
                <h2 className="font-semibold text-xl">Online Courses</h2>
                <p className="text-gray-600 my-4 dark:text-gray-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, eveniet nihil nemo corrupti consequatur quo! most.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.5)] backdrop-blur-sm flex items-center gap-5"
            >
              <GrUserManager className="w-10 h-10" />
              <div>
                <h2 className="font-semibold text-xl">Learn With Expert</h2>
                <p className="text-gray-600 my-4 dark:text-gray-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, eveniet nihil nemo corrupti consequatur quo! most.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.5)] backdrop-blur-sm flex items-center gap-5"
            >
              <GrCalendar className="w-10 h-10" />
              <div>
                <h2 className="font-semibold text-xl">Earn a Certificate</h2>
                <p className="text-gray-600 my-4 dark:text-gray-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, eveniet nihil nemo corrupti consequatur quo! most.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <BuyCourses />
      <About />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

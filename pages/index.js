import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { GrUserManager, GrCalendar } from 'react-icons/gr';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { motion } from 'framer-motion';
import BuyCourses from '../components/BuyCourses';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Subscribe from '../components/Subscribe';
import { supabase } from '../supabase';

export default function Home({ kursus }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="index page of the websiter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section className="py-8 sm:py-16 px-4 sm:px-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: 'spring' },
          }}
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-4 py-2.5 gap-16 sm:gap-8"
        >
          {/* image/video */}
          <div className="order-last sm:order-none sm:flex items-center justify-center">
            <picture>
              <img src="/vercel.svg" alt="image" />
            </picture>
          </div>

          {/* benefits */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-green-500 font-semibold">
                Learn Anything
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight sm:leading-snug ">
                Benefits about{' '}
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  @ilearnacademy
                </span>
              </h2>
            </div>
            <div className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.9)] shadow backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 border-l-4 border-green-400">
              <HiOutlineLightBulb className="w-8 h-8 text-black" />
              <div>
                <h2 className="font-semibold text-xl">Tutoring Services</h2>
                <p className="text-gray-600 my-4">All you can learn</p>
              </div>
            </div>
            <div className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.9)] shadow backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 border-l-4 border-green-400">
              <GrUserManager className="w-6 h-6 text-black" />
              <div>
                <h2 className="font-semibold text-xl">Learn With Expert</h2>
                <p className="text-gray-600 my-4">
                  Learning Through Online, Onsite, Home visit
                </p>
              </div>
            </div>
            <div className="rounded-lg p-5 cursor-default bg-[rgba(255,255,255,0.9)] shadow backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 border-l-4 border-green-400">
              <GrCalendar className="w-6 h-6 text-black" />
              <div>
                <h2 className="font-semibold text-xl">Earn a Certificate</h2>
                <p className="text-gray-600 my-4">
                  Certificate can prepare you to advanced in your career.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <About />
      <BuyCourses kursus={kursus} />
      <Team dataPerPage={3} />
      <FAQ />
      <Subscribe />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let { data, error } = await supabase.from('kursus').select('*').range(0, 5);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      kursus: data,
    },
  };
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { supabase } from '../supabase';
import { GetStaticProps } from 'next';

const BuyCourses = () => {
  const [kursus, setKursus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from('kursus')
        .select('*')
        .range(0, 4);
      setKursus(data);
    };
    fetchData();
  }, []);
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-16 bg-white lg:h-fit">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: 'spring', delay: 0.5 },
        }}
        className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-2 gap-8 relative"
      >
        <div className="hidden lg:block absolute bottom-8 right-32 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="hidden lg:block absolute -bottom-8 right-20 w-72 h-72 bg-red-400 animation-delay-4000 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />

        <div className="col-span-full mx-auto text-center space-y-3 mb-2">
          <h2 className="text-slate-900 text-3xl font-semibold">
            Choose Your Plan
          </h2>
          <p className="text-slate-900 text-xl font-thin">Easy and Intuitive</p>
        </div>
        {kursus &&
          kursus.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
            >
              <h2 className="font-medium text-2xl">{item.judul} Course</h2>
              <p className="font-thin my-3"> {item.deskripsi} </p>
              <div className="flex text-green-500 justify-center items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p className="text-green-700 font-thin">(5.0)</p>
              </div>
              <div className="flex items-center justify-center gap-2 mt-10">
                <picture>
                  <img
                    src="/vercel.svg"
                    className="rounded-full w-8 h-8"
                    alt="logo"
                  />
                </picture>
                <h2 className="text-sm lowercase">
                  by <span>Alief</span>
                </h2>
              </div>
              <h2 className="mt-4 mb-16">
                Rp<span className="text-3xl font-semibold">{item.biaya}</span>
                /month
              </h2>
              <button className="btn-secondary capitalize">enroll now</button>
            </motion.div>
          ))}

        <h2 className="col-span-full mx-auto md:mt-8 font-medium text-slate-700">
          Price includes tax
        </h2>
      </motion.div>
    </section>
  );
};

export default BuyCourses;

// export async function getServerSideProps() {
//   let { data, error } = await supabase.from('kursus').select('*');

//   return {
//     props: {
//       kursus: data,
//     },
//   };
// }

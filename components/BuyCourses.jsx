import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

const BuyCourses = () => {
  return (
    <section className="py-4 sm:py-12 px-4 sm:px-16">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: 'spring' },
        }}
        className="grid sm:grid-cols-3 px-8 sm:px-32 py-2.5 gap-16 sm:gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-96 sm:w-[330px] min-w-[230px] text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-xl">Guitar Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
          <div className="flex text-green-500 justify-center items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-green-700 font-thin">(5.0)</p>
          </div>
          <h2 className="mt-20">
            Rp<span className="text-3xl font-semibold">1.500.000</span>/month
          </h2>
          <button className="btn-secondary capitalize mt-20">enroll now</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuyCourses;

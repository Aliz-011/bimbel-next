import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';

const BuyCourses = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-16 bg-white lg:h-[135vh]">
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
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-2xl">Guitar Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
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
            Rp<span className="text-3xl font-semibold">1.500.000</span>/month
          </h2>
          <button className="btn-secondary capitalize">enroll now</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-2xl">Math Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
          <div className="flex text-green-500 justify-center items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-green-700 font-thin">(4.7)</p>
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
            Rp<span className="text-3xl font-semibold">2.500.000</span>/month
          </h2>
          <button className="btn-secondary capitalize">enroll now</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-2xl">Barista Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
          <div className="flex text-green-500 justify-center items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-green-700 font-thin">(4.3)</p>
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
            Rp<span className="text-3xl font-semibold">1.200.000</span>/month
          </h2>
          <button className="btn-secondary capitalize">enroll now</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-2xl">Barista Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
          <div className="flex text-green-500 justify-center items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-green-700 font-thin">(4.3)</p>
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
            Rp<span className="text-3xl font-semibold">1.200.000</span>/month
          </h2>
          <button className="btn-secondary capitalize">enroll now</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full bg-[rgba(255,255,255,0.5)] h-96 text-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer"
        >
          <h2 className="font-medium text-2xl">Barista Course</h2>
          <p className="font-thin my-3">For Middle Schooler</p>
          <div className="flex text-green-500 justify-center items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-green-700 font-thin">(4.3)</p>
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
            Rp<span className="text-3xl font-semibold">1.200.000</span>/month
          </h2>
          <button className="btn-secondary capitalize">enroll now</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-96 flex flex-col justify-center items-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer bg-[rgba(15,23,42,0.95)]"
        >
          <h2 className="font-medium text-2xl text-white inline-flex">
            4 More Courses
            <BiRightArrowAlt className="text-green-500 w-16 h-8" />
          </h2>
        </motion.div>
        <h2 className="col-span-full mx-auto md:mt-8 font-medium text-slate-700">
          Price includes tax
        </h2>
      </motion.div>
    </section>
  );
};

export default BuyCourses;

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 lg:px-16">
      <nav className="px-2 lg:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <motion.a
            initial={{ y: -40, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
            }}
            href="/"
            className="flex items-center"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Logo
            </span>
          </motion.a>
          <motion.button
            initial={{ x: 40, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 },
            }}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <HiX className="text-xl" />
            ) : (
              <HiMenu className="text-xl" />
            )}
          </motion.button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden sm:block'
            } w-full sm:w-auto`}
          >
            <motion.ul
              initial={{ y: -40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              className="flex flex-col sm:items-center p-4 mt-4 border border-gray-200 rounded-lg sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0"
            >
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="btn-secondary text-center block sm:inline-flex"
                >
                  Sign up
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLink,
} from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="py-4 lg:pt-12 px-4 lg:px-16 bg-slate-50">
      <div className="px-2 lg:px-4 py-2.5 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div className="flex flex-col gap-4">
          <picture>
            <img src="/logo.png" alt="logo" className="h-32 mr-3 sm:h-32" />
          </picture>
          <p className="text-gray-500 text-sm">
            Gain your knowledges and upgrade your skills with iLearnAcademy
          </p>
          <div className="flex items-center gap-2">
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiOutlineFacebook />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl text-slate-900">Links</h2>
          <div className="flex items-center gap-2">
            <AiOutlineLink className="w-5 h-5" />
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLink className="w-5 h-5" />
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLink className="w-5 h-5" />
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
            >
              Pricing & Packages
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLink className="w-5 h-5" />
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0"
            >
              Services
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl text-slate-900">
            Have a Question?
          </h2>
          <div className="flex items-center gap-4">
            <GrMapLocation className="w-5 h-5" />
            <a
              href="https://www.google.co.id/maps/place/9MJG%2BWCX,+Awiyo,+Kec.+Abepura,+Kota+Jayapura,+Papua+99351/@-2.6175646,140.6759661,20.62z/data=!4m5!3m4!1s0x686cf57ee5384c75:0xbbf60257847d2651!8m2!3d-2.6176532!4d140.6760723?hl=id&authuser=0"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              Jayapura, Papua, Indonesia.
            </a>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlinePhone className="w-5 h-5" />
            <a href="tel:08967 5573200" className="text-gray-500 text-sm">
              +628 967 5573200
            </a>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="w-5 h-5" />
            <a
              href="mailto:ilearnacademy22@gmail.com"
              className="text-gray-500 text-sm"
            >
              ilearnacademy22@gmail.com
            </a>
          </div>
        </div>

        <div className="col-span-full mt-12 text-sm text-gray-400 sm:flex flex-row space-y-4 sm:space-y-0 justify-between border-t pt-5">
          <p>
            © 2020-2023 domain.com - Home teaching Premium, Expert &
            Professional.
          </p>
          <p>
            Built with <span className="text-green-500">Next.js</span> and{' '}
            <span className="text-green-500">Supabase</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
        {/* <div className="mx-auto bg-blue-700 px-5 py-10 col-span-2">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div className="flex justify-center md:justify-end">
              <img
                className="w-full max-w-sm"
                src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
                alt="Marketing newsletter via computer Illustration in PNG, SVG"
              />
            </div>
            <div className="flex items-center">
              <div className="mx-auto md:mx-0">
                <h3 className="text-4xl font-bold text-white">Subscribe</h3>
                <p className="mt-2 max-w-[20rem] text-lg text-white/80">
                  Join our weekly digest. You'll also receive some of our best
                  posts today.
                </p>
                <form action="" className="mt-4 flex flex-col">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]"
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl text-slate-900">Logo</h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatem temporibus libero.
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
            <p className="text-gray-500 text-sm">Jayapura, Papua, Indonesia.</p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlinePhone className="w-5 h-5" />
            <p className="text-gray-500 text-sm">+6285243518900</p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="w-5 h-5" />
            <p className="text-gray-500 text-sm">youremail@gmail.com</p>
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

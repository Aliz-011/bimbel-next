import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Team = ({ dataPerPage }) => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (dataPerPage !== 'All') {
        let { data: pembimbing, error } = await supabase
          .from('pembimbing')
          .select(
            `
          *,
          kursus:kursus_id (
            judul
          )
        `
          )
          .range(0, dataPerPage);
        setTeam(pembimbing);
        return;
      } else {
        let { data: pembimbing, error } = await supabase
          .from('pembimbing')
          .select(
            `
          *,
          kursus:kursus_id (
            judul
          )
        `
          );
        setTeam(pembimbing);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div>
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
              Our Executive Team
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>

            <div
              className={`grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4`}
            >
              {team &&
                team.map((item) => (
                  <div
                    className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-100 rounded-xl"
                    key={item.id}
                  >
                    <img
                      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                      {item.nama}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize">
                      {item.kursus.judul}
                    </p>

                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300 mt-2"
                    >
                      <a
                        href="#"
                        className="flex items-center rounded-full hover:bg-indigo-100 h-10 w-10 "
                        aria-label="Reddit"
                      >
                        <AiOutlineInstagram className="mx-auto text-red-600" />
                      </a>

                      <a
                        href="#"
                        className="flex items-center rounded-full hover:bg-indigo-100 h-10 w-10 "
                        aria-label="Facebook"
                      >
                        <AiOutlineFacebook className="mx-auto text-blue-600" />
                      </a>

                      <a
                        href="#"
                        className="flex items-center rounded-full hover:bg-indigo-100 h-10 w-10 "
                        aria-label="Github"
                      >
                        <AiOutlineTwitter className="mx-auto text-cyan-400" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

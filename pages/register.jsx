import Head from 'next/head';
import React, { useState } from 'react';
import {
  MdOutlineAlternateEmail,
  MdOutlineLock,
  MdPermIdentity,
} from 'react-icons/md';
import { supabase } from '../supabase';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userInfo.email || !userInfo.password) {
        setIsError(true);
        return;
      }
      const { data, error } = await supabase.auth.signUp({
        email: userInfo.email,
        password: userInfo.password,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <Head>
        <title>Register Page</title>
        <meta name="description" content="register page of the websiter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <picture>
                <img src="/signup-logo.svg" alt="logo" />
              </picture>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdPermIdentity />
                      </div>
                      <input
                        type="text"
                        value={userInfo.firstName}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdPermIdentity />
                      </div>
                      <input
                        type="text"
                        value={userInfo.lastName}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdOutlineAlternateEmail />
                      </div>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdOutlineLock />
                      </div>
                      <input
                        type="password"
                        value={userInfo.password}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            password: e.target.value,
                          })
                        }
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Register;

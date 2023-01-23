import React from 'react';

const Subscribe = () => {
  const [userInfo, setUserInfo] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <section className="w-full " id="contact">
      <div className="mx-auto bg-slate-900 py-8 sm:py-12 px-4 sm:px-16 col-span-2">
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20 ">
          <div className="flex justify-center md:justify-end">
            <img
              className="w-full max-w-sm"
              src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
              alt="Marketing newsletter via computer Illustration in PNG, SVG"
            />
          </div>
          <div className="flex items-center">
            <div className="mx-auto md:mx-0 w-full">
              <h3 className="text-4xl font-bold text-white">Contact Me</h3>
              <form className="mt-4 flex flex-col gap-4 w-full">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_fullName"
                    className="block py-2.5 px-0 w-full md:w-1/2 text-sm capitalize text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, fullName: e.target.value })
                    }
                    value={userInfo.fullName}
                  />
                  <label
                    htmlFor="floating_fullName"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      value={userInfo.email}
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      pattern="[0-9]+"
                      name="floating_phone_number"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          phoneNumber: e.target.value,
                        })
                      }
                      value={userInfo.phoneNumber}
                    />
                    <label
                      htmlFor="floating_phone_number"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
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
      </div>
    </section>
  );
};

export default Subscribe;

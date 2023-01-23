import { Disclosure } from '@headlessui/react';
import { HiChevronUp } from 'react-icons/hi';

export default function FAQ() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-16 bg-white">
      <div className="h-1 w-full mx-auto border-b my-5" />

      <h2 className="text-slate-900 text-3xl font-semibold my-4 md:my-8">
        Frequently Asked Question
      </h2>

      <div className="mx-auto w-full md:w-2/3 max-w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-sm px-4 py-2 text-left text-sm font-medium text-indigo-900 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <HiChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-indigo-100">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-sm px-4 py-2 text-left text-sm font-medium text-indigo-900 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <HiChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 bg-indigo-100 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}

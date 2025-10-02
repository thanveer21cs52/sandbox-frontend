"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Socialbar from "./Socialbar";
import Icon from "./icons";

type HeaderClientProps = {
  logoUrl: string;
  nav: string[];
  social: { [key: string]: string }[];
};

export default function HeaderClient({ logoUrl, nav, social }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  return (
    <header className="sticky top-0 left-0 w-full bg-bg z-30 font-manrope ">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-24 max-h-[75px] py-3">
        {/* Logo */}
        <a href="/" className="p-2">
          <img
            src={logoUrl}
            alt="logo"
            className="h-[5vw] sm:h-6 md:h-7 lg:h-8 w-auto cursor-pointer object-contain"
          />
        </a>

        {/* Desktop Nav */}
{/* Desktop Nav */}
<nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm md:text-base font-medium md:font-semibold">
    {nav.map((item, i) => {
        if(i==0){
            return null
        }
        else if (item === "Pages") {
          const isOpen = openDropdown === "Pages";

          return (
            <div key={i} className="relative">
              <button
                onClick={() => setOpenDropdown(isOpen ? null : "Pages")}
                className="flex items-center gap-1 text-black hover:text-button-purple transition-colors"
              >
                {item}
              <Icon name='downarr' className='text-sm text-purple-400'/>
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Team
                  </Link>
                </div>
              )}
            </div>
          );
        }

        // Normal links
        return (
          <Link
            key={i}
            href={`/`}
            className="text-black hover:text-button-purple transition-colors flex gap-2 justify-center items-center"
          >
            <p>
{item}
            </p>
            
             <Icon name='downarr' className='text-sm text-purple-400'/>
          </Link>
        );
      })}
  
</nav>

        {/* Mobile Drawer Button + Social */}
        <div className="flex items-center gap-2 sm:gap-3">
          {social.map((s, idx) =>
            Object.entries(s).map(([key, value], i) =>
              i === 0 || !value ? null : (
                <a href="/" key={`${idx}-${i}`}>
                  <Socialbar
                    icon={value}
                    classname="hover:scale-110 transition-transform"
                  />
                </a>
              )
            )
          )}

          {/* Drawer Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden rounded-md focus:outline-none"
          >
            <Icon name="bar" className="text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-hidden"
          onClose={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-gray-900/50" />
          <div className="fixed inset-y-0 left-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-screen max-w-md bg-black shadow-xl">
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-700">
                  <Dialog.Title className="text-lg text-white font-bold font-mono">
                    Menu
                  </Dialog.Title>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white rounded-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Drawer Nav */}
                <div className="px-4 sm:px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
                  <nav className="flex flex-col gap-4">
                    {nav.map((item, i) => {
                        if(i==0){
                            return null
                           }
                           
                        else if (item === "Pages") {
                        const isDropdownOpen = openDropdown === "Pages";
                        return (
                          <div key={i} className="flex flex-col">
                            <button
                              onClick={() =>
                                setOpenDropdown(isDropdownOpen ? null : "Pages")
                              }
                              className="text-white text-lg flex justify-between items-center hover:text-button-purple transition-colors"
                            >
                              {item}
                               <Icon name='downarr' className='text-sm text-purple-400'/>
                            </button>

                            {isDropdownOpen && (
                              <div className="flex flex-col ml-4 mt-2 space-y-2">
                                <Link
                                  href="/about"
                                  className="text-white hover:text-button-purple"
                                  onClick={() => setIsOpen(false)}
                                >
                                  About
                                </Link>
                                <Link
                                  href="/services"
                                  className="text-white hover:text-button-purple"
                                  onClick={() => setIsOpen(false)}
                                >
                                  services
                                </Link>
                                <Link
                                  href="/"
                                  className="text-white hover:text-button-purple"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Team
                                </Link>
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                     <Link
            key={i}
            href={`/`}
            className="text-black hover:text-button-purple transition-colors flex gap-2 justify-center items-center"
            
          >
            <p>
{item}
            </p>
            
             <Icon name='downarr' className='text-sm text-purple-400'/>
          </Link>
                      );
                    })}
                  </nav>

                  {/* Contact Info */}
                  <div className="text-white mt-4">
                    <p>info@email.com</p>
                    <p>00 (123) 456 78 90</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6">
                    {social.map((s, idx) =>
                      Object.entries(s).map(([key, value], i) =>
                        i === 0 || !value ? null : (
                          <a href="/" key={`${idx}-${i}`}>
                            <Socialbar
                              icon={value}
                              classname="hover:scale-110 transition-transform text-white"
                            />
                          </a>
                        )
                      )
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom'


import Logo from "../../assets/logo.svg";
import GithubLogo from '../../UI/Github/GithubLogo'
import Darkmode from "../../UI/Darkmode/Darkmode";
import GitLogo from '../../assets/github.svg';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={Logo}
                  alt="Personal Logo"
                />
              </div>
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  <li
                    className=" hover:bg-gray-200 text-secondary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link to="/">Home</Link>
                  </li>

                  <li
                    className="text-secondary hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-3 ">
                <GithubLogo />
                <Darkmode />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <ul ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                <li
                  className=" hover:bg-gray-200 text-secondary block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                >
                  <Link to="/">Home</Link>
                </li>

                <li
                  className="text-secondary hover:bg-gray-200 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="/projects">Projects</Link>
                </li>
                <li
                  href="https://github.com/julioaraujo96"
                  target="_blank"
                  className="text-secondary hover:bg-gray-200 block px-3 py-2 rounded-m"
                >
                  <img src={GitLogo} alt="My github" className="mx-auto"/>
                </li>
                <li
                  href="#"
                  className="text-secondary hover:bg-gray-200 block px-3 py-2 rounded-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
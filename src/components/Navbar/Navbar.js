import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link}  from 'react-router-dom';
import Darkmode from "../../UI/Darkmode/Darkmode";
import Logo from "../../assets/logo.svg";
import useDarkmode from '../../hook/useDarkmode';
import {BsLinkedin,BsGithub} from 'react-icons/bs'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkmode();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 dark:border-primary dark:bg-secondary transition duration-500">
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
                    <Link to="/" className="text-secondary dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                       Home
                    </Link>
                    <Link to="/projects" className="text-secondary dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                      Projects
                    </Link>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 text-lg">
                <a href="https://github.com/julioaraujo96" target="_blank" rel="noreferrer" >
                  <BsGithub className="text-black hover:opacity-80 dark:text-white dark:hover:text-black "/>
                </a>
                <a href="https://www.linkedin.com/in/júlio-araújo-ba3441235/" target="_blank" rel="noreferrer" >
                  <BsLinkedin className="text-primary hover:opacity-80 dark:text-white dark:hover:text-primary"/>
                </a>
                <Darkmode />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white dark:bg-secondary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary "
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
              <ul ref={ref} className="sm:px-3 flex justify-center items-center flex-col gap-8">
                  <Link to="/" className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 text-secondary dark:text-primary block px-3 py-2 rounded-md text-base font-medium hover:text-primary dark:hover:text-white">
                    Home
                  </Link>
                  <Link to="/projects" className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 text-secondary dark:text-primary block px-3 py-2 rounded-md text-base font-medium hover:text-primary dark:hover:text-white">
                    Projects
                  </Link>
                  <a href="https://github.com/julioaraujo96" target="_blank" rel="noreferrer" >
                    <p className="text-primary"> Github</p>
                  </a>
                  <a href="https://www.linkedin.com/in/júlio-araújo-ba3441235/" target="_blank" rel="noreferrer" className="flex" >
                    <p className="text-primary"> LinkedIn</p> 
                  </a>
                <li onClick={()=> setTheme(colorTheme)}
                  className="cursor-pointer text-secondary dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 block px-3 py-2 rounded-md"
                >
                  <Darkmode />
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
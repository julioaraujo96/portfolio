import React from 'react'
import Darkmode from '../../UI/Darkmode/Darkmode';
import GithubLogo from '../../UI/Github/GithubLogo';
import Hamburger from '../../UI/Hamburguer/Hamburger';
import Logo from '../../UI/Logo/Logo';

const Navbar = () => 
{
    return (
        <nav className="bg-white border-b-2">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                     <div className="flex space-x-7">
                            <Logo />

                            {/* Navegação Primária */}
                         <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="py-4 px-2 text-primary border-b-4 border-primary font-semibold ">
                                    Home
                                </a>
                                <a href="" className="py-4 px-2 text-gray-500 border-b-4 border-transparent font-semibold hover:text-primary transition duration-300">
                                    Projects
                                </a>
                         </div>
                    </div>
                      {/* Navegação Secundária */}
                      <div className="hidden md:flex items-center space-x-3">
                            <GithubLogo/>
                            <Darkmode />
                       </div>
                        <Hamburger />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
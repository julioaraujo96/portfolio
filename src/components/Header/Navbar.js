import React from 'react'
import GithubLogo from '../../UI/Logo/Github/GithubLogo';
import Logo from '../../UI/Logo/Logo';

const Navbar = () => 
{
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                     <div className="flex space-x-7">
                            <Logo />

                            {/* Navegação Primária */}
                         <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="py-4 px-2 text-primary border-b-4 border-primary font-semibold ">
                                    Home
                                </a>
                                <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-primary transition duration-300">
                                    Projects
                                </a>
                         </div>

                            {/* Navegação Secundária */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            <GithubLogo/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';

const Hamburger = (props) => {
    return (
        <>
        <div className="md:hidden flex items-center">
	        <button className="outline-none mobile-menu-button" onClick={props.menuToggle}>
				<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
				    x-show="!showMenu"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
			        <path d="M4 6h16M4 12h16M4 18h16">

                    </path>
				</svg>
					</button>
		    </div>
			
			<div className={props.showMenu ? "hidden" : ""}>
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Projects</a></li>
				</ul>
			</div> 
        </>
    );
};

export default Hamburger;
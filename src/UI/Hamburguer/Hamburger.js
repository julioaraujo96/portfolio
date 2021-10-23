import React from 'react';

const Hamburger = () => {
    return (
        <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
            <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
    );
};

export default Hamburger;
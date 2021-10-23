import React from 'react';
import Logo from '../../assets/github.svg';

const GithubLogo = () => {
    return (
        <a href="https://github.com/julioaraujo96" target="_blank" rel="noreferrer" className="py-2 px-2 rounded hover:bg-gray-200 transition duration-300" >
            <img src={Logo} alt="Github logo" />
        </a>
    );
};

export default GithubLogo;
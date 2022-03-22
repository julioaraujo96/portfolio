import React from 'react';
import {BsLinkedin} from 'react-icons/bs'

const Home = () => {
    return (
        <section className="container mx-auto">
            <div className="flex justify-between mb-20"> 
                <h2 className="text-primary my-10 lg:text-3xl md:text-2xl sm:text-xl px-5">Welcome to my Portfolio</h2>
                <a 
                    class="bg-primary hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 h-10 self-center mx-2 rounded text-xs md:text-base lg:text-lg flex-1 text-center custom-max-w-9"
                    href="mailto:someone@something.com?subject=your title&body=TThe message"
                >
                     Hire me
                </a>
            </div>
            <div className="bg-gray-300 rounded px-2 py-2 text-center mx-2 dark:bg-gray-700">
                 <h1 className="font-light sm:text-base md:text-lg lg:text-xl text-secondary dark:text-white">
                    I am <span className="text-primary">Júlio Araújo</span> - A Developer based in Porto.
            </h1>
            </div>

            <div className="flex justify-center gap-4 mt-32">
            <button class="flex items-center gap-1 bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                 Linked<BsLinkedin className="text-primary"/>
            </button>
            <button class="bg-primary hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow">
                Download CV
            </button>
            </div>
           
        </section>
    );
};

export default Home;

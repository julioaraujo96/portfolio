import React from 'react';

const Home = () => {
    return (
        <section className="container h-screen mx-auto">
            <div className="flex justify-between"> 
                <h2 className="text-primary my-10 lg:text-3xl md:text-2xl sm:text-xl px-5">Welcome to my Portfolio</h2>
                <a 
                    class="bg-primary hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 h-10 self-center mx-2 rounded"
                    href="mailto:someone@something.com?subject=your title&body=TThe message"
                >
                     Hire me
                </a>
            </div>
            <div className="mx-2 bg-gray-300 rounded px-2 py-2 text-center my-20 dark:bg-gray-700">
                 <h1 className="font-light sm:text-base md:text-lg lg:text-xl text-secondary dark:text-white">
                    I am <span className="text-primary">Júlio Araújo</span> - A Developer based in Porto.
            </h1>
            </div>
        </section>
    );
};

export default Home;
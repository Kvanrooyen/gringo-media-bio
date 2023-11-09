import React from 'react';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { SiMastodon, SiBuymeacoffee, SiKofi, SiLiberapay, SiPaypal } from 'react-icons/si';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center">
                    <img
                        src=""
                        alt="Keagan"
                        className="w-40 h-40 rounded-full mb-4"
                    />
                    <h1 className="text-4xl font-bold">Keagan</h1>
                    <h2 className="text-2xl text-gray-400">Gringo Media</h2>
                    <p className="text-center text-gray-400 mt-4">
                        Short and engaging description about Keagan and Gringo Media goes here.
                    </p>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                    <FaInstagram className="text-xl hover:text-blue-500 cursor-pointer" />
                    <FaTiktok className="text-xl hover:text-blue-500 cursor-pointer" />
                    <SiMastodon className="text-xl hover:text-blue-500 cursor-pointer" />
                    <FaEnvelope className="text-xl hover:text-blue-500 cursor-pointer" />
                </div>
                <div className="flex justify-center gap-4 mt-8">
                    <a href="https://youtube.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        YouTube
                    </a>
                    <a href="https://tilvids.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        TILvids
                    </a>
                    <a href="https://yourwebsite.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Website
                    </a>
                </div>
                <h3 className="text-3xl font-bold mt-8 mb-4">Support Me</h3>
                <div className="flex justify-center gap-4">
                    <SiBuymeacoffee className="text-3xl hover:text-yellow-400 cursor-pointer" />
                    <SiKofi className="text-3xl hover:text-pink-500 cursor-pointer" />
                    <SiLiberapay className="text-3xl hover:text-green-500 cursor-pointer" />
                    <SiPaypal className="text-3xl hover:text-blue-500 cursor-pointer" />
                </div>
            </div>
            <footer className="mt-8 text-gray-400">
                <p>Copyright © 2023 by Gringo Media. All rights reserved.</p>
                <p>Remember the site's purpose with a subtle hint.</p>
            </footer>
        </div>
    );
}

export default App;

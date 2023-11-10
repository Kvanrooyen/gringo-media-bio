import React from 'react';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { SiMastodon, SiBuymeacoffee, SiKofi, SiLiberapay, SiPaypal } from 'react-icons/si';
import ProfilePhoto from '../assets/ProfilePhoto.jpeg';
import '../App.css';

const App = () => {
    return (
        <div className="background-image">
            {/* Content container */}
            <div className="content flex flex-col items-center justify-center text-slate-100">
                {/* Content container must be relative to stay on top of the overlay */}
                <div className=" flex flex-col items-center">
                    <img
                        src={ProfilePhoto}
                        alt="Keagan"
                        className="w-32 h-32 rounded-full mb-4 mt-6"
                    />
                    <h1 className="text-2xl font-bold">Keagan</h1>
                    <h2 className="text-l text-slate-100">@Gringo.Media</h2>
                    <p className="text-center text-slate-100 m-6 mx-auto max-w-sm">
                        At Gringo Media, my aim is to share my expertise and experiences, helping you to explore and appreciate the dynamic world of videography.
                    </p>

                </div>
                <div className=" flex justify-center gap-6 mt-6">
                    <a href="https://instagram.com/gringo_media" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl cursor-pointer" />
                    </a>
                    <a href="https://tiktok.com/@gringo.media" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-xl cursor-pointer" />
                    </a>
                    <a href="https://mastodon.social/@gringomedia" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                        <SiMastodon className="text-xl cursor-pointer" />
                    </a>
                    <a href="mailto:hey@gringo.media" className="hover:text-blue-500">
                        <FaEnvelope className="text-xl cursor-pointer" />
                    </a>

                </div>
                <div className=" flex flex-col items-center gap-4 mt-8 w-full md:max-w-2/3 lg:max-w-1/2 text-center">
                    <a href="https://www.youtube.com/@gringomedia" className="bg-transparent border-2 border-white hover:border-gray-300 text-white font-bold py-2 px-4 rounded transition duration-300 w-full max-w-xs mx-auto" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                    <a href="https://tilvids.com/c/gringo_media_channel" className="bg-transparent border-2 border-white hover:border-gray-300 text-white font-bold py-2 px-4 rounded transition duration-300 w-full max-w-xs mx-auto" target="_blank" rel="noopener noreferrer">
                        TILvids
                    </a>
                    <a href="https://gringo.media" className="bg-transparent border-2 border-white hover:border-gray-300 text-white font-bold py-2 px-4 rounded transition duration-300 w-full max-w-xs mx-auto" target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                </div>

                <h3 className=" text-xl font-bold mt-8 mb-4 text-center">Support Me</h3>
                <div className=" flex justify-center gap-4">
                    <a href='https://www.buymeacoffee.com/gringomedia' target="_blank" rel="noopener noreferrer"> <SiBuymeacoffee className="text-xl hover:text-yellow-400 cursor-pointer" /> </a>
                    <a href='https://ko-fi.com/gringomedia' target="_blank" rel="noopener noreferrer"> <SiKofi className="text-xl hover:text-pink-500 cursor-pointer" /></a>
                    <a href='https://liberapay.com/GringoMedia' target="_blank" rel="noopener noreferrer"> <SiLiberapay className="text-xl hover:text-green-500 cursor-pointer" /></a>
                    <a href='https://paypal.me/gringomedia' target="_blank" rel="noopener noreferrer"> <SiPaypal className="text-xl hover:text-blue-500 cursor-pointer" /></a>

                </div>
                <footer className=" mt-8 text-slate-100 text-sm pb-4">
                    <p>Copyright © 2023 by Gringo Media. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;

'use client'
import React, { useState } from 'react';
import {
    FaInstagram,
    FaTiktok,
    FaEnvelope,
    FaYoutube,
    FaExternalLinkAlt,
    FaMusic,
    FaFilm
} from 'react-icons/fa';
import {
    SiMastodon,
    SiBuymeacoffee,
    SiKofi,
    SiLiberapay,
    SiPaypal
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface SocialLink {
    icon: IconType;
    url: string;
    color: string;
    label: string;
}

interface MainLink {
    title: string;
    url: string;
    description: string;
    icon: IconType;
    featured?: boolean;
    isPromo?: boolean;
}

interface SupportLink {
    icon: IconType;
    url: string;
    color: string;
    label: string;
}

const currentYear = new Date().getFullYear();

const LinkInBio: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const socialLinks: SocialLink[] = [
        {
            icon: FaInstagram,
            url: "https://instagram.com/gringomedia.ie",
            color: "hover:text-pink-400",
            label: "Instagram"
        },
        {
            icon: FaTiktok,
            url: "https://tiktok.com/@gringomedia_ie",
            color: "hover:text-white",
            label: "TikTok"
        },
        {
            icon: SiMastodon,
            url: "https://mastodon.ie/@gringomedia",
            color: "hover:text-purple-400",
            label: "Mastodon"
        },
        {
            icon: FaEnvelope,
            url: "mailto:info@gringomedia.ie",
            color: "hover:text-blue-400",
            label: "Email"
        }
    ];

    const mainLinks: MainLink[] = [
        {
            title: "YouTube Channel",
            url: "https://www.youtube.com/@gringomedia",
            description: "Video tutorials and behind-the-scenes content",
            icon: FaYoutube,
        },
        {
            title: "Main Website",
            url: "https://gringomedia.ie",
            description: "Portfolio, services, and client work",
            icon: FaExternalLinkAlt,
        },
        {
            title: "10% off Dehancer",
            url: "https://www.dehancer.com/store/video/davinci_resolve",
            description: "Professional color grading tools | Code: GRINGOMEDIA10",
            icon: FaFilm,
            isPromo: true
        },
        {
            title: "70% off Audiio",
            url: "https://ref.audiio.com/33m63ch8",
            description: "Royalty-free music and sound effects",
            icon: FaMusic,
            isPromo: true
        }
    ];

    const supportLinks: SupportLink[] = [
        {
            icon: SiBuymeacoffee,
            url: "https://www.buymeacoffee.com/gringomedia",
            color: "hover:text-yellow-400",
            label: "Buy Me a Coffee"
        },
        {
            icon: SiKofi,
            url: "https://ko-fi.com/gringomedia",
            color: "hover:text-pink-500",
            label: "Ko-fi"
        },
        {
            icon: SiLiberapay,
            url: "https://liberapay.com/GringoMedia",
            color: "hover:text-green-500",
            label: "Liberapay"
        },
        {
            icon: SiPaypal,
            url: "https://paypal.me/gringomedia",
            color: "hover:text-blue-500",
            label: "PayPal"
        }
    ];

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: '#1c191a' }}
        >
            <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
                {/* Profile Section */}
                <div className="text-center mb-8 animate-fade-in">
                    <div className="relative inline-block mb-6">
                        <div
                            className="w-32 h-32 rounded-full mx-auto shadow-2xl ring-4 overflow-hidden"
                            style={{
                                backgroundColor: '#f6e7d8',
                                '--tw-ring-color': '#f6e7d8'
                            } as React.CSSProperties}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src="Keagan-Portrait.jpeg"
                                alt="Keagan - Gringo Media"
                            />
                        </div>
                        <div
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: '#f6e7d8' }}
                        >
                            <span className="text-xs" style={{ color: '#1c191a' }}>📹</span>
                        </div>
                    </div>

                    <h1
                        className="text-3xl font-bold mb-2"
                        style={{ color: '#f6e7d8' }}
                    >
                        Keagan
                    </h1>
                    <p
                        className="text-lg opacity-90 mb-6 leading-relaxed"
                        style={{ color: '#f6e7d8' }}
                    >
                        At Gringo Media, my aim is to share my expertise and experiences,
                        helping you explore the dynamic world of videography.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-8">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                style={{ color: '#f6e7d8' }}
                                aria-label={social.label}
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Links */}
                <div className="space-y-4 mb-8">
                    {mainLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${link.featured ? 'ring-2 ring-opacity-50' : ''
                                }`}
                            style={{
                                backgroundColor: link.featured ? 'rgba(246, 231, 216, 0.1)' : 'rgba(246, 231, 216, 0.05)',
                                ...(link.featured && { '--tw-ring-color': '#f6e7d8' })
                            } as React.CSSProperties}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {link.isPromo && (
                                <div
                                    className="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full"
                                    style={{ backgroundColor: '#f6e7d8', color: '#1c191a' }}
                                >
                                    DEAL
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3
                                        className="text-lg font-semibold mb-1 group-hover:translate-x-1 transition-transform duration-300"
                                        style={{ color: '#f6e7d8' }}
                                    >
                                        {link.title}
                                    </h3>
                                    <p
                                        className="text-sm opacity-75"
                                        style={{ color: '#f6e7d8' }}
                                    >
                                        {link.description}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <link.icon
                                        className="text-xl group-hover:translate-x-1 transition-transform duration-300"
                                        style={{ color: '#f6e7d8' }}
                                    />
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                            />
                        </a>
                    ))}
                </div>

                {/* Support Section */}
                <div className="text-center mb-8">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: '#f6e7d8' }}
                    >
                        Support My Work
                    </h3>
                    <div className="flex justify-center gap-6">
                        {supportLinks.map((support, index) => (
                            <a
                                key={index}
                                href={support.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl transition-all duration-300 transform hover:scale-110 ${support.color}`}
                                style={{ color: '#f6e7d8' }}
                                aria-label={support.label}
                            >
                                <support.icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center">
                    <p
                        className="text-sm opacity-75"
                        style={{ color: '#f6e7d8' }}
                    >
                        © {currentYear} Gringo Media. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LinkInBio;

import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="bg-gray-200 shadow-2xl">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <Link
                                to="/about"
                                className="text-base hover:text-green-600 leading-6 text-gray-500 hover:text-gray-900"
                            >
                                About
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                to="/blog"
                                className="text-base hover:text-green-600 leading-6 text-gray-500 hover:text-gray-900"
                            >
                                Blog
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                to="/"
                                className="text-base hover:text-green-600 leading-6 text-gray-500 hover:text-gray-900"
                            >
                                Home
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                to="/service"
                                className="text-base hover:text-green-600 leading-6 text-gray-500 hover:text-gray-900"
                            >
                                Service
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                to="/contact"
                                className="text-base hover:text-green-600 leading-6 text-gray-500 hover:text-gray-900"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <Link to="https://www.linkedin.com/in/rayhan-r12/"
                              className=" hover:text-gray-500">
                            <i className="bi bi-linkedin"></i>

                        </Link>
                        <Link to="https://www.facebook.com/mostakimrayhanmd" className=" hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link to="https://github.com/rayhan-88" className=" hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2021 SomeCompany, Inc. All rights reserved.
                    </p>
                </div>
            </section>
        </>

    );
};

export default Footer;
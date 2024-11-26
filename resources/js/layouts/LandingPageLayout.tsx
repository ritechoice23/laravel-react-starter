import React, {ReactNode} from 'react';
import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/components/ApplicationLogo";
import {Button} from "@/components/ui/button";

function LandingPageLayout({children}: {
    children: ReactNode
}) {
    return (
        <>
            <div className="relative min-h-screen bg-background">
                <nav
                    className="w-full py-4  px-4 md:px-8 bg-white">
                    <div className="max-w-6xl flex md:justify-between justify-center items-center mx-auto">
                        {/* Left section (Logo & Text) */}
                        <Link href="/" className="flex items-center gap-2 rounded-xl border shadow-sm p-3">
                            <ApplicationLogo className="w-8 h-8"/>
                            <span className="font-extrabold text-xl text-foreground">
                       ZionStack
                       </span>
                        </Link>

                        {/* Right section (Buttons) */}
                        <div className="items-center space-x-4 hidden lg:flex">
                            <Link href={'/login'}>
                                <Button variant='secondary'>
                                    Log in
                                </Button>
                            </Link>

                            <Link href={'/register'}>
                                <Button variant='default'>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </nav>


                {children}

                {/* Footer Section */}
                <footer className="bg-slate-900 text-white py-12 mt-7">
                    <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 p-4">

                        {/* ZionStack Brand Info */}
                        <div>
                            <h3 className="text-2xl font-extrabold mb-4 text-indigo-400">ZionStack</h3>
                            <p className="text-slate-300">
                                ZionStack is the Space for All Things Faith.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            {/*<h4 className="text-xl font-semibold mb-4">Quick Links</h4>*/}
                            {/*<ul className="space-y-2">*/}
                            {/*    <li><a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About*/}
                            {/*        Us</a></li>*/}
                            {/*    <li><a href="#blog"*/}
                            {/*           className="hover:text-indigo-400 transition-colors duration-300">Blog</a></li>*/}
                            {/*    <li><a href="#contact"*/}
                            {/*           className="hover:text-indigo-400 transition-colors duration-300">Contact</a></li>*/}
                            {/*    <li><a href="#privacy" className="hover:text-indigo-400 transition-colors duration-300">Privacy*/}
                            {/*        Policy</a></li>*/}
                            {/*</ul>*/}
                        </div>

                        {/* Newsletter Signup */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
                            <p className="text-slate-300 mb-4">
                                Subscribe to our newsletter to get the latest faith-based content and updates.
                            </p>
                            <form className="flex flex-col space-y-4">
                                <input type="email" className="px-4 py-3 rounded-lg text-slate-900 focus:outline-none"
                                       placeholder="Your email address"/>
                                <button type="submit"
                                        className="px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300">Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
                        <p>&copy; 2024 ZionStack. All rights reserved.</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://twitter.com/zionstackHQ" target="_blank" rel="noopener noreferrer"
                               className="hover:text-indigo-400 transition-colors duration-300">Twitter</a>
                            <a href="https://facebook.com/ritechoice24" target="_blank" rel="noopener noreferrer"
                               className="hover:text-indigo-400 transition-colors duration-300">Facebook</a>
                            <a href="https://instagram.com/ritechoice23" target="_blank" rel="noopener noreferrer"
                               className="hover:text-indigo-400 transition-colors duration-300">Instagram</a>

                            <Link
                                href={route('termOfService')} rel="noopener noreferrer"
                                className="hover:text-indigo-400 transition-colors duration-300">Term of Service</Link>
                        </div>
                    </div>
                </footer>


            </div>
        </>
    );
}

export default LandingPageLayout;

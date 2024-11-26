import React from "react";
import {Head, Link, usePage} from "@inertiajs/react";
import LandingPageLayout from "@/layouts/LandingPageLayout";

const WelcomePage: React.FC = () => {
    const {config} = usePage().props
    return (
        <>
            <Head title={config.app.name}/>
            <LandingPageLayout>
                {/*    hero section*/}
                <section
                    className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white max-w-xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6">
                        The Space for All Things Faith
                    </h1>

                    {/* Supporting Description */}
                    <p className="text-lg md:text-xl text-slate-950 mb-2 font-bold">
                        Empowering Believers to Do More
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        All in One Place
                    </p>

                    {/* Call to Action Button */}
                    <Link href={'/home'} className="mb-6">
                        <button
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                            Explore Now
                        </button>
                    </Link>
                </section>


                {/*get started*/}
                <div
                    className="max-w-6xl mx-auto grid gap-8 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-slate-950 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-extrabold text-center mb-6 text-slate-50">Ready for you</h1>

                    <div className="w-full flex flex-col lg:flex-row gap-8">
                        {/* Discover Section */}
                        <article
                            className="w-full bg-white text-slate-950 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-3xl font-extrabold my-4">Discover</h2>
                            <p className="text-lg mb-4">
                                Faith-based content from trusted global sources, curated for you.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Curated Just for You</h3>
                                    <p className="text-white">Customize your feed with the content that matters most to
                                        you.</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Always Fresh, Always
                                        Relevant</h3>
                                    <p className="text-white">Get fresh, daily updates that inspire and encourage.</p>
                                </div>
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Stay in the Know</h3>
                                    <p className="text-white">Explore trending topics within the global Christian
                                        community, and be a part of the conversations.</p>
                                </div>
                            </div>
                        </article>

                        {/* Space Section */}
                        <article
                            className="w-full bg-white text-slate-950 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-3xl font-extrabold my-4">Space</h2>
                            <p className="text-lg mb-4">
                                Share links, text, images, or videos in topic-focused communities like marriage,
                                ministry, technology,
                                education, and more.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Engage in Discussions</h3>
                                    <p className="text-white">Join conversations that matters to you.</p>
                                </div>
                                <div className="bg-gradient-to-r from-red-400 to-pink-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Follow Your Passions</h3>
                                    <p className="text-white">Explore and follow specific topics of interest.</p>
                                </div>
                                <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-slate-50">Together we Grow</h3>
                                    <p className="text-white">
                                        Your voice matters. Share your experiences, testimonies, and insights —
                                        together, we strengthen the community and inspire one another.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>


                {/*    action*/}

                {/* CTA Section */}
                <div
                    className="max-w-6xl mx-auto mt-12 bg-white p-8 rounded-lg text-slate-950 shadow-lg text-center border border-gray-200">
                    <h2 className="text-4xl font-extrabold mb-4 text-blue-600">ZionStack is more than just a platform
                        — it’s an experience.</h2>
                    <p className="text-lg mb-6">
                        Be a part of something bigger. Connect and grow with like-minded believers.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="/register"
                           className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                            Join Now
                        </a>
                        {/*<a href="#learn-more"*/}
                        {/*   className="px-8 py-4 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300">*/}
                        {/*    Learn More*/}
                        {/*</a>*/}
                    </div>
                </div>
            </LandingPageLayout>
        </>
    );
};

export default WelcomePage;

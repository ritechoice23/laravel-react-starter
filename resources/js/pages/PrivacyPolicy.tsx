import React from "react";
import {Head, usePage} from "@inertiajs/react";
import LandingPageLayout from "@/layouts/LandingPageLayout";

const WelcomePage: React.FC = () => {
    const {config} = usePage().props
    return (
        <>
            <Head title={'Term of service'}/>
            <LandingPageLayout>
                {/* Terms & Refund Policy Page */}
                <section
                    className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6">
                        Terms of Service & Refund Policy
                    </h1>

                    {/* Supporting Intro Text */}
                    <p className="text-lg md:text-xl text-slate-600 mb-12">
                        Please review our terms of service and refund policy to understand how we operate and handle
                        subscription plans and refunds.
                    </p>

                    {/* Terms of Service Section */}
                    <article
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-md mb-8">
                        <h2 className="text-3xl font-extrabold mb-4">Terms of Service</h2>
                        <div className="text-white text-left space-y-4">
                            <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
                            <p className="text-lg">
                                By subscribing to our services, you agree to comply with and be bound by these Terms of
                                Service. If you do not agree to these terms, you must not subscribe or use the platform.
                            </p>

                            <h3 className="text-xl font-semibold">2. Subscription Plans</h3>
                            <p className="text-lg">
                                Our platform offers various subscription plans to access premium content and features.
                                Your subscription will automatically renew unless canceled before the end of the current
                                billing cycle.
                            </p>

                            <h3 className="text-xl font-semibold">3. Account Management</h3>
                            <p className="text-lg">
                                You are responsible for maintaining the confidentiality of your account information and
                                for all activities that occur under your account.
                            </p>

                            {/* Add additional sections of terms as necessary */}
                        </div>
                    </article>

                    {/* Privacy Policy Section */}
                    <article
                        className="w-full bg-gradient-to-r mb-8 from-green-500 to-teal-600 text-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-extrabold mb-4">Privacy Policy</h2>
                        <div className="text-white text-left space-y-4">
                            <h3 className="text-xl font-semibold">1. Information We Collect</h3>
                            <p className="text-lg">
                                We collect personal information such as your name, email address, and payment details to
                                provide and improve our services.
                            </p>

                            <h3 className="text-xl font-semibold">2. How We Use Your Information</h3>
                            <p className="text-lg">
                                Your information is used to customize your experience, communicate with you, and process
                                transactions.
                            </p>

                            <h3 className="text-xl font-semibold">3. Sharing Your Information</h3>
                            <p className="text-lg">
                                We do not sell your information. It may only be shared with third-party service
                                providers as necessary to operate the platform.
                            </p>

                            {/* Add additional sections of the privacy policy as needed */}
                        </div>
                    </article>

                    {/* Refund Policy Section */}
                    <article
                        className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-extrabold mb-4">Refund Policy</h2>
                        <div className="text-white text-left space-y-4">
                            <h3 className="text-xl font-semibold">1. Subscription Cancellations</h3>
                            <p className="text-lg">
                                You can cancel your subscription at any time. However, cancellations will only take
                                effect at the end of the current billing period. No refunds will be provided for the
                                remaining period of the subscription after cancellation.
                            </p>

                            <h3 className="text-xl font-semibold">2. Refunds</h3>
                            <p className="text-lg">
                                We do not offer refunds for partially used subscription periods. If you believe there
                                was an error in billing or you were charged incorrectly, please contact us within 7 days
                                of the charge, and we will investigate the matter.
                            </p>

                            <h3 className="text-xl font-semibold">3. Billing Disputes</h3>
                            <p className="text-lg">
                                If you notice any discrepancies or unauthorized charges, please contact our support team
                                immediately at support@zionstack.com. We will work with you to resolve the issue.
                            </p>

                            <h3 className="text-xl font-semibold">4. Special Circumstances</h3>
                            <p className="text-lg">
                                In rare cases where a subscription service cannot be delivered due to technical issues
                                on our side, we may offer partial or full refunds. Such cases will be reviewed on a
                                case-by-case basis.
                            </p>
                        </div>
                    </article>

                    {/*/!* CTA Section *!/*/}
                    {/*<div className="mt-12 text-center">*/}
                    {/*    <a href={'/contact'} className="inline-block">*/}
                    {/*        <button*/}
                    {/*            className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300">*/}
                    {/*            Contact Us*/}
                    {/*        </button>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </section>
            </LandingPageLayout>
        </>
    );
};

export default WelcomePage;

import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import LandingPageLayout from "@/layouts/LandingPageLayout";

const WelcomePage: React.FC = () => {
    const { config } = usePage().props
    return (
        <>
            <Head title={config.app.name} />
            <div>
                Landing page
            </div>
        </>
    );
};

export default WelcomePage;

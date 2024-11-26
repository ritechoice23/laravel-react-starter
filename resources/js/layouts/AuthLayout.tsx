import {Link, usePage} from '@inertiajs/react';
import {PropsWithChildren} from 'react';
import ApplicationLogo from "@/components/ApplicationLogo";

export default function AuthLayout({children, pageHeading}: PropsWithChildren & { pageHeading?: string }) {
    const {config} = usePage().props
    const {app} = config

    return (
        <div
            className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0 min-w-screen">
            <div className="flex flex-col items-center justify-center min-w-full gap-4">
                <div className='flex items-center gap-2'>
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current"/>
                    <div>
                        <Link as='h1' href='/' className="text-3xl font-extrabold text-green-500 cursor-pointer">
                            {app?.name}
                        </Link>
                        <p>
                            {app?.description}
                        </p>
                    </div>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    {pageHeading && <p className="my-4 text-lg font-extrabold text-center text-slate-950">
                        {pageHeading}
                    </p>}

                    {children}
                </div>
            </div>
        </div>
    );
}

import {PropsWithChildren, ReactNode} from 'react';
import {Head} from '@inertiajs/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNav from './components/ButtomNav';

export default function AuthenticatedLayout({title, pageTitle, children}: PropsWithChildren<{
    title?: string, //for html header
    pageTitle?: ReactNode, // for title of the page in mobile view
}>) {

    return (
        <>
            <Head title={title}/>
            <div className="min-h-screen bg-white">
                <Sidebar/>
                <Header/>
                <div className="lg:ml-64">
                    {children}
                </div>
                <BottomNav/>
            </div>
        </>

    );
}

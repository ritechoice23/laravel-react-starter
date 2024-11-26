import GlobeIcon from '@/components/icons/GlobeIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import { Link } from '@inertiajs/react';
import { User } from 'lucide-react';
import React from 'react';
import { useAuth } from "@/hooks/UseAuth";

const Sidebar = () => {
    const { user, isAuth } = useAuth()
    const menus = [
        {
            'title': 'Home',
            'href': '/',
            'icon': <HomeIcon />,
            'show': true
        },
        // {
        //     'title': 'Admin',
        //     'href': '/admin',
        //     'icon': <Shield />
        // },
    ];
    return (
        <div className="fixed bottom-0 hidden w-64 h-screen bg-white border-r text-slate-950 lg:block top-12">
            <div className='h-full pt-4 overflow-y-auto'>
                <div className="flex flex-col gap-6 mt-4 mb-4">
                    {menus.map((menu, index) => (
                        menu?.show ? <Link className='flex items-center w-full gap-2 px-4 text-lg text-left' key={index}
                            href={menu.href}>
                            {menu.icon} {menu.title}
                        </Link> : null
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

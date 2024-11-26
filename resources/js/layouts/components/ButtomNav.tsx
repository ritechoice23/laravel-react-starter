import GlobeIcon from '@/components/icons/GlobeIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import {Link} from '@inertiajs/react';
import {User} from 'lucide-react';

const BottomNav = () => {
    const menus = [
        {
            'title': 'Home',
            'href': route('home'),
            'icon': <HomeIcon className="w-6 h-6"/>
        },
        {
            'title': 'Sources',
            'href': route('post.source.index'),
            'icon': <GlobeIcon className="w-6 h-6"/>
        },
        {
            'title': 'Profile',
            'href': route('profile.edit'),
            'icon': <User className="w-6 h-6"/>
        },
        // {
        //     'title': 'Admin',
        //     'href': '/admin',
        //     'icon': <Shield className="w-6 h-6" />
        // },
    ];
    return (
        <div
            className="fixed bottom-0 flex items-center justify-around w-full py-4 border-t h-14 text-slate-900 bg-gray-50 lg:hidden rounded-t-3xl border-t-slate-300">
            {menus.map((menu, index) => (
                <Link key={index} href={menu.href} className='flex flex-col items-center justify-center'>
                    {menu.icon} {menu.title}
                </Link>
            ))}
        </div>
    );
}

export default BottomNav;

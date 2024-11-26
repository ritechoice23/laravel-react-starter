// Header.js
import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React from 'react';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import UserMenu from './UserMenu';
import { useAuth } from '@/hooks/UseAuth';
import { LogIn } from 'lucide-react';

const Header = () => {
    const { isAuth } = useAuth();
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between px-2 bg-white border-b h-14">
            <Link href="/" className="flex items-center gap-2">
                <ApplicationLogo className="block w-auto h-8" />
                <h1 className="text-xl font-bold">Zionstack</h1>
            </Link>

            <SearchBar />

            <div className="flex items-center space-x-4">
                {/* <Button className='hidden lg:block'>
                    New Post
                </Button> */}
                <div className="p-2 bg-white rounded-full">
                    {isAuth ? <UserMenu /> : <Link href="/login">
                        <Button>
                            <span className='hidden lg:block'>
                                Login
                            </span>
                            <LogIn className='w-6 h-6 lg:ml-2' />
                        </Button>
                    </Link>}
                </div>
            </div>
        </div>
    );
}

export default Header;

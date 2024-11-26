// Navigation menu component (sidebar & mobile)
import React, {ReactNode, useEffect, useState} from "react";
import {AlignRight, ArrowLeft, Bell, Globe, Home, LogOut, Plus, Search, Settings} from "lucide-react";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Link, router, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/components/ApplicationLogo";
import {Sheet, SheetContent} from "@/components/ui/sheet";
import {useAuth} from "@/hooks/UseAuth";
import TagShowData = App.Data.TagShowData;

interface AppLayoutProps {
    children: ReactNode;
    title?: string, //for html header
    pageTitle?: ReactNode, // for title of the page in mobile view
}

// Main Layout
export default function AppLayout({children, pageTitle = "ZionStack"}: AppLayoutProps) {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu(!openMenu);
    const isHome = location.pathname === '/home';
    const props = usePage().props
    const tags = props.tags as TagShowData[]


    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Sidebar for large screens */}
            <aside
                className="hidden lg:block fixed top-0 bottom-0 left-0 w-56 h-full border-r p-4">
                <Link href={route('home')} className="flex gap-2 items-center p-3 mb-4">
                    <ApplicationLogo className="w-8 h-8"/>
                    <div className="text-2xl font-extrabold text-green-500">9jaSpace</div>
                </Link>
                <NavMenu/>

                <div className="mt-4 h-full overflow-y-auto">
                    <div className="h-full overflow-y-auto p-2 rounded-xl bg-gray-50">
                        <div className="mb-3">
                            <h2 className="text-md font-bold text-gray-800">Trending Topics</h2>
                        </div>
                        <ul className="space-y-1">
                            {tags.map((tag, index) => (
                                <Link href={route('home', {'tag': tag.name})}>
                                    <li
                                        key={index}
                                        className="text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200 p-2 rounded-md hover:bg-gray-200"
                                    >
                                        {tag.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>

            {/* Responsive side menu */}
            <Sheet open={openMenu} onOpenChange={toggleMenu}>
                <SheetContent side="left"><NavMenu/></SheetContent>
            </Sheet>

            {/* Main Content */}
            <main className="flex-1 lg:ml-56 flex flex-col">
                <Header pageTitle={pageTitle} isHome={isHome} toggleMenu={toggleMenu}/>
                <div className="mt-8 flex-1 overflow-auto pb-20">{children}</div>
            </main>

            {/* Bottom navigation for mobile */}
            {/*<BottomNav/>*/}
        </div>
    );
}


export function NavMenu() {
    const {isAuth, user} = useAuth();
    const logout = () => {
        if (confirm("Sure to logout?")) {
            router.post(route('logout'));
        }
    };

    return (
        <nav className="space-y-4">
            {/* Home Button */}
            <MenuItem
                icon={<Home size={20}/>}
                label="Home"
                link="/home"
            />


            {/* Sources Button */}
            <MenuItem
                icon={<Globe size={20}/>}
                label="Spaces"
                link={route('space.index')}
            />

            {/* Space Button */}

            {/*<MenuItem*/}
            {/*    icon={<User size={20}/>}*/}
            {/*    label="Space"*/}
            {/*    link={route('space.index')}*/}
            {/*/>*/}

            {/* Notifications Button (only if authenticated) */}
            {/*{isAuth && (*/}
            {/*    <MenuItem*/}
            {/*        icon={<Bell size={20}/>}*/}
            {/*        label="Notifications"*/}
            {/*        link="/notifications"*/}
            {/*    />*/}
            {/*)}*/}


            {isAuth && (
                <MenuItem
                    icon={<Plus size={20}/>}
                    label="Create"
                    link={route('post.create')}
                />
            )}

            {isAuth && (
                <MenuItem
                    icon={<Avatar>
                        <AvatarFallback>
                            {user?.name[0]}
                        </AvatarFallback>
                    </Avatar>}
                    label={user?.name}
                    link={route('profile.show', user)}
                />
            )}

            {isAuth && (
                <MenuItem
                    icon={<Settings size={20}/>}
                    label="Setting"
                    link={route('profile.edit')}
                />
            )}

            {isAuth && (
                <MenuItem
                    icon={<LogOut size={20}/>}
                    label="Logout"
                    onClick={logout} // Custom action for logout
                />
            )}

            {!isAuth && (
                <MenuItem
                    icon={<LogOut size={20}/>}
                    label="Login"
                    link={route('login')}
                />
            )}
        </nav>
    );
}

// Sidebar Menu Item (used for large screens)
interface MenuItemProps {
    icon: ReactNode;
    label: string;
    link?: string; // Optional URL
    onClick?: () => void; // Optional onClick handler
}

export function MenuItem({icon, label, link, onClick, ...rest}: MenuItemProps) {
    return link ? (
        <Link
            href={link}
            className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg w-full transition-colors duration-200"
            {...rest}
        >
            {icon}
            <span className="text-gray-700">{label}</span>
        </Link>
    ) : (
        <button
            onClick={onClick}
            className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg w-full transition-colors duration-200"
            {...rest}
        >
            {icon}
            <span className="text-gray-700">{label}</span>
        </button>
    );
}


export function BottomNav() {
    const {isAuth} = useAuth();

    return (
        <nav
            className="lg:hidden fixed bottom-0 border-t rounded-t-3xl w-full bg-white shadow-lg flex justify-around items-center h-16">
            <BottomNavItem
                icon={<Home size={24}/>}
                label="Home"
                hasNotification={false}
                link="/home" // Provide URL here
            />

            <BottomNavItem
                icon={<Search size={24}/>}
                label="Search"
                hasNotification={false}
                link="#" // Provide URL here
            />

            {isAuth && (
                <div className="flex items-center justify-center">
                    <button
                        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full h-12 w-12 shadow-lg transition-transform transform hover:scale-110">
                        <Plus size={24}/>
                    </button>
                </div>
            )}

            {isAuth && (
                <BottomNavItem
                    icon={<Bell size={24}/>}
                    label="Notifications"
                    hasNotification={true}
                    link="#" // Provide URL here
                />
            )}
        </nav>
    );
}


interface BottomNavItemProps {
    icon: ReactNode;
    label?: string;
    hasNotification?: boolean;
    centerButton?: boolean;
    link?: string;
    onClick?: () => void;
}

export function BottomNavItem({
                                  icon,
                                  label,
                                  hasNotification = false,
                                  centerButton = false,
                                  link,
                                  onClick
                              }: BottomNavItemProps) {
    const buttonClass = centerButton
        ? "flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full h-12 w-12 shadow-lg transition-transform transform hover:scale-110"
        : "flex flex-col items-center text-gray-700 transition-colors duration-200 hover:text-blue-500";

    const ButtonContent = (
        <>
            <button className={buttonClass} onClick={onClick}>
                {icon}
                {!centerButton && label && <span className="text-xs">{label}</span>}
            </button>
            {hasNotification && !centerButton && (
                <span
                    className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 text-xs text-white flex items-center justify-center">4</span>
            )}
        </>
    );

    return link ? (
        <Link href={link} className="relative">
            {ButtonContent}
        </Link>
    ) : (
        <div className="relative">
            {ButtonContent}
        </div>
    );
}


// Header with scroll-hide logic
interface HeaderProps {
    pageTitle?: string | ReactNode;
    isHome: boolean;
    toggleMenu: () => void;
}

export function Header({pageTitle, isHome, toggleMenu}: HeaderProps) {
    const {user, isAuth} = useAuth();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setShowHeader(currentScrollPos <= lastScrollPos);
        setLastScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollPos]);

    return (
        <header
            className={`z-50 sticky top-0 transition-transform duration-300 ease-in-out lg:hidden p-4 bg-white ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
            {!isHome ? (
                <div className="flex items-center space-x-2">
                    <Link href={route('home')}><ArrowLeft size={24} className="text-gray-700"/></Link>
                    <h1 className="text-xl font-semibold">{pageTitle}</h1>
                </div>
            ) : (
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                        <Link href={route('home')}><ApplicationLogo className="w-8"/></Link>
                        <p className="font-bold text-2xl">
                            <span className="text-green-500">9ja</span>Space
                        </p>
                    </div>
                    {/*{isAuth && (*/}
                    {/*    <Avatar onClick={toggleMenu} className="w-8 h-8 rounded-full">*/}
                    {/*        <AvatarFallback>{user?.name[0]}</AvatarFallback>*/}
                    {/*    </Avatar>*/}
                    {/*)}*/}

                    <AlignRight size={36} strokeWidth={2.5} onClick={toggleMenu}
                                className="text-slate-950"/>
                </div>
            )}
        </header>
    );
}

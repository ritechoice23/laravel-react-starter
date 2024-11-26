import LogOutIcon from '@/components/icons/LogoutIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Link, router, usePage } from '@inertiajs/react'
import { Users } from 'lucide-react'
import React from 'react'

export default function UserMenu() {
    const { auth } = usePage().props;

    const logout = () => {
        router.post(route('logout'));
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    {/* <AvatarImage src="https://via.placeholder.com/20" alt="User Profile" /> */}
                    <AvatarFallback>
                        {auth.user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'} className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={route('profile.edit')}>
                        <DropdownMenuItem>
                            <Users className="w-4 h-4 mr-2" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={logout}>
                        <LogOutIcon className="w-4 h-4 mr-2" />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

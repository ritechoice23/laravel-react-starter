import AppLayout from '@/layouts/AppLayout'
import {Head, usePage} from '@inertiajs/react'
import React from 'react'
import {UserDataType} from "@/types/UserDataType";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import InvitePeople from "@/pages/profile/partials/InvitePeople";


export default function Show() {
    const props = usePage().props
    const user = props.user as UserDataType
    return (
        <AppLayout
            pageTitle={"View Post"}
        >
            <Head title={`${user.name}(${user.username}) profile`}/>
            <div className="px-1">
                <div className="max-w-2xl min-h-screen mx-auto sm:px-6 lg:px-8 border-x">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center mb-4 gap-5">
                            <Avatar
                                className="w-16 h-16"
                            >
                                {/*<AvatarImage src={user?.avatar}/>*/}
                                <AvatarFallback>
                                    {user?.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">{user.name}</h1>
                                <p className="text-gray-500">u/{user.username}</p>
                            </div>
                        </div>

                        <nav className="flex justify-around w-full mb-6 border-b border-gray-300">
                            {['Overview', 'Posts', 'Comments'].map((tab) => (
                                <a
                                    key={tab}
                                    href="#"
                                    className="pb-2 text-sm text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-blue-500"
                                >
                                    {tab}
                                </a>
                            ))}
                        </nav>

                        <div className="flex flex-col items-center mt-2">
                            <p className="text-lg font-semibold text-gray-700">
                                Nothing to show for u/{user.username} at the moment, while waiting
                            </p>
                            <InvitePeople/>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

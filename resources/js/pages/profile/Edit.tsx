import AppLayout from '@/layouts/AppLayout';
import DeleteUserForm from './partials/DeleteUserForm';
import UpdatePasswordForm from './partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './partials/UpdateProfileInformationForm';
import {Head} from '@inertiajs/react';
import {AppPageProps} from '@/types';

export default function Edit({auth, mustVerifyEmail, status}: AppPageProps<{
    mustVerifyEmail: boolean,
    status?: string
}>) {
    return (
        <AppLayout>
            <Head title="Profile"/>
            <div className="py-12">
                <div className="max-w-4xl mx-auto space-y-6 sm:px-6 lg:px-8">
                    {/*<div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">*/}
                    {/*    <InvitePeople/>*/}
                    {/*</div>*/}
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl"/>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl"/>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
